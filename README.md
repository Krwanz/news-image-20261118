# news-image-20261118 — Wednesday 18 November 2026, in one image

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/news-image-20261118)

Entry for [make.fun/bounty/news-image-20261118](https://make.fun/bounty/news-image-20261118)
by [@mszwanz27](https://make.fun) / [Krwanz](https://github.com/Krwanz).

## What it is

One image summing up the world's news of Wednesday 18 November 2026, in four
panels plus a footer strip:

1. **Jets over a Gulf strait, smoke rising from a coastal site** — U.S.
   fighter jets struck a Revolutionary Guards missile site on Qeshm Island;
   Iran answered with drones against U.S. bases in Bahrain and Kuwait.
2. **A glass conference centre in Shenzhen at night, the flags of China,
   Russia and the United States out front** — Xi Jinping and Vladimir Putin
   met at the APEC summit ahead of a planned three-way meeting with Donald
   Trump, who arrived from Manila.
3. **A long bridge across a sea strait, one road span collapsed into the
   water** — Ukraine struck the Kerch Bridge to Crimea for a second day.
4. **A ballot box draped in the U.S. flag against snowy Alaska mountains** —
   Democrat Mary Peltola won Alaska's Senate seat, giving Democrats a 56–44
   majority.

The footer adds two more stories of the day: the Ebola outbreak in DR Congo
passing 11,000 cases, and Voyager 1 reaching one light-day from Earth.

The four scenes were generated as one 2×2 grid with no text in it; every
word on the image — the date header, the panel headlines and the footer —
was rendered in code, so the text stays crisp and nothing is garbled.

## How it works

`main.ts` (Node 22, standard library only, no network) copies `entry.png`
(1024×1024 JPEG, 278,144 bytes) to `$MAKEFUN_OUTPUT_DIR/entry.png`,
checking first that it is a whole PNG or JPEG inside the 1 MiB gate
(magic bytes, and the IEND chunk for a PNG or the end-of-image marker for
a JPEG).

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Two runs write byte-identical output.

## Status

Entered as @mszwanz27.

Referral: `a15ed58m`
