import importlib.util
from pathlib import Path
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('translate_en', Path(__file__).parents[1] / 'scripts/translate-en.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
SOURCE = '---\ntitle: Source title\ndescription: Source description\ndate: 2026-10-13\n---\n### One\nA source statement with [evidence](https://example.org/source).\n'


def response(text=SOURCE, reason='end_turn'):
    return {'stop_reason': reason, 'content': [{'type': 'text', 'text': text}]}


class TranslationSync(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        for language in ('cn', 'en'):
            (self.root / 'content' / language).mkdir(parents=True)
        self.add('one.md')

    def tearDown(self):
        self.temp.cleanup()

    def add(self, path, english=True):
        target = self.root / 'content/cn' / path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(SOURCE, encoding='utf-8')
        if english:
            translated = self.root / 'content/en' / path
            translated.parent.mkdir(parents=True, exist_ok=True)
            translated.write_text('Existing English', encoding='utf-8')

    def test_unchanged_is_not_translated(self):
        self.assertEqual(module.select_files(self.root, {}, []), [])

    def test_existing_correction_and_new_file_selected(self):
        self.add('new.md', english=False)
        self.assertEqual(module.select_files(self.root, {}, ['one.md']), ['new.md', 'one.md'])

    def test_language_exclusions_and_unsafe_paths(self):
        self.add('timeline/_index.md', english=False)
        self.add('guides/new.md', english=False)
        self.assertEqual(module.select_files(self.root, {}, ['../outside.md']), [])

    def test_manually_reviewed_hash_skips_only_identical_source(self):
        state = {'reviewed': {'one.md': module.digest(SOURCE)}}
        self.assertEqual(module.select_files(self.root, state, ['one.md']), [])
        (self.root / 'content/cn/one.md').write_text(SOURCE + 'Correction.', encoding='utf-8')
        self.assertEqual(module.select_files(self.root, state, ['one.md']), ['one.md'])

    def test_failure_preserves_existing_content_and_queues_retry(self):
        state = module.update_files(self.root, {}, ['one.md'], 'revision', lambda _: response(reason='max_tokens'))
        self.assertEqual(state['pending'], ['one.md'])
        self.assertEqual((self.root / 'content/en/one.md').read_text(), 'Existing English')
        recovered = module.update_files(self.root, state, [], 'next', lambda _: response())
        self.assertEqual(recovered['pending'], [])
        self.assertIn('A source statement', (self.root / 'content/en/one.md').read_text())

    def test_failed_new_file_is_not_published_as_chinese(self):
        self.add('new.md', english=False)
        module.update_files(self.root, {}, [], 'revision', lambda _: response(''))
        self.assertFalse((self.root / 'content/en/new.md').exists())

    def test_missing_links_and_sections_rejected(self):
        for text in (SOURCE.replace('https://example.org/source', 'https://wrong.org'), SOURCE.replace('### One', 'One')):
            with self.assertRaises(ValueError):
                module.validate_translation(SOURCE, response(text))

    def test_translated_metadata_preserved_dates_not_model_controlled(self):
        translated = SOURCE.replace('Source title', 'English topic title').replace('Source description', 'English summary').replace('2026-10-13', '2030-01-01')
        result = module.validate_translation(SOURCE, response(translated))
        self.assertIn('English topic title', result)
        self.assertIn('English summary', result)
        self.assertIn('2026-10-13', result)
        self.assertNotIn('2030-01-01', result)

    def test_batch_limit_keeps_unprocessed_files_pending(self):
        self.add('two.md', english=False)
        state = module.update_files(self.root, {}, ['one.md'], 'revision', lambda _: response(), limit=1)
        self.assertEqual(state['pending'], ['two.md'])


if __name__ == '__main__':
    unittest.main()
