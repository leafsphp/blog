---
title: Complicating MVC? Our Thoughts.
date: 2024-11-30
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---


<img src="https://github.com/user-attachments/assets/4bda470f-e143-4edd-bb9b-6a43447c64ca" style="border-radius: 8px; margin-bottom: 15px;" alt="" />

<p>
Let's talk about MVC. Leaf has first-class support for the MVC pattern, but we've been thinking about how we can make it better. Is MVC a good pattern for building web applications? Is it too complicated? We'd love to hear your thoughts on this.
</p>

---

## The MVC pattern

The Model-View-Controller (MVC) pattern is a software design pattern that separates an application into three main components: the model, the view, and the controller. The model represents the data, the view represents the user interface, and the controller acts as an intermediary between the model and the view. In Leaf MVC, the model is a class that you can use to directly interact with your database, the view is a template file that you can use to render your HTML, and the controller is a class that you can use to handle requests and responses. Leaf MVC takes this pattern a step further by providing a folder structure that uses classes to organize your code since every class will be in charge of a specific functionality in your application.

## The problem with MVC

The problem isn’t with the MVC pattern itself—it’s widely regarded as one of the best architectural patterns for building web applications. Its separation of concerns between Models, Views, and Controllers provides clarity, maintainability, and scalability. The challenge lies in how we’ve implemented it. While Leaf MVC is designed to let you achieve more with less effort, the initial setup can feel daunting for beginners.

For years, Leaf MVC has drawn inspiration from the best practices of frameworks like Ruby on Rails and Laravel—both of which are outstanding in their own right. Even the Leaf MVC folder structure reflects this, blending what we believe are the strongest aspects of these frameworks to create something both familiar and effective.

However, along with the many advantages we’ve inherited, we’ve also carried over some of the challenges—particularly the sheer amount of boilerplate code that often accompanies these frameworks. This boilerplate, while functional, can create unnecessary complexity, especially for beginners who are just starting to explore the MVC pattern.

This is one of the reasons we’re actively rethinking how to make MVC in Leaf simpler and more approachable. While some argue that complaints about folder structures and complexity stem from a "skill issue", we think it's a framework "design issue". Here's why...

## Design issue vs skill issue

That's exactly the problem! Every beginner has a skill issue, and if our framework is not designed to help them overcome that skill issue, then it's a design issue. A well-designed system should work for developers at all levels—reducing friction, clarifying intent, and eliminating unnecessary barriers to entry. While we've been talking about beginners, this is not just about them. Even experienced developers coming from other frameworks like Next.js or Gin should be able to get up and running without going down a rabbit hole of boilerplate code that they don't need.

Getting rid of unnecessary complexity doesn't mean we're dumbing down the framework. It means we're making it more accessible, more intuitive, and more enjoyable to use. Other frameworks like Laravel have done an amazing job managing the boilerplate problem by automating complex tasks with Artisan commands and lots of external tools, but we think removing the complexity in the first place is a better approach.

## Uncomplicating Leaf MVC?

The first step in Leaf's journey to uncomplicate MVC is to rethink the folder structure. We're exploring ways to make it more intuitive, more flexible, and more in line with the way you think about your application but at the same time, we do not wish to change the structure so much that it becomes unrecognizable. It's a delicate balance, but we're confident we can strike it. How do we keep the same folder structure while making it more intuitive? The idea we're exploring right now is to make the folder structure more modular, allowing you to add or remove components as needed. This matches Leaf's philosophy of "use what you need, leave what you don't", except this time, it's about the folder structure. Let's take a look at what this might look like:

```bash
├───app
│   ├── console
│   ├── controllers
│   ├── database
│   │   ├── factories
│   │   ├── migrations
│   │   ├── schema
│   │   └── seeds
│   ├── helpers
│   ├── models
│   ├── routes
│   └── views
│       └── errors
├───config
├───public
│   └───assets
│       ├── css
│       └── img
├───storage
│   ├───app
│   │   └───public
│   ├───framework
│   │   └───views
│   └───logs
└───vendor
```

Leaf MVC currently includes a lot of folders, like helpers, factories, commands, and seeds—but many projects don’t use all of them. So why have folders you don’t need?

What if Leaf MVC only came with the essential folders, letting you add more as your project grows? As you need more functionality, you could add folders yourself—or use a simple command to generate them when needed. We are exploring this idea as our next release:

```bash
├───app
│   ├── controllers
│   ├── database
│   │   └── migrations
│   ├── models
│   ├── routes
│   └── views
│       └── errors
├───public
│   └───assets
│       ├── css
│       └── img
└───vendor
```

This new structure is more focused, more flexible, and more in line with the way you think about your application. It's a small change, but we believe it will make a big difference in how you work with Leaf MVC. We're excited to see how this change will impact your experience with Leaf, and we'd love to hear your thoughts on this new approach. It will not break your current applications, but it would make it easier for new developers to get started with Leaf.

## Opt-in vs opt-out

The second step in our journey to uncomplicate MVC is to make everything opt-in. Once again, Leaf 3 was built around the idea of having only what you need, leaving all the bloat behind, but Leaf MVC doesn't quite follow this philosophy and we think it's time to change that. We want to make everything in Leaf MVC opt-in, meaning you only get what you ask for.

While everyone criticizes the JavaScript ecosystem for its "everything is a plugin" approach, it gives you the power to decide what you need and what you don't. This means you can start with a clean slate and add only the features you need as you go along. This greatly reduces the complexity of the framework and allows you to learn at your own pace instead of being bombarded with files, folders and features you don't understand.

## Putting a bow on it

We're excited about the future of MVC in Leaf. Over the next couple of months, we are going to keep simplifying Leaf and Leaf MVC to make it more approachable, more intuitive, and more enjoyable to use. We're going to keep listening to your feedback, keep iterating on our ideas, and keep pushing the boundaries of what's possible with Leaf. We're excited to see where this journey takes us, and we're grateful to have you along for the ride 💚

PS: everything here is backwards compatible, no need to worry about breaking your applications 🤭
