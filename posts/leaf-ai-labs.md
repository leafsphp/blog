---
title: 'Introducing Leaf AI Labs'
date: 2026-11-15
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<img src="/leaf-ai-labs.jpeg" style="width:100%; border-radius: 8px; margin-bottom: 15px;" alt="Introducing Leaf AI Labs, where we build AI tools on the Leaf foundation" />

<p>
Leaf exists to make building software simpler. For seven years that meant a framework you could learn in an afternoon and still run a real business on. But the way software gets built is changing faster than at any point since Leaf began. People with agents can now ship fast whether they're engineers or not, and that's fascinating!
</p>

---

**Leaf AI Labs** is a software company built on the Leaf foundation. We make products for people who ship software with agents and want the result to be good, and the Lab's revenue is what keeps Leaf itself free and open source.

## What the Lab is built to do

The Lab builds products. Every project in it starts with a problem we ran into ourselves, and it ships when it solves that problem for real work.

Agents are fast. What they are missing is context and taste, because an agent has never seen your app or the standard you hold it to. Each Lab project hands the agent one of those missing pieces, so the speed turns into software you are proud to put your name on.

Leaf 5 was the first step. It is designed so coding agents produce correct Leaf apps, and it ships its own skill so the agent learns Leaf properly instead of guessing.

We build from a small country in Africa, and we build for the world. The Lab is a business. Friday, Alchemy, Craftly and Kata are products with customers and prices, and we intend to grow them into companies in their own right. Leaf and its modules stay open source under MIT, because a framework earns trust by being free, and the Lab earns its keep by selling what gets built on top.

Some of what we make will grow into a product of its own. Some will fold back into Leaf. A few experiments will fail, and we will tell you when they do.

## What is in the Lab today

The Lab opens with five projects. One is launching today, and four are already partly in people's hands.

### New today: Friday

[Friday](https://friday.leafphp.dev) is the first project out of the Lab, and you can download it now. It is a macOS app that gives you AI teammates you message like people. Your bots get a computer of their own, sign in to the tools you already use and come back with the work done. They remember what you teach them, run routines on a schedule and hand work to each other the way colleagues do.

Friday runs on your own Mac and on the AI plan you already pay for, whether that is Claude, ChatGPT, GitHub Copilot or SuperGrok, so there is no second model bill to think about.

<a href="https://friday.leafphp.dev" target="_blank" rel="noopener"><img src="/labs/friday.jpg" alt="The Friday website, showing a chat with a bot that is sorting out next week" style="width:100%; border-radius: 8px; border: 1px solid rgba(128,128,128,.25); margin: 18px 0 8px;" /></a>

### Entry 001: Kata

[Kata](https://kata.leafphp.dev) is our set of taste rules for AI output. On the writing side it is a linter and review workflow that catches the tells of generated text, and you can run it today with `npx @leafphp/kata`. On the design side it reads your codebase once and teaches your coding agent what your product looks like, so AI-written UI matches your app. The design compiler is in development, and the waitlist is open.

Everything Leaf publishes goes through Kata, this post included.

<a href="https://kata.leafphp.dev" target="_blank" rel="noopener"><img src="/labs/kata.jpg" alt="The Kata website, with the headline Your AI has never seen your app" style="width:100%; border-radius: 8px; border: 1px solid rgba(128,128,128,.25); margin: 18px 0 8px;" /></a>

### Entry 002: Alchemy

[Alchemy](https://alchemy.leafphp.dev) is the QA pipeline for PHP apps. You describe your policy once in `alchemy.yml`. Alchemy installs Pest or PHPUnit, CS Fixer, Rector and PHPStan, writes their configs out of sight and generates the GitHub, GitLab or CircleCI pipeline that runs them. It works with Leaf, Laravel, Symfony, WordPress or no framework at all. An agent can read and respect one QA file far more reliably than five unrelated formats.

The Alchemy platform picks up where the pipeline ends. Connect your repo and the same runs stream into one dashboard, with failures traced back to the commit, flake history and a drafted fix. On Leaf 5, crash reports from production arrive on their own with the full user journey attached. Pipeline intelligence ships first, with crash reporting and release insights to follow. The platform is in private beta, and invites go out in waitlist order.

<a href="https://alchemy.leafphp.dev" target="_blank" rel="noopener"><img src="/labs/alchemy.jpg" alt="The Alchemy website, with the headline The QA pipeline that brews itself" style="width:100%; border-radius: 8px; border: 1px solid rgba(128,128,128,.25); margin: 18px 0 8px;" /></a>

### Entry 003: Craftly

[Craftly](https://withcraftly.com) is our answer to WordPress. WordPress powers around 40% of the web, and most of it runs on tech that has been patched over the years where it needed a rethink. Craftly keeps the spirit of WordPress and rebuilds it for the modern web. Writers get a calm editor. Developers get a real platform with APIs, custom themes and the freedom to deploy anywhere.

It also ships the things people always wished WordPress had out of the box: clean SEO without plugins, version history with rollbacks, team roles and automations. You pick a theme, add your content and you are live in under a minute. Every site gets its own dashboard, so you can run several from one place.

<a href="https://withcraftly.com" target="_blank" rel="noopener"><img src="/labs/craftly.jpg" alt="The Craftly website, with the headline Build, beautifully and a preview of the site dashboard" style="width:100%; border-radius: 8px; border: 1px solid rgba(128,128,128,.25); margin: 18px 0 8px;" /></a>

### Entry 004: Hana

[Hana](https://hanabira.dev) is React built for the way agents write code. React is still the dominant way to build UIs, but a modern React setup drags in server components, providers, context wiring and a route table, and every one of those is a place where an agent guesses wrong. Hana removes the guessing. Your file system is the router, so a page the agent drops into `pages/` is live at that path with no config to get wrong. State is global by default through one `useStore` call, so two components share data without context or prop drilling, and the agent has nothing to wire up. Vite, loading pages, error pages and token auth come in the box.

The result is a React app an agent can write correctly on the first pass, and that you can read in full afterwards, because there is simply less of it. Hana already has apps in production, and it pairs with Leaf for a full stack an agent understands end to end.

<a href="https://hanabira.dev" target="_blank" rel="noopener"><img src="/labs/hana.jpg" alt="The Hana website, with the headline React without the overengineering" style="width:100%; border-radius: 8px; border: 1px solid rgba(128,128,128,.25); margin: 18px 0 8px;" /></a>

## What stays the same

Leaf, its modules, Kata and the Leaf skill remain open source under MIT. The framework is still the thing we care most about, and the Lab exists because we want Leaf to be the best place to build when your pair programmer is an agent. If you have been with us since the early releases, thank you. This is the same project with a much bigger ambition.

## What comes next

Over the next few weeks we will publish a full write-up of each project, starting with how Friday works under the hood and why we built it on plans people already have. We will share what we learn along the way, including the parts that do not work.

If you try Friday, tell us what you build with it. You can reach us at mychi@leafphp.dev or on X at [@leafphp](https://x.com/leafphp).

A million installs by the end of the year is still the goal, and the Lab is how we plan to earn the next million. The tools for building software have never been this powerful or this widely available. There is a lot to build, and we would love to build it with you.
