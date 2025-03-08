---
title: Leaf 4.0 is finally here! Build 10x Faster and Lighter
date: 2025-03-08
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<img src="https://github.com/user-attachments/assets/0ddae472-9d1d-4547-8c1c-68529949f0df" style="border-radius: 8px; margin-bottom: 15px;" alt="" />

<p>
Today, we are excited to announce the release of <b>Leaf 4 (🌷 Snowdrop)</b> and <b>Leaf MVC 4 (✈️ Hughes H-4 Hercules)</b>! This marks a new chapter in the evolution of Leaf, making PHP development faster, simpler, and more powerful than ever before. We will cover some highlights in this blog post - for a full list of changes and new features, please consult <a href="https://github.com/leafsphp/leafMVC/compare/v3.9.1...v4.x" target="_blank">the full changelog on GitHub</a>.

Let's dive in!
</p>

---

As we shared in our [last post](https://blog.leafphp.dev/posts/leaf4.html), Leaf is more than just a framework—it’s the fastest way to build and ship your ideas. With Leaf 4, we’ve doubled down on that mission, refining the developer experience so you spend less time configuring and more time creating.

This release is the result of months of iteration, feedback from our amazing community, and a relentless focus on simplicity. Here’s what’s new:

## New CLI & Setup Experience

Say hello to the new Leaf CLI! It removes unnecessary choices and decision fatigue, giving you only what you need—nothing more. You get a guided setup experience that helps you choose the right options for your project, whether you’re building an API, a full-stack app, or a static site. Your next project starts with a single command:

```bash
leaf create
```

![Leaf CLI](https://github.com/user-attachments/assets/9dda26d8-a4af-4474-bdec-7f146517698e)

Your project is now a garden, and the CLI automatically fine-tunes your project based on your selections, setting up the right configurations, directories, and files for you. This means no time wasted on setup—just a ready-to-go environment so you can start building immediately with zero configuration.

## Lightweight & Zero Config

Speaking of no configuration, Leaf 4 is designed to work out of the box with zero setup. In previous versions, config files were everywhere—even if you didn’t need them. That's gone! v4 is all about simplicity and ease of use, so we’ve removed the need for most configurations. No more boilerplate, no more digging through files—just a clean, lightweight structure that gets out of your way.

## Minimalistic & Intuitive

The new Leaf MVC 4 structure is built for simplicity and clarity, giving you a minimalistic structure that stays out of your way. No unnecessary directories, files, or configurations—just the essentials, so you can focus on building, not wrestling with concepts and features you don’t need.

![Leaf MVC 4](https://github.com/user-attachments/assets/8e36b589-dc97-41ac-bcb0-94d50714bc69)

And with the updated `php leaf` console, automation and productivity reach a whole new level. The CLI now includes quickstarts, scaffolding, and intelligent tools that adapt to your project—so you spend less time setting up and more time building. Leaf detects your project type and predicts what you need next.

## Development Automation

Whether you’re building an API or a Vue-powered frontend, Leaf 4 adapts to your needs, scaffolding controllers, models, and routes instantly. Need an authentication system? Just run `php leaf scaffold:auth`.

![Scaffold auth command](https://github.com/user-attachments/assets/ac05f83c-96af-4641-a0f3-1f67779f051d)

And it’s done—fully wired and ready to go.

Leaf 4 removes the manual, repetitive parts of development, so you can focus on what matters: building something great.

## Refreshed Documentation & Learning Paths

A major version upgrade deserves a refreshed learning experience. We’ve completely revamped the Leaf documentation with clearer guides, improved examples, and structured learning paths to help you level up faster.

Whether you’re new to Leaf or an experienced developer, the new docs make it easier than ever to find what you need and start building—without friction. 🚀

![Leaf Docs](https://github.com/user-attachments/assets/8f0e9402-d356-440b-999c-b25776ed7b41)

## Powerful New Features & Enhancements

By now, you’ve probably noticed that Leaf 4 isn’t just about adding new features—it’s about redefining the way you build. Our focus is on making your journey from "hello world" to production as smooth and effortless as possible. The best feature isn’t just a line of code; it’s the one that helps you build, iterate, and ship with confidence.

That said, we’ve also introduced some powerful enhancements to help you go even further:

### 👉 Zero-Config Queues & Jobs

Offload long-running tasks seamlessly. Whether it’s sending emails, processing payments, or handling async jobs, just create a job, dispatch it, and let Leaf take care of the rest—no setup required.

### 👉 First-Class Redis Support

Need fast, scalable caching or session storage? Leaf 4 now includes first-class Redis support. Just install the Redis package, and you’re ready to go. It works with both the native Redis extension and Predis, so you can use what fits your stack.

### 👉 Enhanced Database Layer

Leaf’s database layer is now even more intuitive, whether you’re using models or raw queries. We’ve improved the query builder with simple relationships, eager loading, and automatic connection sharing—giving you less boilerplate and more control.

### 👉 Revamped view layer

Leaf MVC’s view layer is now even more flexible. While Blade is still available by default, you can now easily swap it for any other templating engine with the new View Engine API. Want to use React, Vue, or Svelte? Just use the `view:install` command, and Leaf will set everything up for you. We’ve also added new helpers for Inertia and templating routes, along with response helpers to make your life easier.

## What this means for you

Leaf 4 isn’t just an update—it’s a rethinking of what a PHP framework should be. It’s about building fast, iterating without friction, and shipping your ideas sooner. With Leaf 4, the only question left is: **how fast can you build?**

## Upgrading from Leaf MVC 3

If you’re already using Leaf MVC 3, upgrading to v4 requires a few changes. First off, you need to update the console and framework core to v4. You can do this by running:

```bash
composer install leafs/mvc-core:^4.0 -W
```

Next, you need to update your config files. Leaf MVC 4 configuration is almost identical to v3, but we’ve made a few changes to improve clarity and consistency. To keep things simple, if you are using the default configuration, you can just delete your `config` directory or any config files you didn’t modify.

Finally, you need to update your database files. Leaf 4 switched from migrations, seeds, and factories to a single schema file. This makes it easier to manage your database schema and keep everything in one place. You can generate a schema file by running:

```bash
php leaf g:schema <name>
```

That's pretty much it! Leaf MVC 4 will automatically detect your project type and adjust accordingly.

## Upgrading from Leaf 3

If you are using Leaf 3 without the MVC setup, upgrading is super easy. Just update the Leaf core to v4 by running:

```bash
composer install leafs/leaf:^4.0 -W
```

## Happy gardening! 🌱

This release wouldn’t be possible without the Leaf community—your feedback, ideas, and support have shaped this project, and we’re incredibly grateful. Leaf 4 is here, and we can’t wait to see what you create with it.

If you’re new, there’s never been a better time to dive in. Let’s build something amazing together!
