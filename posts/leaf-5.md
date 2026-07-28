---
title: 'Leaf 5: Build products at the speed of thought'
date: 2026-07-28
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<p>
<b>Leaf 5 is the biggest release in Leaf's history</b>, and it's not just a version bump. It's a natural evolution of what a PHP framework should be in a world where you build alongside AI: a product-first framework with project context built in, a family of tools that work in <i>any</i> PHP app, and a promise that your code stays clean, readable, and yours.
</p>

---

## Why Leaf 5 exists

Every framework says it makes you faster. But "faster" has changed. Today, you're not just writing code, you're directing it. You describe a feature, your AI assistant drafts it, you review and refine. The bottleneck isn't typing anymore; it's how well your tools understand your app.

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

If you've written Leaf before, you already know Leaf 5. If you haven't, you'll know it in an afternoon.

## One team, a whole toolchain

The other big shift in Leaf 5 is that we stopped thinking of Leaf as one framework and started building it as a **family of focused tools** — each with its own home, each usable far beyond Leaf itself:

- **[Alchemy](https://alchemy.leafphp.dev)** — your entire QA setup in one file. Tests (Pest or PHPUnit), code style, automated refactors, static analysis, and CI pipelines for GitHub, GitLab or CircleCI, all described in a single `alchemy.yml`. It works with Leaf, Laravel, Symfony, Slim, or plain PHP, installs nothing until you use it, and `alchemy eject` lets you leave anytime with real config files.

- **[Seedling](https://seedling.leafphp.dev)** — build CLI tools with the Leaf MVC experience. Under the hood is Sprout, our zero-fuss console framework, which just went through a full stability pass: a real test suite, piped input and Windows fixes, and CI running across macOS, Ubuntu and Windows.

- **[Fetch](https://fetch.leafphp.dev)** — `fetch()` for PHP. The request API you already know from JavaScript, working in any PHP app. We rebuilt the internals for v5: every documented option now actually works, form encoding is smarter, responses are more predictable, and the whole surface is covered by tests that run against a real server on every commit.

- **[Hana JS](https://hanabira.dev)** — our simple, lightweight React alternative, because the frontend deserves the same "no overengineering" treatment.

That's on top of 25+ modules — grab exactly what you need, nothing else.

Why framework-agnostic? Partly because good tools deserve a bigger audience. But honestly, it's also an AI-era bet: when an assistant is choosing a library for a task, small, sharp, well-documented tools win. We want Leaf's tools to be the obvious pick whether or not the app is a Leaf app.

## A fresh face for everything

Suppose you've visited [leafphp.dev](https://leafphp.dev) recently, you've seen the new look — and it's not just the docs. Alchemy, Seedling, Fetch, Hana, and this blog all got redesigned around a shared design language: Bricolage Grotesque headings, hairline grids, and each product keeping its own personality and colour. Different homes, same family.

The docs themselves got a deep pass too — a modern reading experience, an ecosystem menu that finally connects all the products, and content updated for everything Leaf 5 changes.

## What we're thinking (the honest part)

A few principles kept us honest while building this release, and they're worth writing down:

1. **AI should amplify you, not replace your judgement.** Leaf 5 gives assistants the context to do great work, but the output is always plain, reviewable PHP. You stay the architect.

2. **Advertise only what works.** Every claim on every new site is backed by code and tests. Where we found gaps between docs and reality — and we found a few — we fixed the code, not the copy.

3. **Small surface, sharp edges.** The framework stays light. Capability comes from modules you opt into, not from a kernel that grows forever.

4. **Free stays free.** Leaf 5, every module, and every tool above is open source and community-backed. If Leaf saves you time, [sponsoring](https://leafphp.dev/support/) is how we keep it that way.

## What's next

We're not done. On the roadmap from here: real-time APIs, better deployment stories, deeper third-party integrations, and more tooling around the shared-context workflow. We'll share each piece here as it lands.

## Try it

```bash
composer global require leafs/cli -W
leaf create my-product
cd my-product && leaf serve
```

Open `http://localhost:5500`, and you have a running app — no setup maze, no ceremony.

If you build something, break something, or just have thoughts, come tell us on [Discord](https://discord.gg/Pkrm9NJPE3) or [GitHub](https://github.com/leafsphp/leaf). Leaf has always been shaped by the people using it, and Leaf 5 more than any release before it.

Thank you for building with us. This is the most excited we've ever been about PHP.

— Michael & the Leaf team
