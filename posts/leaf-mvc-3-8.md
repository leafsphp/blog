---
title: Leaf MVC 3.8 released! 🎉
date: 2024-12-10
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<img src="https://github.com/user-attachments/assets/a97afcca-3fde-4fa7-b672-665fbb043fcd" style="border-radius: 8px; margin-bottom: 15px;" alt="" />

<p>
We’re thrilled to announce the latest release of Leaf MVC, marking a significant milestone in our journey to make web development simpler, more intuitive, and more enjoyable for developers at all levels. This release focuses on accessibility, flexibility, and cutting down unnecessary complexity, staying true to Leaf’s philosophy: "Use what you need, leave what you don’t."
</p>

---

Here’s a breakdown of the key updates in this release:

## A More Minimal Folder Structure

As we covered in our previous blog post, the default folder structure has been a common point of pain and confusion for lots of developers, both new and experienced. We’ve listened to your feedback and made some changes to simplify the structure and make it more intuitive. Prior to this release, the folder structure looked like this:

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

But this has been simplified and stripped down to the essentials. Here’s what the new structure looks like:

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

This new structure is more modular, allowing you to add or remove components as needed. This directory structure also highlights the sensible defaults provided by Leaf which is why the `config` and `storage` directories have been removed from the default structure. If you need these directories or any other ones which are not included in the default structure, you can easily add them to your project, and Leaf will automatically detect and use them.

## Opt-In Features

Previous versions of Leaf MVC tried to be everything to everyone. We followed the "batteries included" philosophy, but we’ve come to realize that this approach can be overwhelming for developers. Why overwhelm developers with features they may never use? Now, everything in Leaf MVC is opt-in.

You start your application with the bare minimum and add features as you need them directly via the command line or by setting them up manually if you prefer to do so. Not only will you have a modular directory structure, but you’ll also have a modular application that only includes the features you need. This will remove unnecessary files which come with some features you may not need, making your application lighter and more efficient.

While we understand that some developers may prefer the "batteries included" approach, we believe that the opt-in approach is more in line with the philosophy of Leaf MVC. We want to give developers the freedom to choose what they want to use and what they don’t want to use. This will not break existing applications, and new applications can follow the same documentation to set up and build their applications.

## Console updates

We updated the way the Aloe console works too! Aloe has always had the extra step of registering your commands in the `leaf` file or in the `app/console/Commands.php` file. This extra step has been removed, and now Leaf MVC will automatically load all commands in the `app/console/` directory. This makes using the console even easier and more intuitive.

Registering commands from an external library is also easier now. You just need to head over to the `leaf` file in your project root and add the installation line for the library you want to use in the `loadConsole` method. This will automatically load the commands from the library and make them available in your console.

```php
Leaf\Core::loadConsole([
    \Leaf\Library\Commands::install(),
]);
```

In addition to the way commands are loaded, existing commands also now check for the existence of whatever directory they need to run. This means that if you have a command that needs to create a directory, it will check if the directory exists and create it if it doesn’t. This was introduced because version 3.8 allows you to completely remove most of the default directories, and we don’t want commands to fail because a directory doesn’t exist. This also means you can directly run commands instead of creating the folders first.

## New console commands

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

## External libraries

Leaf MVC has always had a `lib` folder which allows you to copy pieces of other libraries into your project or modify vendor packages in your project and still have them autoloaded. The lib folder no longer ships with Leaf MVC, but you can easily create it using the `config:lib` command. This command will create a `lib` directory in your project root and add set up the autoloading for you.

```bash
php leaf config:lib
```

## Upgrading from v3.7

v3.8 is fully backwards compatible with v3.7, so you can upgrade your application without any issues. The only thing you need to do is to update your `leaf` file to the new structure. You need to replace all of the console initialization with the new `loadConsole` method. You can also remove any application commands you have registered in the `leaf` file since they will be automatically loaded from the `app/console/` directory.

```php
/*
|--------------------------------------------------------------------------
| Load Leaf configuration
|--------------------------------------------------------------------------
|
| Leaf MVC allows you to customize Leaf and it's modules using
| configuration files defined in the config folder. This line
| loads the configuration files and makes them available to
| your application.
|
*/
Leaf\Core::loadApplicationConfig();
Leaf\Database::connect();

/*
|--------------------------------------------------------------------------
| Initialise Leaf CMD
|--------------------------------------------------------------------------
|
| Initialise aloe CLI
|
*/
$console = new \Aloe\Console('Leaf MVC', 'v3.5.0');

/*
|--------------------------------------------------------------------------
| Add commands
|--------------------------------------------------------------------------
|
| Add custom commands
|
*/
\App\Console\Commands::register($console);

/*
|--------------------------------------------------------------------------
| Run The console Application
|--------------------------------------------------------------------------
|
| Transport water and dissolved substances to the rest of Leaf😂
|
*/
$console->run();
```

All of this should be replaced with:

```php
/*
|--------------------------------------------------------------------------
| Boot Aloe Console
|--------------------------------------------------------------------------
|
| Automatically load your config, paths and commands,
| and then run the console application.
|
*/
Leaf\Core::loadConsole();
```

After this, you can delete the `app/console/Commands.php` file and that's it!

Congrats, you’ve successfully upgraded to Leaf MVC 3.8! 🎉

From here, you can start safely removing any directories you don’t need, you get all the new commands and features, and you can start building your application with the new modular structure.
