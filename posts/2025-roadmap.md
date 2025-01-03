---
title: Looking to a more reliable Leaf - Roadmap for 2025
date: 2025-01-03
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<img src="https://github.com/user-attachments/assets/521a91ad-29b8-4c85-967e-0d55b38d65df" style="border-radius: 8px; margin-bottom: 15px;" alt="" />

<p>
The first half of 2024 was pretty tough—we were juggling our day jobs with Leaf while dealing with a growing number of issues. We had to step back, re-evaluate our priorities, and by the end of the year, we pushed out a ton of updates to make Leaf more stable and reliable.

Now that we’ve checked off most of our 2024 goals, we’re excited to share our 2025 roadmap! Our focus is on making Leaf more reliable, secure, and developer-friendly, with plenty of performance improvements along the way.
</p>

---

## Building on from 2024

Last year, we proposed a few RFCs which everyone seemed to love, including merging Leaf API into Leaf MVC (implemented), merging Leaf's router into the core library (implemented), and switching our minimum PHP version to 8.0 which is yet to be implemented. On top of these, we built a lot of new features and improvements for Leaf and Leaf MVC, and to top it off, we started working on v4 of Leaf MVC.

Leaf MVC v4 is NOT a rewrite, it’s a major upgrade to Leaf MVC v3. We’re adding a lot of new features, improving existing ones, and making the framework more developer-friendly. We realized that we needed to make Leaf MVC more modular, so we’re breaking down the framework into smaller, more manageable packages but also automating everything you need to build your next project in days, not weeks.

