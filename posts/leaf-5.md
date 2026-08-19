---
title: 'Leaf 5: Build products at the speed of thought'
date: 2026-08-13
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
contributors:
  - fadrian06
  - MischaKr
  - ibnsultan
  - zehntinel
  - ghosthi
  - srcarvalho12
---

<img src="/leaf5-bg-mountains.png" style="width:100%; border-radius: 8px; margin-bottom: 15px;" alt="" />

<p>
<b>Leaf 5 is our biggest release yet.</b> We sat down and rethought what a PHP framework owes you in a world where you build alongside AI: a product-first framework with project context built in, a family of tools that work in <i>any</i> PHP app, and a promise that your code stays clean, readable, and more importantly yours.
</p>

---

## Why Leaf 5 exists

Every framework says it makes you faster. But "faster" has changed. These days you describe the feature you want and your assistant drafts it while you review. The speed of that loop comes down to how well your tools understand your app.

Most frameworks were never designed for that. Conventions live in people's heads, structure hides behind abstractions, and an assistant dropped into the codebase has to guess its way around.

Leaf 5 is our answer: a framework where the structure is obvious, the patterns are consistent, and the project itself carries shared context that both humans and agents can read...and write back to. You ask for a billing module, and the generated code lands where it belongs, looking like the rest of your app. No black boxes. No cleanup afterwards.

And because we're product-first, Leaf 5 ships the pieces real products need: auth, databases, queues, mail, billing and 25+ other features as production-ready modules you pull in exactly when your app asks for them. Nothing more.

## Still just PHP

This part hasn't changed, and it never will. There's no hidden runtime, no proprietary lock-in, no deployment magic. A Leaf 5 app is a PHP app. It runs anywhere PHP runs, and everything it generates is code you can read line by line.

```php
app()->get('/', function () {
  response()->json([
    'message' => 'Leaf 5 😉'
  ]);
});

app()->run();
```

If you've written Leaf before, you already know Leaf 5. Newcomers tend to feel at home within an afternoon.

## One team, a whole toolchain

The other big shift in Leaf 5 is that we stopped thinking of Leaf as one framework and started building it as a **family of focused tools**, each with its own home and each usable far beyond Leaf itself:

