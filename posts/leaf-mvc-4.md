---
title: 'Announcing Leaf MVC 4: The plan!'
date: 2024-12-08
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<img src="https://github.com/user-attachments/assets/fd75740b-e879-45c2-a6c7-c083abacd0a5" style="border-radius: 8px; margin-bottom: 15px;" alt="" />

<p>
They say the best changes are the ones you don’t see coming, and that's exactly the case here. What started as Leaf MVC v3.8 turned into something much bigger—an idea for a major release we couldn’t ignore.

In our last article, we talked about how Leaf MVC had strayed from Leaf's simplicity and had rather started trending in the bloated direction. We promised to fix that, and we did. We pared down the framework to its essentials, making it more modular and flexible, but we couldn't resist the urge to optimize even more, and that's how the idea for Leaf MVC 4 was born.

Let's dive into the details of what Leaf MVC 4 will look like and how it will change the way you build web applications with Leaf.
</p>

---

## Why a Major Release?

As we worked on what was supposed to be v3.8, we realized that the improvements and refinements we were introducing carried more weight than we initially thought. These changes not only simplify Leaf but also redefine the developer experience in profound ways. A major version made sense. Here’s what led us here:

- <b>Breaking Changes</b>: While most updates are backwards-compatible, the cumulative effect of smaller adjustments—like reimagining the folder structure, improving modularity and the view engine support—created subtle breaks that warranted a fresh start.

- <b>Big Goals</b>: Our vision to make Leaf MVC the most intuitive, developer-friendly MVC framework meant reworking some foundations. This wasn’t about abandoning the past; it was about building something even better for the future.

- <b>Your Experience</b>: Simplicity has always been at the heart of Leaf. Moving to v4 lets us offer a cleaner, more modern experience for both new and seasoned developers.

## Will Leaf also move to v4?

Short answer, no (at least not yet). Leaf and Leaf MVC are two different projects which have just happened to share the same version number. Leaf v3 introduced modules, functional mode and a load of other features which are still being improved upon and are also used in Leaf MVC. The changes in Leaf MVC 4 are specific to the MVC framework and don't affect Leaf itself, so Leaf will remain at v3 for now.

## Let’s Talk About MVC 4

Okay, let's talk about the changes in Leaf MVC 4. We’ve made a lot of tiny improvements, but here are the highlights:

### 1. A More Minimal Folder Structure

We've made a lot of noise about this, but it's worth repeating. The folder structure in Leaf MVC 4 will be even more minimal than what we planned for v3.8. This is what Leaf MVC looks like in v3.7:

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

We simplified this structure to make it more modular and flexible for v3.8, which ended up looking like this:

```bash
├───app
│   ├── controllers
│   ├── database
│   │   ├── factories
│   │   ├── migrations
│   │   ├── schema
│   │   └── seeds
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

But over here at Leaf, we always ask for more and we got it. Our planned structure for v4 is even more minimal:

```bash
├───app
│   ├── controllers
│   ├── database
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

Yes, we are getting rid of some arguably necessary directories, but we will talk about how and why we are doing this in just a bit, but stripping down the structure to the bare essentials means we also have to strip down the framework features to the bare essentials. That brings us to the next point.

### 2. Modular, Opt-In Features

MVC v3.x has tried to be everything to everyone. We've followed the "batteries included" philosophy for quite a while, but realized that this approach is overwhelming for lots of developers, especially people new to frameworks or MVC. We are changing this in v4. Instead of overwhelming developers with features they may never use, we will ship the bare minimum and let developers opt-in to the features they need.

While this sounds like a big change, it's not as drastic as it sounds. A little secret we've kept is that Leaf MVC has always been modular because it was built to follow whatever direction Leaf goes. We are just making this more explicit in v4. Just as with Leaf, every feature you need in Leaf MVC will be one `leaf install` away, so it's not like we are removing features, we are just not including them by default.

While we understand that some developers may prefer the "batteries included" approach, we believe that the opt-in approach is more in line with the philosophy of Leaf. We want to give developers the freedom to choose what they want to use and what they don’t want to use. This will not break existing applications, and new applications can follow the same documentation to set up and build their applications.

### 3. Console updates

We updated the way the Aloe console works too! Aloe has always had the extra step of registering your commands in the `leaf` file or in the `app/console/Commands.php` file. This extra step will be removed, and Leaf MVC will automatically load all commands in the `app/console/` directory. This will make using the console even easier and more intuitive.

Registering commands from external libraries will also easier now. You just need to head over to the `leaf` file in your project root and add the installation line for the library you want to use in the `loadConsole` method. This will automatically load the commands from the library and make them available in your console.

```php
Leaf\Core::loadConsole([
    \Leaf\Library\Commands::install(),
]);
```

In addition to the way commands are loaded, existing commands will also check for the existence of whatever directory they need to run. This means that if you have a command that needs to create a directory, it will check if the directory exists and create it if it doesn’t. This was introduced because v4 allows you to completely remove most of the default directories, and we don’t want commands to fail because a directory doesn’t exist. This also means you can directly run commands instead of creating the folders first.

### 4. New console commands

