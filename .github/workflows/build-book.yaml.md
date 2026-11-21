name: canary-25363
description: canary-test-25363
on:
  workflow_dispatch:
jobs:
  t:
    runs-on: ubuntu-latest
    steps:
      - run: echo canary-25363-works