![Leaf MVC v4](https://github.com/user-attachments/assets/fd75740b-e879-45c2-a6c7-c083abacd0a5)

Our plan is to release alpha and beta versions by the end of January 2025, with a stable release hopefully by the end of February. We are also taking feedback on the documentation of Leaf MVC, so if you have any suggestions, please [let us know](https://discord.gg/Pkrm9NJPE3).

The final time-line for Leaf MVC v4 should be something like this:

- Alpha: January 15, 2025
- Beta: January 24, 2025
- RC: January 31, 2025
- Stable: February 10, 2025

While this may seem rushed, we have a few reasons why we believe we can safely rush through this release:

- A lot of the new features in Leaf MVC v4 are being backported from v3, so they’re already stable or have been tested in production.
- Leaf MVC v4 is not a complete rewrite, so almost all the features in v3 are being carried over to v4.
- Lastly, we are testing Leaf MVC v4 in production on a few of our projects, and with the feedback we’ve gotten so far, we believe we can safely release a stable version by February.

v3.9 and v3.10 will be released in the coming days, with a few bug fixes and improvements carried over from v4. So you'll be able to see our new serve command, some more modularity, view engine improvements, and a few other features in v3.9 and v3.10.

## Shipping fast

Leaf is known for its ease of use, but building full-fledged applications isn’t as fast as it could be. In 2025, we want to make Leaf the fastest way to build applications, and we're working on a few new features to make this happen like:

- Integrations for services like Mailgun, Twilio, and Stripe
- Providing easier ways to interact with external systems like databases, APIs, and more
- A new, faster and more refined database layer that works seamlessly with both Leaf and Leaf MVC
- Better integration with front-end frameworks like React, Vue, and Angular
- A new, faster view layer for Leaf MVC and tons of new features for Leaf Blade and BareUI
- Application scaffolding for not just Leaf stuff, but also UI bits of feature like authentication, user management, and more

Besides all of these, we will be releasing powerful starter-kits that not only help you get started with Leaf, but also help you build full-fledged applications super fast.

The timeline for these changes is not yet set, but we're hoping to have most of them out by the end of the third quarter of 2025. This will involve lots of new modules, and we're hoping to get the community involved in building these packages, so if you're interested in contributing, please let us know.

## Security and reliability

We've had a few security issues in the past, and we're working on making Leaf more secure. We're adding a few new security features to Leaf and Leaf MVC, and we're also making our security module more robust, adding new features like rate limiting, content security policy, and more. These will greatly improve your applications' security and reliability right out of the box without you having to do anything. We are also working to fix existing problems with how CSRF protection interferes with other aspects of your application like sessions and cookies.

We have an optimistic timeline for somewhere early March to have most of these features out, but we're not rushing this release considering the importance of security in applications, so we're taking our time to make sure everything is perfect. Also, a lot of our security features are being backported from v4, so you'll be able to see some of these features in Leaf and Leaf MVC v3.9 and v3.10.

## Improving the documentation

We released our new documentation in late 2024, and we've been getting a lot of feedback on it. While its been great so far, we're working on making it even better. We're adding more interactive examples, beginner-friendly tutorials, and will be continuing our video documentation series. We will also resume our codelabs which contains specific tutorials on how to do specific things with Leaf eg: deploying a Leaf app to DigitalOcean, processing payments with Stripe, etc.

We are also working on making our documentation more AI-friendly, so you can get the information you need faster and easier, and also teach AI clients like Claude how to use Leaf. This will make it easier to use Leaf in your projects, and also make it easier for beginners and low-code developers to get started with Leaf.

This is a continuous process which will be ongoing throughout the year, so you'll be seeing a lot of changes to our documentation in the coming months.

## Performance improvements

While Leaf is incredibly fast, already outperforming most frameworks, we've left a lot of performance on the table. We can make Leaf even faster, and we're working on a lot of improvements, especially to our router and http layer. We have some kind of caching currently present in different portions of Leaf, but we're working on a more robust caching system that will make your applications even faster. This caching layer will cover everything from views to database queries, and even the router itself.

This will be implemented incrementally, but we hope to have a prototype out by the end of the first quarter of 2025, and a stable version by the end of the second quarter.

## Better Swoole integration

We added Swoole support to Leaf earlier through the Eien package, but we're working on making this integration even better. We're adding more features to Eien, and we're also working on making Leaf work seamlessly with Swoole. This will allow your Leaf apps work exactly the same way you're already used to, but with the added benefits of Swoole.

Our timeline for this update is late third quarter of 2025, or early fourth quarter. As much as we would love to have this out earlier, we're taking our time to make sure everything is perfect.

## Deploy automation

We released the `leaf deploy` command in 2023 which made deployments to Heroku super easy, but we're working on making this even better and adding support for more platforms. One of Leaf's goals has always been to make deployments as easy as dropping a file into a folder, but a lot of providers now require you to set up a lot of things before you can deploy your app. We're working on making this process easier, and we're also working on making it easier to deploy your app to your own servers.

Here's what we're working on:

- Adding more Docker images for apache, nginx, and more
- Updating our fly.io images to be easier to use
- Providing automated scripts to set up different Linux servers for Leaf
- Automating the process of setting up databases, queues, and more
- Providing a way to deploy your app to your own servers with a single command
- Providing more documentation on how to deploy your app to different platforms

While some of these exist, we're working on making them better and more robust, and we're hoping to have most of these out by the end of the of 2025. Of course, even today Leaf will happily run on any server that supports PHP 7.4+, but going from a fresh server to a running Leaf app is what we're working on making easier.

## General module improvements

Besides all of these, there are smaller improvements we're working on like:

- Timezone support for Leaf date
- Support for external buckets in Leaf FS
- A new, more powerful Leaf Cache
- Add new handy functions to Leaf's tilly helper
- New MVC CLI commands
- Update Leaf CLI scaffolding

These will be worked on in bit, spread throughout the year, and we're hoping to have most of these out by the end of the year.

## Community & Funding

Finally, we're still trying to build a more community-driven project, and we're working on making it easier for you to contribute to Leaf, share your thoughts, and help us build a better framework. We are building Leaf to be a framework for everyone, and we want to make sure everyone has a say in how it's built, so don't hesitate to share your thoughts, ideas, and feedback with us. Currently, you can always open a discussion on our [Discord server](https://discord.gg/Pkrm9NJPE3), or open an issue on our [GitHub repository](https://github.com/leafsphp/leaf).

Beyond that, we hope to host another event in 2025, which is another reason we are going big on funding this year. We are looking to raise funds to host a bigger event, and also to fund the development of Leaf. Your donations will help us build a better framework, and keep development going on as long as possible. You can visit the [sponsor page](https://leafphp.dev/support.html) to donate to Leaf. We will share more details on the event in the coming months, so stay tuned.

## Wrapping up

Overall, we're excited about 2025, and we're looking forward to building a more reliable, secure, and developer-friendly Leaf. We're working on a lot of new features, improvements, and performance enhancements, which we know you'll love, so stay tuned for more updates in the coming months and let us know what you think 💚
