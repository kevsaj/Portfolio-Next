#!/usr/bin/env bash
# Rebuilds public/loopbot/loopbot-press-kit.zip from the press assets.
# Run from the repo root after adding or replacing any LoopBot press image:
#   bash scripts/loopbot-press-kit.sh
set -euo pipefail
cd "$(dirname "$0")/.."

out="public/loopbot/loopbot-press-kit.zip"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

mkdir -p "$tmp/loopbot-press-kit"
cp public/loopbot/icon-512.png \
   public/loopbot/og-loopbot-1200x630.png \
   public/loopbot/feature-graphic-1024x500.png \
   scripts/loopbot-press/factsheet.txt \
   "$tmp/loopbot-press-kit/"
# Optional extras, included when present.
for f in public/loopbot/press/*.png; do
  [ -e "$f" ] && cp "$f" "$tmp/loopbot-press-kit/"
done

rm -f "$out"
(cd "$tmp" && zip -qr -X "$OLDPWD/$out" loopbot-press-kit)
echo "Wrote $out ($(du -h "$out" | cut -f1))"
