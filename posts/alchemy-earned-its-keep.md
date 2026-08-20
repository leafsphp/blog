---
title: 'The weekend Alchemy earned its keep'
date: 2026-08-21
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<p>
Launch weeks have a way of humbling you, and our Leaf 5 launch week was no exception. This is the story of the worst weekend we've had in a while, and the one boring tool that carried us through it.
</p>

---

## So what happened?

We shipped Leaf 5 a few days ago, and a couple of bug reports came in almost immediately. As we mentioned in the Leaf 5 announcement, we had AI agents building real apps on Leaf 5 to stress test everything, so a good number of these reports came from the agents themselves, and the rest came from users trying out the new release. Most of the reports were small things, however two of them were the kind that make you drop everything.

By the end of that weekend we'd tagged ten releases across ten different repos, and when I say ten I mean our database layer, auth, the CLI, the Vite bridge, the schema module, our error engine and a few others, each with its own changelog, its own tests and its own release, which is honestly not how anyone plans to spend a weekend!

Fixing that many issues/regressions across that many repositories in two days sounds like a nightmare, and parts of it were. The reason it stayed manageable comes down to one file we keep in every single repo.

## One file, everywhere

Every Leaf repo carries a file called `alchemy.yml`. This one file holds the entire QA setup for that repo, so the tests, the code style, static analysis and the CI all live in the same place. This also means every repo responds to the same commands, and the routine never changes no matter where you are working.

So why are we making noise about a config file? Because of what it did for us at 11pm. Pull the repo, write a failing test, fix the bug, run `composer run test`. The database module at 11pm and the auth module at 1am asked for the exact same thing from us, and six hours into a bug hunt, not having to remember how each repo works is a huge deal.

Here's the actual file from our filesystem module, with the lint rules trimmed down a bit:

```yaml
app:
  - src

tests:
  engine: pest
  parallel: true
  paths:
    - tests

lint:
  preset: PSR12
  rules:
    single_quote: true
    no_unused_imports: true

actions:
  run:
    - lint
    - tests
  os:
    - macos-latest
    - ubuntu-latest
    - windows-latest
  php:
    extensions: json, zip
    versions:
      - '8.4'
      - '8.3'
      - '8.2'
```

That's the entire setup for that repo. [Alchemy](https://alchemy.leafphp.dev) reads this file and handles Pest, php-cs-fixer and the GitHub Actions matrix under the hood. A section being present is what turns a tool on, so removing a section is how you opt out. Everything the tools generate goes into a gitignored `.alchemy/` folder, which means your repo root stays exactly one file big.

**Note that the `engine` line in there is doing real work.** Pest is our default across every repo, however if your project already carries PHPUnit without Pest, Alchemy detects that and runs PHPUnit instead, existing config and all. We plan to add support for more engines later, and the whole point of the yaml is that your file stays the same even when the tool underneath it changes.

## The bug we could not even reproduce

**Note that the `windows-latest` line in that file is not decoration.** Our filesystem module had a bug where bucket keys were built with backslashes on Windows, so uploads worked for us and failed for the people reporting the issue. Nobody on this team develops on Windows, and reproducing it locally was somewhere between difficult/impossible without borrowing a laptop.

The generated matrix runs Windows on every push however, and the failing job pointed us straight to the test. A problem we couldn't even see with our own eyes was found and fixed the same Saturday. This is the kind of thing that makes the whole one-file approach feel worth it.

## The embarrassing part

Alchemy itself had a bug that weekend. Passing `--flags=coverage` to the test command forwarded a broken `--1` to Pest instead, because of how our console framework parsed option signatures. So yes, our QA tool briefly failed at its one job, and we fixed Alchemy using Alchemy, which felt very fitting.

The part we think about the most is why the bug survived in the first place. There was a test covering flag forwarding, and it passed. This test passed because it asserted a shape that a certain failure also happened to produce, which is the worst kind of green checkmark you can have. The replacement test now checks that Pest never receives an unknown option at all. Honestly, that false positive taught us more than the bug did.

## It works outside Leaf too

Alchemy is framework agnostic, and this release gave the Laravel side a ton of attention. Running `alchemy init` in a Laravel project detects the framework, selects [Pint](https://laravel.com/docs/pint) with the `laravel` preset automatically, and ports your existing `pint.json` over completely, since Pint rules are php-cs-fixer rules under the hood. Static analysis wires up Larastan on its own as well. Symfony, Slim and plain composer projects get the same treatment, and if you ever want to leave, `alchemy eject` writes out your real config files and steps aside.

## What about static analysis and refactors?

Testing and linting carried the weekend, so they got the spotlight in this post, however `alchemy.yml` has two more sections we lean on during calmer weeks. Adding an `analyse` section turns on static analysis with [PHPStan](https://phpstan.org), and the things you would normally spread across a phpstan.neon, so the strictness level, your paths and your baseline file, live in the same yaml as everything else. In a Pest project it also pulls in the plugin that makes PHPStan understand Pest's syntax, and in a Laravel project it sets up Larastan for you, the same way the Laravel detection works for linting. Our auth module runs its analysis at level 8, baseline and all, from that same one file.

Then there is `refactor`, which runs [Rector](https://getrector.com) under the hood. You choose your rule sets in the yaml (`dead-code` and `code-quality` are the ones Alchemy runs on itself), and `alchemy refactor` applies them across the codebase. There is a `--check` flag as well, which reports pending refactors without changing anything, so CI can fail on a stale pattern the same way it fails on a lint error. This means the cleanups that usually wait for "someday" happen as part of the normal routine instead of becoming a project of their own.

## Our CLI finally got tests

One more story from the weekend, and honestly my favourite one. Our CLI had gone years without a test suite, and that finally caught up with us, so in the middle of everything we ran `alchemy init` on it and wrote the first nineteen tests that same afternoon. One of those tests caught a completely unrelated bug before the day even ended, a frontend package we'd forgotten to pin in one of the install paths!

That suite sits at 22 tests today, and it has caught something real almost every day since. Years of "we should really add tests to this" turned into an afternoon of actually doing it, and the only thing that changed was that the setup stopped being a project of its own.

By Sunday night, the test count across those ten repos stood at 325, all green. The weekend was still rough. However the difference between a rough weekend and a lost week came down to the same thing I mentioned earlier, which is that we never once had to stop and remember how any repo's QA worked.

## Try it on something real

```bash
composer require leafs/alchemy --dev
vendor/bin/alchemy init
```

`init` looks at what you already have, asks whether to port/keep your existing configs, and writes your first `alchemy.yml`. From there you can remove the sections you don't need and run `composer run test`.

We built Alchemy because we needed it ourselves, and this weekend proved that in the most direct way possible. If it ends up saving one of your weekends too, come tell us about it on [Discord](https://discord.gg/Pkrm9NJPE3), we would genuinely love to hear it 🍁

— Michael & the Leaf team
