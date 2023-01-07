---
title: Getting Started with Leaf
date: 2023-01-07
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<img src="https://user-images.githubusercontent.com/26604242/211151462-3dca0069-e736-4cfd-b45b-c907741b953f.jpg" style="border-radius: 8px; margin-bottom: 15px;" alt="" />

<p>We released Leaf 3 early last year. Since then, we've added a ton of functionality and made Leaf 3 even easier to use. In this article, we'll look at how to get started with Leaf, some useful features and a quick-start to building your first Leaf app.</p>

---

## What is Leaf?

Leaf is a popular open-source PHP framework widely used for web app/API development created by Michael Darko in October 2019. Since its creation, Leaf has gained widespread popularity among developers and has a robust community of users, as well as a growing array of tools and packages.

Leaf is a slim and lightweight PHP framework for quickly bootstrapping clean, simple, but powerful web apps and APIs quickly and easily. At it's core, Leaf is minimalist, meaning it only comes with a set of core features out of the box, everything else can be added from Leaf's many existing modules. This makes Leaf very flexible and allows you to add only the features you need to your app.

Besides simplicity, Leaf is also very fast. Leaf is able to handle a lot of requests per second, making it ideal for building high-performance web apps and APIs. In addition, it is also very secure, and very beginner friendly.

## Why Leaf?

There are several factors that contribute to Leaf's popularity as a choice for web development:

- Leaf is simple and minimalistic. You only have code which you need in your app, and nothing more. There's no bloat, no unnecessary features, and no unnecessary code.

- Leaf is blazing fast out of the box, but that's not all. Leaf can be made even faster by using Leaf's Eien server which increases Leaf's performance more than 80x.

- Leaf has a large and active set of modules, including authentication, database interactions, views, http operations, mvc tools, and more. This means you don't have to reinvent the wheel or spend a lot of time setting up basic functionality.

- Leaf has excellent documentation, great videos and tutorials to walk you through everything you need to know to get started with Leaf. It also has a very active community of users and developers who are always willing to help.

- Leaf is very beginner friendly. It's easy to learn and use, simple to set up, and has a very low learning curve. This makes it ideal for beginners and experienced developers alike.

## Setting Leaf up

***Leaf requires a minimum of PHP 7.4 and Composer installed globally on your PC.***

Setting up Leaf is very easy. You can either use the [Leaf CLI](https://cli.leafphp.dev), Composer or download the latest version of Leaf from the GitHub (note that you will still need composer to install dependencies). 

You can install Leaf using the Leaf CLI:

```sh
leaf create my-app --basic --v3 --no-tests
```

Or with composer:

```sh
composer install leafs/leaf
```

You can then run your app using the Leaf CLI:

```sh
leaf serve
```

Or use the built-in PHP server:

```sh
php -S localhost:8000
```

## A basic Leaf app

Let's take a look at a basic Leaf app from the top down.

```php
<?php

require __DIR__ . '/vendor/autoload.php';

app()->get('/', function () {
  echo 'Hello world';
});

app()->run();
```

This is a very basic Leaf app. It has a single route that returns "Hello world" when you visit the root of the app. The first thing you'll notice is the `app()` function. This is a global function that returns an instance of the Leaf\App class. This is the main class that handles all the routing and request handling in Leaf.

After registering the route, we call the `run()` method on the app instance. This starts the Leaf app and listens for incoming requests.

## Http Request Data

Leaf provides objects to handle data coming into your app, as well as data going out of your app. These are the Request and Response objects, and they are available globally or on the Leaf instance. Data coming into your application can be accessed like this:

```php
<?php

require __DIR__ . '/vendor/autoload.php';

app()->get('/', function () {
  echo json_encode(request()->body());
});

app()->run();
```

The `request()` function returns an instance of the Leaf\Request class. This class provides methods to access data coming into your app, such as the request body, headers, query parameters, etc. In this case, we're simply returning the request body as JSON.

If we want to get specific data coming into our app, we can use the `get()` method on the request object:

```php
request()->get('name');
```

There are also methods like `rawData`, `postData`, `urlData`, `files` and more to access specific types of data coming into your app.

## Http Response Data

Just as mentioned above, Leaf provides a Response object to handle data going out of your app. This object is available globally or on the Leaf instance. You can output data like this:

```php
<?php

require __DIR__ . '/vendor/autoload.php';

app()->get('/', function () {
  response()->json(request()->body());
});

app()->run();
```

We used `echo` in the examples above, however, the response object provides an already configured and much more powerful way to output data. In this case, we're using the `json()` method to output the request body as JSON, however, there are also methods like `download()`, `redirect()`, `xml()` and more to output different types of data.

## Modules

Leaf has a large and active set of modules, including authentication, database interactions, views, http operations, mvc tools, and more. Modules were introduced as a way to keep both Leaf and your applications slim and lightweight. Modules also serve as a way to remove bloat from your apps and keep performance high.

Leaf modules can be installed using the Leaf CLI:

```sh
leaf install module-name
```

Or with composer:

```sh
composer require leafs/module-name
```

Before jumping into building any functionality, you should first check if a module exists for that (and it probably does 🤭). There's no need to reinvent the wheel for something that's already been done.

You can find a list of all Leaf modules on the [Leaf website](https://leafphp.dev/modules/#list-of-available-modules).

## Conclusion

Leaf is a popular and powerful PHP framework for web application development, known for its simplicity, elegance, and performance. It includes a range of tools and conventions for building and organizing web applications, such as routing, mvc tools, and a database query builder. Its extensive set of powerful tools further enhance its functionality.

## Resources

- [Leaf Docs](https://leafphp.dev)
- [Leaf Tutorial](https://leafphp.dev/tutorial/)
- [Leaf CLI](https://cli.leafphp.dev)
- [Leaf on GitHub](https://github.com/leafsphp/leaf)
- [Leaf on YouTube](https://youtube.com/@leafphp)
- [Leaf on Twitter](https://twitter.com/leafphp)
- [Leaf on Discord](https://discord.com/invite/Pkrm9NJPE3)

