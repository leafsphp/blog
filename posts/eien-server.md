---
title: Eien Server
date: 2022-10-12
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<img src="https://user-images.githubusercontent.com/26604242/195359788-e4118af3-7d83-4d74-80e7-0ca49cc4899b.jpg" style="border-radius: 8px; margin-bottom: 15px;" alt="" />

<p>Eien is Leaf's implementation of a high-speed, high-performance server based on powerful tools like <a href="https://swoole.co.uk/">Open Swoole</a> and <a href="https://github.com/swoole/swoole-src">Swoole</a>. Eien loads your app in memory and shares a state between requests to achieve amazing speeds, up to 40x.</p>

---

Eien was created as a means for Leaf to adopt the Swoole approach to building apps and APIs. Swoole is a powerful coroutine-based asynchronous PHP programming framework which has tons of benefits over the traditional PHP approach. Eien is a server that runs your Leaf app and uses Swoole to achieve amazing speeds.

For now, only Swoole Http is supported, but we plan to add support for Swoole Websocket and Swoole RPC in the future. We also plan to add support for other servers like Roadrunner and ReactPHP. This would open up leaf to a wider audience and allow us to support more use cases.

## Considerations

Just like all other leaf modules, Eien focuses on developer experience as well as simplicity and overall ease of use. For this reason, if your sole purpose for using Eien is to speed up your Leaf app, then there’s no need for you to add any extra code to your app. Once Leaf detects Eien and your serve your app with it, Leaf will automatically handle everything Eien is supposed to do.

Besides this, Eien also extends Leaf 3’s functional mode by adding a new `server` method. This method returns the active instance of the Eien server. This can be used to build a server to serve your Leaf apps from the ground up. In this case, Leaf will switch to the server you built instead of trying to initialize a default instance.

## Installation

You can easily install Eien using the [Leaf CLI](https://cli.leafphp.dev):

```sh
leaf install eien
```

Or with [Composer](https://getcomposer.org/).

```bash
composer require leafs/eien
```

## Prerequisites

Eien has been configured to rely on some features available in only v3 of Leaf. This means that you can't use Eien with earlier versions of the Leaf framework or any other framework. Not to worry, if you're on Leaf 2, migrating to Leaf 3 should take less than 10 minutes. You can follow this [documentation to help you migrate](https://leafphp.dev/docs/migration/introduction.html)

## Benchmarks

<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:10px;">
  <div>
    <b>Leaf WITHOUT Eien:</b>
    <img width="759" alt="IMG_0785" src="https://user-images.githubusercontent.com/26604242/194716365-40e6e77c-6cb3-403e-a890-62382d14976e.png">
  </div>
  <div>
    <b>Leaf WITH Eien:</b>
    <img width="746" alt="IMG_5389" src="https://user-images.githubusercontent.com/26604242/194716369-6d65a656-8a35-48e9-aabf-b34ada8d5ae3.png">
  </div>
</div>

***From the Benchmarks above, Leaf was 34x faster when used with Eien.***

## Basic Usage

As mentioned above, once Leaf detects Eien, it will automatically setup everything and get your app running faster than anything you've seen. So if you simply want to use Eien to speed up your Leaf app, you don't need to do anything else.

However, Eien also allows you to build your own server. This is useful if you want to add more features to your server or you want to add some configuration to Eien. To get started, we need to make a little tweak to our Leaf app. We would need to remove the line which runs our Leaf app. This is because we want to run our app from our own server.

```php
// remove this line
$app->run();
```

Now all that we need to do is use the Eien server class to craft a beautiful server for our Leaf app. We can use the `Leaf\Eien\Server` class:

```php
$app = new Leaf\App();

// your leaf routes

$server = new Leaf\Eien\Server();
$sever->wrap($app);
```

Or use functional mode like this:

```php
// your leaf routes
server()->wrap(app());
```

After wrapping your app, you can then enable Eien to boot upr by calling the `listen` method. This will tell Eien to listen for traffic, forward your requests and return a response.

```php
$server->listen();
```

Putting it all together, your `index.php` file should look like this:

```php
<?php

require __DIR__ . '/vendor/autoload.php';

$app = new Leaf\App();

$app->get('/', function () use($app) {
  $app->response()->json(['message' => 'hello']);
});

$server = new Leaf\Eien\Server();
$server
  ->wrap($app);
  ->listen();
```

Or with functional mode:

```php
<?php

require __DIR__ . '/vendor/autoload.php';

app()->get('/', function () {
  app()->response()->json(['message' => 'hello']);
});

server()
  ->wrap(app());
  ->listen();
```

**Note that Eien is still in it's dev phase, we have occasional releases, but Eien has not yet been fully tested in production and we'll need your help with that.**

## Serving Your Application

You can start your application using the `php <filename>` command. This command will start Eien which will then load your app. Since Eien loads your application to memory, any changes to your application's files will not be reflected when you refresh your browser so we don't recommend this method. You can think of it as starting your nodejs application with `node index.js`.

What we really need in this case is to watch your files and restart them when there's any update. For this, we tweaked the `leaf serve` command from the Leaf CLI a bit. You can use the Leaf serve command to start Eien and watch for any changes.

```sh
leaf serve <filename>
```

## Tradeoffs

Since Eien is tied to Leaf, it means that you can't use it with other frameworks. This is because Leaf is built with a very specific architecture that makes it very fast and efficient. This means that you can't use Eien with other frameworks like Laravel, Symfony, etc.

Another major thing to watch out for is the use of PHP functions for responses. All your headers and cookies need to pass through Leaf directly, otherwise Eien won't be able to handle them right. This means you can't use inbuilt PHP functions like `header()` or `setcookie()`. You'll need you use Leaf's `response->withHeader()` and `response->withCookie()` functions instead.

## Configuring Eien

Since Eien uses Swoole under the hood, your configuration is mostly applied to Swoole. You can get started by passing in an array of configuration options to the `config` method.

```php
$server->config([
  'log_level' => 1,
  'log_file' => '/data/swoole.log',
]);
```

Or with functional mode:

```php
server()->config([
  'log_level' => 1,
  'log_file' => '/data/swoole.log',
]);
```