We've added a few commands that address the missing directories in the new structure. We added a `config:publish` command that allows you to publish the default configuration files to your project. This command will create a `config` directory in your project root and copy the default configuration files to it. This way, you can easily modify the configuration files without having to worry about them being overwritten when you update Leaf MVC. You can also pass in the name of the configuration file you want to publish, and only that file will be published.

```bash
php leaf config:publish

# or to publish a specific file
php leaf config:publish app
```

If you are not sure of the name of the configuration file you want to publish, you can run the `config:list` command to see a list of all the configuration files available for publishing.

```bash
php leaf config:list
```

Or you can refer to the documentation for whatever feature you are trying to configure to see the name of the configuration file you need to publish.

### 5. External libraries

Leaf MVC has always had a `lib` folder which allows you to copy pieces of other libraries into your project or modify vendor packages in your project and still have them autoloaded. The lib folder no longer ships with Leaf MVC, but you can easily create it using the `config:lib` command. This command will create a `lib` directory in your project root and add set up the autoloading for you.

```bash
php leaf config:lib
```

### 6. Improved view layer

We've also made some improvements to the view layer. The view layer shipped in v3 was developed in the v1 days of Leaf and has been due for an update for a while. We've updated the view layer to support all the goodies that come with Leaf v3. It also comes with some caching and performance improvements that make it faster and more efficient.

With the new configuration, it's also easier to hook in your own view engine if you don't want to use the default view engine. You can easily set up your own view engine by publishing the view configuration file and setting the `engine` key to the class name of your view engine. This is an example of how you can set up the Smarty view engine:

```php
return [
    // define your engine
    'engine' => Smarty::class,

    // teach Leaf how to set up your engine
    'config' => function ($engine, $paths) {
        $engine->setTemplateDir($paths['views']);
        $engine->setCacheDir($paths['cache']);
    },

    // teach leaf how to render your engine
    'render' => function ($engine, $view, $data) {
        foreach($data as $key => $value) {
            $engine->assign($key, $value);
        }

        return $engine->display($view);
    }
];
```

Now whenever you render a view, Leaf will use the Smarty view engine instead of the default view engine.

```php
echo view('index', ['name' => 'Leaf']);
```

This will render the `index.tpl` file in the `views` directory with the data passed to it.

One more touch is that any view engine you set up will be automatically loaded by Leaf, and the active instance will always be available on `app()->template()` in case you need to do anything with it.

### 7. Smarter configuration

Config files in Leaf MVC have always been a bit of a mess, but in v4, config files will no longer be required. In fact, v4 will ship with no config files at all. Instead, you can configure most of the features of Leaf MVC using environment variables, but in the rare case that you need to configure something that can't be done with environment variables, you can publish the default configuration files and modify them to suit your needs.

This change was made to make it easier to deploy Leaf MVC applications. You will be able to deploy your application without having to worry about configuration files being overwritten or having to set up configuration files on your server. You can simply set up the environment variables on your server and your application will work as expected.

### 8. DB Schema files

You may have noticed that the database folder was empty in the proposed folder structure. This is another change we made in v4. Going back to how we are moving away from the Ruby on Rails/Laravel way of doing things, we are exploring a better way to set up your databases without having multiple files for each table which can quickly get out of hand. We promised this will be our christmas gift to our community, so we are going to keep it sealed until the first RC of Leaf MVC v4.

## Will This Break My App?

We know the thought of a major release can feel daunting, but we’ve taken great care to ensure that existing Leaf MVC applications can migrate smoothly. The changes focus on reducing complexity, not creating unnecessary hurdles.

If you’re upgrading from v3, the major changes will involve updating your config files and your console file. We’ve made these changes as straightforward as possible, and v4 is for the most part backwards-compatible with v3.8. We will provide detailed upgrade instructions in the documentation to help you through the process.

## When Can I Get My Hands on Leaf MVC 4?

We’re working hard to get Leaf MVC 4 ready for you as soon as possible. We’re aiming for a release candidate by the end of the year, with a stable release in early 2025, or we might just surprise you with an early release. Keep an eye on [this GitHub issue](https://github.com/leafsphp/leafMVC/pull/36) which we will continue updating as we make progress. We will also be discussing the changes in more detail on our weekly hangouts, so make sure to join us there.

## What of v3.8?

We will publish v3.8 within the next couple of days. It will mainly feature the flexible configuration and will allow you to delete any directories that you no longer need without breaking anything, but it will not go any further than that. All of the other new features will only be available from v4.

## What’s Next?

This is just the beginning. Over the coming months, we’re adding even more interactive features to the console generators, optional prompts for advanced configurations, presets for common project types and a lot more. Our goal for Leaf MVC? To make it the most approachable and powerful minimal MVC framework by mid-2025.

## Let’s Hear From You!

This unexpected turn toward v4 couldn’t have happened without your feedback, trust and support. Together, we’re redefining what it means to build web applications, and as usual, your feedback drives us, so don’t hesitate to share your thoughts or suggestions 💚

👉 Ready to try it out? Get started with this command:

```bash
composer create-project leafs/mvc:v4.x-dev my-app
```
