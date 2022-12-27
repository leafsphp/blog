---
title: 2022 Roadmap
date: 2022-05-05
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<img src="https://user-images.githubusercontent.com/26604242/166827277-ced6c437-5b9b-47be-84b1-3516547da08a.jpg" style="border-radius: 8px; margin-bottom: 15px;" alt="" />

<p>Over the past couple of months, we've talked about our plans for Leaf, but never into details. In this post, we share high-level details of our roadmap, so the community can see our priorities and make plans based off the work we are doing.</p>

---

Our plans will evolve over time based on contributions and feedback from the community. If you have feedback about what you think we should be working on, we encourage you to get in touch (e.g. by filing an issue, opening a discussion, ...). We invite contributions both towards the themes presented below and in other areas.

## Areas of focus

### Developer experience

Transitioning to Leaf 3, developer experience has become our topmost priority. Leaf 3 takes the narrative of developer experience to another level by providing tools and a syntax that developers can relate to. This begins with functional mode and trickles down slowly into all our modules. We have plans to clean up existing functionality, introducing new functionality to simplify frequently-seen patterns, improving error messages, fixing bugs in the framework and engine, improving our documentation, creating more useful samples and trying out some experimental features like a custom server with hot reloading and more.

### Efficiency

We define Leaf's efficiency as the fastest and most performant way to implement some functionality, and one of our goals this year is to make Leaf more efficient for everyone. We've already implemented a bunch of systems for this with Leaf 3.

![leaf3-twitter-presentation-2](https://user-images.githubusercontent.com/26604242/166832847-3cf642ca-7e04-4c25-8625-628569a470ad.jpg)
![leaf3-twitter-presentation-1](https://user-images.githubusercontent.com/26604242/166832883-c2c429a5-990c-49d1-8637-3b1d3777ea29.jpg)

We've put big steps in place to build some amazing features which will help you build faster without having to worry about "best practices" and a whole lot of stuff which should be taken care of for you.

### Web and View Support

Leaf currently allows you to build web apps and APIs, but there's much more support for APIs, with most of our modules providing services which make more sense in APIs that in full websites. We plan to work on improving performance, module quality, accessibility, and consistency of Leaf view libraries and even add support for reactive code. This includes rebuilding Leaf UI which was put on hold for some time.

### PHP 8+ Support

Leaf 100% supports PHP 8+ and all it's features, however, it doesn't take advantage of any PHP 8+ features. We plan to provide PHP 8 tools shipped independently as a module, say `leafs/php-8-tools` or somthing along those lines.

### Security

In 2021 we resolved a number of issues around security, but our conclusion was that we definitely can, and should implement more structured default security. We rewote our security core [Leaf Anchor](https://leafphp.dev/modules/anchor/) to provide a ton of security. In 2022, we intend to add support for more forms of security.

## Community

In 2022, we will continue to work with the community on many different issues. The goal here is to get the community more involved in development and also the direction in which we progress as a framework.

We already communicate mostly on twitter [@leafphp](https://twitter.com/leafphp) and GitHub using discussions. In addition to this, we have a [Discord server](https://discord.gg/Pkrm9NJPE3) which is unfortunately not as active as we wish it to be. One of our goals is to get more communication going on there as well.

## Learning Forums

We're working on 2 main learning channels at the moment:

- [Codelabs](https://codelabs.leafphp.dev)
- [YouTube Channel](https://www.youtube.com/channel/UCllE-GsYy10RkxBUK0HIffw)

In 2022, we plan to release more screencasts on our YouTube channel, so be sure to subscribe and turn on your notifications so you don't miss our next videos. Besides just screen casts and series' on building stuff, we also plan on creating the video documentation series, which is kind of a follow along documentation in video form, going page by page through our docs. This was started in late 2021, and we plan to finish it up this year.

## Leaf 2.7

Leaf 3 which was released in April 2022 is the current, latest major version of Leaf. It contains new features that are not present in Leaf 2 (most notably functional mode and modules), and also contains a few breaking changes that makes it incompatible with Leaf 2. Despite the differences, the majority of Leaf APIs are shared between the two major versions, so almost all of your Leaf 2 knowledge will continue to work in Leaf 3.

In general, Leaf 3 provides smaller bundle sizes, better performance, better scalability, and better IDE support. If you are starting a new project today, Leaf 3 is the recommended choice. The only reason for you to consider Leaf 2 as of now is if you feel Leaf 3 is too modular, of course this is solved if you use Leaf 3 with Leaf MVC or Leaf API.

Since both Leaf 2 and 3 are wired to accept any PHP code, all external libraries usable in Leaf 2 will still work perfectly with Leaf 3. If you intend to migrate an existing Leaf 2 app to Leaf 3, consult the dedicated Leaf 3 Migration Guide.

We plan to release Leaf v2.7 before the end of the year. This minor release will backport a selected subset of new features from Leaf 3. After that, Leaf 2 will enter maintenance mode: it will no longer ship new features, but will continue to receive critical bug fixes and security updates.
