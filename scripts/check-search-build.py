"""Check real Hugo output, not only template strings. No network or model calls."""
from html.parser import HTMLParser
import json
from pathlib import Path
import sys
import xml.etree.ElementTree as ET


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.meta, self.links, self.schemas, self.h1 = {}, [], [], 0
        self.in_json = False
        self.buffer = ''
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'h1':
            self.h1 += 1
        if tag == 'meta':
            self.meta[attrs.get('name', attrs.get('property'))] = attrs.get('content', '')
        if tag == 'link':
            self.links.append(attrs)
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_json, self.buffer = True, ''

    def handle_data(self, data):
        if self.in_json:
            self.buffer += data

    def handle_endtag(self, tag):
        if tag == 'script' and self.in_json:
            self.schemas.append(json.loads(self.buffer))
            self.in_json = False


root = Path(sys.argv[1])
routes = ['', '2026-10/2026-10-13/', '2026-09/2026-09-29/', 'about/', 'contact/', 'en/',
          'en/2026-10/2026-10-13/', 'guides/claude-web-vs-code/', 'guides/codex-subscription-vs-api/']
for route in routes:
    page = Page((root / route / 'index.html').read_text(encoding='utf-8'))
    assert page.h1 == 1, (route, 'H1', page.h1)
    assert page.meta['robots'] == 'index, follow', (route, 'robots')
    assert any(link.get('rel') == 'canonical' and link['href'] == 'https://news.aivora.cn/' + route for link in page.links), (route, 'canonical')
    assert page.meta['description'] == page.meta['og:description'], (route, 'description mismatch')
    assert any(link.get('href') == '/favicon.ico' for link in page.links)
    assert not any('favicon.svg' in link.get('href', '') for link in page.links)
    types = [s.get('@type') for s in page.schemas]
    expected = 'WebSite' if route in ('', 'en/') else 'AboutPage' if route == 'about/' else 'ContactPage' if route == 'contact/' else 'TechArticle' if route.startswith('guides/') else 'BlogPosting'
    assert expected in types, (route, expected, types)
    if route not in ('', 'en/'):
        assert 'BreadcrumbList' in types, (route, types)
    print('PASS', '/' + route, expected)

for language in ('zh', 'en'):
    sitemap = ET.parse(root / language / 'sitemap.xml')
    urls = [node.text for node in sitemap.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
    assert not any(url.endswith('/categories/') for url in urls)
    if language == 'zh':
        assert 'https://news.aivora.cn/tags/' not in urls
    else:
        assert 'https://news.aivora.cn/en/tags/' in urls  # Nonempty EN tags remain indexable.
    prefix = '' if language == 'zh' else 'en/'
    assert 'https://news.aivora.cn/' + prefix + '2026-10/2026-10-13/' in urls
    assert not any('/en/timeline/' in url for url in urls)
    print('PASS sitemap', language, len(urls), 'URLs')

for route in ('tags/', 'categories/', 'en/categories/'):
    page = Page((root / route / 'index.html').read_text(encoding='utf-8'))
    assert page.meta['robots'] == 'noindex, follow', route
    print('PASS empty taxonomy', route)

home = Page((root / 'index.html').read_text(encoding='utf-8'))
assert home.meta['description'] == home.meta['twitter:description']
print('PASS stable home social description')
