---
title: Leaf 3 as the new default
date: 2022-04-18
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

The official build of Leaf 3 was released yesterday: 15th March, and since then, all our packages are updating to use Leaf 3 as the new default.

Make sure to read the breaking changes section to see if you need to make certain changes before the switch to Leaf 3.

---

## Intro

Leaf 3 has gone through a lot of planning, building and rebuilding over the last couple of months. Finally, a stable version has been released for use in all of your apps. As a new major version, there are of course some big changes, some of which are not compatible with v1 and v2.

<iframe width="100%" height="350" src="https://www.youtube.com/embed/KfClnH-fQz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video introduces Leaf 3 together with it's major features and breaking changes. You should definitely watch that video for an overview of Leaf 3.

## The goal with leaf 3

Since the idea for Leaf 3 popped up, the goal has been to create the best possible developer experience while maintaining the perfect balance between simplicity and performance as well. To do this, we had to take the chance with 2 major concepts.

- Functional Mode
- Modules

On top of functional mode and modules, we rewrote sections of Leaf's functionality for a couple of reasons:

- To fix existing and possible bugs in the future
- To support functional mode and modules
- To increase Leaf's performance
- To implement best practices
- To refactor all of leaf

Besides all of this, we also took time to invest in the default security tools leaf gives you out of the box. We built on top of Leaf Anchor to offer top-notch security in Leaf and it's modules.

Finally, we took care of rebuilding everything in Leaf 2 which was not supported in PHP 8 and 8.1. At the end of it all, we ended up with Leaf 3 being one of the most lightweight and fastest PHP frameworks available today. It performs much better and is much lighter than even micro-frameworks like Slim PHP.

This release spells a new version in all of our major packages like Leaf MVC, Leaf API and Skeleton. All of these frameworks have officially switched over to version 3 of Leaf as well. To add to all of the changes made in Leaf for the version 3 release, we revamped the Leaf CLI to allow you easily create and manage your Leaf applications directly from one tool.

Leaf CLI also now includes functionality to install, update and remove packages from your applications seamlessly. Together with a ton of bug fixes and improvement, and inspiration from seasoned CLIs like yarn and npm CLI, we've turned Leaf CLI into the best console tool for app management.

Putting all of these together, we've crafted the most seamless developer experience possible from a PHP framework.

## Why switch to Leaf 3?

You might be wondering the need to jump to Leaf 3 since Leaf 2 is working perfectly. There are actually a bunch of reasons for this:

- Modules
- Functional Mode
- PHP 8+ support
- Http library updates
- Leaf router updates
- Performance upgrades
- Security Upgrades
- Major upgrades in functionality

## Migrating from leaf 2

If you are still currently using Leaf 2 but want to switch to Leaf 3, everything you'll need to do is covered in [this document](https://leafphp.dev/docs/migration/introduction.html#migrating-from-leaf-2), however you'll need to watch out for these things:

### Modules

Since Leaf's features are now shipped as installable modules, you might have some undefined classes. If you run into such an issue, just install the module associated with the missing class and you will be good to go. For example, if `Leaf\Auth` is undefined, simply install the `auth` module and your app will run smoothly.

You don't need to worry about the module names as Leaf will smartly tell you which modules to install.

### CORS

We moved all CORS functionality into a CORS module based on the nodejs cors package. This gives you more control over the way CORS is applied in your application. Because of this change, `$app->evadeCors()` has been removed and replaced with `$app->cors()`.

The cors method is automatically linked to the cors module by Leaf and so no extra configuration is needed to make it work. Cors takes in some optional configuration, checkout the [cors module docs](https://leafphp.dev/modules/cors/). Also cors is no longer available on the response object.

### Router

`Leaf\Router::getRequestMethod` has been been moved to `Leaf\Http\Request::getMethod`. This is used in Leaf's core and should not be an issue, but if you do have references to this function, changing it to `Leaf\Http\Request::getMethod` will fix any errors.

That's pretty much all you need to worry about. Although we did a lot of adjustments and rewrites, we made Leaf 3 as backwards compatible with Leaf 2.5+ as possible. So if you're from Leaf 2.6, you pretty much don't have to change a thing to get your original app working (except these three)

## Migrating from other frameworks

Yes, unlike with other versions of Leaf, it is now possible to migrate your app piece by piece to Leaf 3 from another framework. Because of the introduction of modules, you can have parts of your app running leaf and other parts in a different library/frameowrk and Leaf will still work perfectly fine. You no longer need to rewrite all of your app at once. With Leaf 3, just do it at your own pace.

Check out the [official migration guide](https://leafphp.dev/docs/migration/other.html) for all the info you need on migrating from another framework or from raw PHP.

## PHP Support

| Engine             |  PHP 7.3  |  PHP 7.4  |  PHP 8.0  |  PHP 8.1  |
| ------------------ | :-------: | :-------: | :-------: | :-------: |
| Leaf 2             |    🔥     |     ⚡️     |    ❌     |     ❌    |
| Leaf 3             |    ⚡️     |     ⚡️     |    ⚡️     |     ⚡️    |

Leaf 3 has better support and performs much better with both newer and older versions of PHP when compared to Leaf 2. Leaf 2 completely breaks on PHP 8, so if you need your Leaf app to support PHP 8, then you will need to switch to Leaf 3.

## The next chapter

Leaf 3 has improved performance, security and developer experience by leaps and bounds, but we believe that so much more can be done to not only increase developer experience, but also developer productivity. So may frameworks focus on only what the developer can implement using them, but we want to be that one framework which cares about how the developer approaches those features and simplifying or automating those processes. Over the next couple of months, we'll be walking through:

- Migration tools for Leaf MVC and Leaf API
- Leaf 2.7 (Leaf 3 migration build)
- Taking advantage of PHP 8 tools (through modules of course)
- Create templates and starters
- Building on top of existing modules
- Automating some best practices
- Aloe Scaffolds for Vue and React

We can’t wait to see what new ideas and tools you all have as we embark on a new chapter in the Leaf roadmap.
