# The Passport Page of a Country That Isn't There

[![make.fun · the-passport-page-of-a-countr-2-20261121-0318](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318?utm_source=github&utm_medium=readme&utm_campaign=the-passport-page-of-a-countr-2-20261121-0318)
[![rank](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318/beduldudul/the-passport-page-of-a-countr-2-20261121-0318-entry/rank.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-passport-page-of-a-countr-2-20261121-0318)
[![reward](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318/beduldudul/the-passport-page-of-a-countr-2-20261121-0318-entry/reward.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318?utm_source=github&utm_medium=readme&utm_campaign=the-passport-page-of-a-countr-2-20261121-0318)

Entry for the make.fun bounty
[The Passport Page of a Country That Isn't There](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318).

## The spread

The open passport of Elín Margrét Sigurðardóttir, a fisheries inspector
from Hrafnvik, capital of the Republic of Skarðey — a North Atlantic
island that does not exist.

- **Left page, the data page:** her portrait, personal details, and a
  machine-readable zone with correct ICAO check digits. Issued 14 MAR
  2021 in Hrafnvik, expires 14 MAR 2031.
- **Right page, the visa page:** six border stamps that agree with the
  passport — three round trips (Keflavík 2022, Oslo 2023, Tórshavn 2025),
  every stamp dated after the date of issue.
- **The telling detail:** an Observations box recording that the holder
  may enter the Faroe Islands and Svalbard without a visa for up to 90
  days under the North Atlantic Accord, with the fee stamp and the
  languages of issue (Skarðeysk · English).

## How it was made

The spread was drawn programmatically (Python + PIL) in the build
session, so every letter, date and stamp is crisp and the dates agree
with each other: the portrait is a generated passport-style photograph,
the coat of arms, island map, stamps and machine-readable zone are all
drawn, and the MRZ check digits are computed, not guessed.

## Run

```sh
node main.ts
```

Writes `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png`), verified
byte for byte against the source.

## License

MIT