- **[Alchemy](https://alchemy.leafphp.dev)** squeezes your whole QA setup into one file. `alchemy.yml` drives your tests (Pest or PHPUnit), code style, refactors, static analysis, and the CI that runs it all on GitHub, GitLab or CircleCI. Works on Laravel, Symfony, Slim and plain PHP too. When you want out, `alchemy eject` hands you real config files and leaves.

- **[Seedling](https://seedling.leafphp.dev)** gives CLI tools the Leaf MVC experience. Sprout, the zero-fuss console framework underneath, just came out of a hardening pass with a proper test suite and fixes for piped input and Windows. CI now proves it on all three desktop platforms.

- **[Fetch](https://fetch.leafphp.dev)** is `fetch()` for PHP. Same request API you already know from JavaScript, usable in any PHP app. We rebuilt its internals for v5 so that every documented option actually works, and the whole surface now runs against a real server on every commit.

- **[Hana JS](https://hanabira.dev)**: our simple, lightweight React alternative, because the frontend deserves the same "no overengineering" treatment.

That's on top of 25+ modules. Grab exactly what you need and nothing else.

Why framework-agnostic? Partly because good tools deserve a bigger audience. But honestly, it's also an AI-era bet: when an assistant is choosing a library for a task, small, sharp, well-documented tools win. We want Leaf's tools to be the obvious pick whether or not the app is a Leaf app.

## Where Leaf 5 fits

Leaf's real competition is a moment, the one where your early product starts working, users show up, and the codebase has to grow up without slowing you down.

The classic options both tax you at that moment. The tiny-router path gives you a fast start, then charges you product time to choose and wire auth, database patterns, validation, mail, queues, views, and structure yourself. The heavy-framework path is serious from day one, but your first version inherits more concepts and more ceremony than the product needs yet. Leaf's path is to start at whatever size your product needs, a single file or a full MVC app, add first-party product modules when your app asks for them, and keep the whole thing readable to humans and agents as it grows.

So, honestly:

Laravel is the right call when you want the largest PHP product ecosystem and you're happy to adopt its full application model.

Symfony fits teams that need deep architecture control, mature components, and enterprise-grade composition.

Slim makes sense if you want the smallest possible HTTP layer and you enjoy assembling the rest of the stack yourself.

And Leaf is for getting a real PHP product into users' hands quickly, keeping the app small enough to understand, with a path to auth, data, frontend, jobs, billing, deployment, and AI-assisted maintenance as it grows.

## The numbers still matter

The product story is the point, but performance is still part of the promise. Leaf 5 keeps framework overhead low so your product gets more of the request budget:

| Routes | Leaf 5 | Symfony Routing | Laravel routing | Slim dispatch |
| --- | --- | --- | --- | --- |
| 100 routes | **6.48ms** | 92.06ms (14.2x) | 192.69ms (29.8x) | 10.81ms (1.7x) |
| 500 routes | **6.29ms** | 257.59ms (40.9x) | 531.60ms (84.5x) | 11.16ms (1.8x) |
| 1,000 routes | **6.51ms** | 477.13ms (73.3x) | 953.34ms (146.5x) | 11.48ms (1.8x) |

These numbers cover route lookup and dispatch overhead rather than full application throughput. Each run fires 10,000 lookups at a mixed static and dynamic route table, alternating exact and parameterized hits, and we average five runs on PHP 8.2. Every framework resolves the same URIs, request objects for the Laravel column are pre-built outside the timed loop, and each column measures routing work only: Illuminate Routing for Laravel, the `symfony/routing` UrlMatcher, and Slim 4's FastRoute-backed dispatch.

The reason lookups stay flat is that Leaf 5 indexes exact routes and buckets dynamic routes by method and first segment, so exact matches never touch a pattern and dynamic requests only scan their own bucket. The same pass made repeated env reads about 41x faster and URI parsing about 4.4x faster per request.

## Errors that fix themselves

When something breaks, you read the error message first. An AI assistant often reads nothing else. So in Leaf 5, error messages are written the way a maintainer would answer a support ticket: what went wrong, what to do about it, and how the fix changes depending on how your app is set up.

<img src="/crash-ai-error.png" style="width:100%; border-radius: 8px; margin: 15px 0;" alt="A Leaf crash report where the error message itself explains the three ways to fix it" />

That's a real crash screen from Leaf 5's new error engine. The remediation is the message. It knows a Leaf MVC app can run `leaf key:generate` and a lite app can't, and it says so, right there, before you've opened a single doc. The crash screen is built for handoff too: **Copy as Markdown** turns the whole report into something you can paste into any chat, and **Open with AI** sends it there directly.

## Burning fewer of your AI tokens

If you build with AI, tokens are money, and most frameworks are expensive to be smart about. Assistants read thousands of words of docs to extract one API, guess at conventions, and burn retries on errors that explain nothing.

Leaf 5 is careful with your assistant's context window. Reference docs sit one hop away at stable URLs, each covering a single topic, small enough to load whole. The [Leaf skill](https://leafphp.dev/ai/SKILL.md) opens with the exact mistakes agents actually make, since correcting a wrong assumption up front costs a fraction of debugging it later. Errors that name their own fix collapse the whole try-fail-search-retry loop. And because `.leaf/CONTEXT.md` carries your architecture between sessions, your assistant reads one small file instead of re-exploring the codebase every time it wakes up.

We don't guess at any of this. AI agents build real apps on Leaf, we count every file they had to open and every retry they burned, and whatever cost them tokens becomes a fix. The error screen above exists because an agent hit the unclear version of that message and told us exactly what it needed to hear instead. More on that story soon, because it deserves its own post.

## A fresh face for everything

If you've visited [leafphp.dev](https://leafphp.dev) recently, you've seen the new look. Alchemy, Seedling, Fetch, Hana and this blog all got the same treatment, redesigned around one shared design language with Bricolage Grotesque headings and hairline grids, while each product keeps its own personality and colour. Different homes, same family.

The docs got a deep pass too. Reading them feels modern now, an ecosystem menu finally connects all the products, and the content covers everything Leaf 5 changes.

## What we're thinking (the honest part)

A few principles kept us honest while building this release, and they're worth writing down:

1. **AI should amplify you, not replace your judgement.** Leaf 5 gives assistants the context to do great work, but the output is always plain, reviewable PHP. You stay the architect.

2. **Advertise only what works.** Every claim on every new site is backed by code and tests. Where we found gaps between docs and reality (and we found a few), we fixed the code, not the copy.

3. **Small surface, sharp edges.** The framework stays light. Capability comes from modules you opt into, not from a kernel that grows forever.

4. **Free stays free.** Leaf 5, every module, and every tool above is open source and community-backed. If Leaf saves you time, [sponsoring](https://leafphp.dev/support/) is how we keep it that way.

## What's next

We're not done. On the roadmap from here: real-time APIs, better deployment stories, deeper third-party integrations, and more tooling around the shared-context workflow. We'll share each piece here as it lands.

## Try it

You'll need PHP 8.2 or newer. Most of the ecosystem already dropped 8.1, so odds are you're there.

```bash
composer global require leafs/cli -W
leaf create my-product
cd my-product && leaf serve
```

Open `http://localhost:5500`. That was the whole setup.

Build something, break something, or just bring opinions, then come tell us on [Discord](https://discord.gg/Pkrm9NJPE3) or [GitHub](https://github.com/leafsphp/leaf). The people using Leaf have shaped it since 2019, and this release more than any before it.

Thank you for building with us. This is the most excited we've ever been about PHP.

— Michael & the Leaf team
