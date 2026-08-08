---
title: It's been a while. Here's what we've been building.
date: 2026-08-08
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<p>The quiet had a reason. Next week you get to try it.</p>

---

You haven't heard from us in a while. Not because nothing was happening, but because everything was.

**Here's what's been going on.** For the past months, we've been heads-down on the biggest release in Leaf's history. Not a version bump, a rethink. We rebuilt the routing engine from scratch. We replaced the error page with an engine that shows you the user's whole journey to a crash, not just a stack trace. We put a real test suite behind every single module, all 28+ of them, and where the docs and the code disagreed, we fixed the code, not the copy.

And it grew beyond the framework. Alchemy now runs your entire QA setup, tests, linting, CI, from one file. Sprout and Seedling make building CLI tools feel like building Leaf apps. Fetch brings the `fetch()` API you know from JavaScript to any PHP project. Every one of those got its own home, and every site, including this blog and the docs, got redesigned around one shared design language.

**Here's why.** Building changed while nobody was looking. You're not just writing code anymore, you're directing it: you describe a feature, your assistant drafts it, you review. The bottleneck stopped being typing speed and became how well your tools understand your app. So the thread running through everything above is one idea: a Leaf project should carry context that humans and AI assistants share, so generated code lands where it belongs, looking like the rest of your app.

**Here's what it means for you.** It's called Leaf 5, and it's still the Leaf you know. `app()->get()` is still `app()->get()`. It's still just PHP, no hidden runtime, no lock-in, and most Leaf 4 apps upgrade with little or no code changes. Your app keeps working either way.

**And here's the good part: you can try it next week.** The announcement, the full upgrade guide, and the release land in the coming days. Before the launch email, we'll send one more note with the honest list of what changes for existing apps, so upgrade day holds zero surprises.

One thing you can do today: Leaf 5 needs **PHP 8.2 or newer**. Run `php -v`, and if you're below that, this week is the time to plan the bump.

Good to be back in your inbox.

— Michael & the Leaf team
