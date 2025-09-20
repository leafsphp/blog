---
title: 'September Recap: New in Leaf!'
date: 2025-09-20
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<img src="https://github.com/user-attachments/assets/9e97bc87-0cdc-4bc1-95e3-aeba4ab7788e" style="width:100%;` border-radius: 8px; margin-bottom: 15px;" alt="" />

<p>
It's been 6 months since we released Leaf 4 and Leaf MVC 4, and what a journey it's been! From new features to community growth, we've been busy making Leaf the best framework for Makers. In this recap, we'll highlight some of the exciting developments and what's coming next. Let's dive in!
</p>

---

## 2025 Roadmap progress

Earlier this year, we shared our [2025 roadmap](https://blog.leafphp.dev/posts/2025-roadmap.html), outlining our vision for Leaf. You don't have to read it again, but in summary, we are building Leaf to be the easiest way to build and ship your ideas, focusing on modularity, automation, and a developer-friendly experience. Our list had items like:

- Leaf 4 & Leaf MVC 4 releases
- New website and documentation
- Integrations with popular services like Stripe
- A better database layer
- A tighter integration with frontend tools & templating engines
- UI components and templates to speed up development
- Better security and performance
- More tutorials and learning resources
- Easier deployment options using CLI
- Automating queues, redis, and other services
- General improvements to the developer experience

We are happy to report that we've made significant progress on many of these items, and we're excited to share some of the highlights with you.

## 🌟 Leaf 4 release

We released Leaf 4.0 and Leaf MVC 4.0, marking a significant step toward a more modular, automated, and developer-friendly framework. You can read all about the releases [in this post](/posts/leaf4-is-here.html). Leaf 4 might just be our favourite release yet because it doesn't just bring new features; it pushes the boundaries of what a PHP framework can do while keeping it simple and easy to use. Here are our fav features from v4:

- **Redefined modularity**: Leaf 3 introduced modularity, but Leaf 4 takes it to the next level. Every feature is now a module that can be installed or removed as needed, allowing you to keep your application lean and focused. And with Leaf MVC 4, simply installing a module automatically configures it for you so no extra setup is needed.

- **Zero setup**: Leaf 4 is designed to work out of the box with zero setup. Whether you're starting a new project or adding Leaf to an existing one, you can get up and running in minutes without any configuration headaches.

- **Improved developer experience**: We've made significant improvements to the developer experience, including better error messages, improved documentation, and a more intuitive API. Leaf 4 is designed to be easy to learn and use, even for developers new to PHP or web development.

These are just a few of the many features and improvements in Leaf 4, and 6 months later, we are still discovering new ways to leverage its capabilities.

## 📚 New website, documentation & tutorials

Just as we do for every major release, we launched a new website and documentation for Leaf 4. The new site is designed to be more user-friendly, with a focus on helping you find the information you need quickly and easily. The documentation has been completely rewritten to reflect the changes in Leaf 4, with plenty of examples and tutorials to help you get started.

We also added a "learn" section to the website, featuring tutorials, guides, and best practices for building applications with Leaf. We also added guides for working with third-party services like Sentry, Google Analytics, Mixpanel and more. Whether you're a beginner or an experienced developer, there's something for everyone in the learn section.

Of course, we will continue to improve the website and documentation based on your feedback, so please let us know if there's anything you'd like to see.  

## 🕣 Easier & Faster deploys

One of our main goals for the year was to build a `leaf deploy` command to make deploying Leaf apps as simple as running a single command. While we haven't fully completed this yet, the Leaf CLI has shipped the first version of this feature, allowing you to deploy Leaf apps to Fly.io with just one command. Why Fly.io? Because it's simple, easy to use, and has a free tier that works well for most Leaf apps.

We are working on adding support for more platforms, including Vercel, Render, and others, so you will be able to deploy your Leaf apps to your platform of choice with just one command that goes something like:

```bash
leaf deploy --to vercel
# or
leaf deploy --to render
```

or even to your VPS on DigitalOcean, Linode, or any other provider with:

```bash
leaf deploy --to vps --os ubuntu-latest
```

## 🌺 New modules & Improvements

The next big area of focus has been improving existing modules and adding new ones to make building applications with Leaf even easier. Here are some of the highlights:

- **Leaf Billing**: We released Leaf Billing, a new module that makes it easy to add subscription billing to your Leaf apps using Stripe or PayStack. With Leaf Billing, you can manage customers, subscriptions, and payments with just a few lines of code without any complex setup.

- **Leaf Cache**: We added a new zero-config cache module that allows you to handle caching in a simple, single line of code. You can now cache database queries, API responses, or any other data with ease.

- **Queues/Jobs**: Queues and background jobs are essential for building scalable applications, and we've made significant improvements since the release in Leaf 4.0.

- **Scheduled Jobs**: We took default jobs a step further by adding support for scheduled jobs, allowing you to run tasks at specific intervals without needing to set up a separate cron job or server.

- **Bucket Storage**: We improved the filesystem module to support storing files in cloud storage services like AWS S3, Cloudflare R2, and others. This makes it easy to manage files in your Leaf apps without worrying about server storage limitations.

- **Schema File Improvements**: Schema files are a powerful feature, and we admitted that they needed some love. We made several improvements to schema files, including better support for relationships, indexes, seeding and more.

- **Leaf Sprout**: We released Leaf Sprout, a new terminal renderer that allows you to build interactive command-line applications with ease. We used Leaf Sprout to build the Leaf CLI btw, and it's now available as a standalone module that you can use in your own projects.

Along with these, we've made numerous small improvements and bug fixes across all modules to ensure they work seamlessly together.

## 💻 Developer Experience Improvements

Our biggest DX improvements came with Leaf 4, but we didn't stop there. We've continued to refine and enhance the developer experience based on your feedback. Here are some of the key improvements:

- **Better error handling**: We improved error handling across the board, making them more informative and actionable. This means you can spend less time debugging and more time building.

- **Automated Setup**: We took our "zero setup" philosophy further by automating the setup of various modules and features. Now, when you install a module, it auto-magically configures itself for you, reducing the time spent on manual setup.

- **Improved CLI**: The Leaf CLI and Aloe CLI have received several quality-of-life improvements, including new commands, automatically running variants of commands suited to your project type, and better integration with Leaf MVC.

Our goal is to make you not think about the framework and focus on building your application. We believe these improvements bring us closer to that goal.

## 🔥 What’s Next?

Even with all these exciting developments, we're not resting on our laurels. We've checked off most of the items on our 2025 roadmap, but there's still more to do. Here are some of the things we're working on next:

- **More deployment options**: We're working on adding support for more deployment platforms to the `leaf deploy` command, making it even easier to get your Leaf apps live.

- **More modules**: We're planning to release more modules to cover additional use cases and make building applications with Leaf even easier.

- **Performance improvements**: We're always looking for ways to improve the performance of Leaf, and we have several optimizations in the pipeline that will make your applications faster and more efficient.

- **Community contributions**: We want to encourage more community contributions to Leaf, whether it's through modules, documentation, or tutorials. If you're interested in contributing, please reach out!

## 🙌 You made this happen!

This year has been incredible for Leaf, and we couldn't have done it without you. Your feedback, contributions, and support have been invaluable in shaping the direction of the framework. Whether you've reported a bug, submitted a feature request, or simply shared your experience with Leaf, you've helped make it better for everyone.

Stay tuned for more updates, and let’s keep building together!

💬 Join the party: [GitHub](http://github.com/leafsphp) | [Discord](https://discord.gg/Pkrm9NJPE3) | [Twitter](https://twitter.com/leafphp)

🚀 Follow us for real-time updates: [YouTube](https://youtube.com/@leafphp) | [Website](https://leafphp.dev)
