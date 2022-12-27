---
title: Eien December 2022
date: 2022-12-27
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<!-- markdownlint-disable no-inline-html -->

<img src="https://user-images.githubusercontent.com/26604242/209720993-ed310c50-ecdd-4967-9fe8-a4a36599f9b1.jpg" style="border-radius: 8px; margin-bottom: 15px;" alt="" />

<p>
This month, a whole lot of work has been done to improve Eien which was started earlier in October. We added a bunch of features and improved the way Eien works under the hood. Though still in its early stages, Eien is already showing a lot of promise and we're excited to see what the future holds.
</p>

---

## Performance

We've made a ton of performance improvements to Eien this months, from the way data is handled to the way our internals work. We've tidied up a lot of code and made sure that Eien is as fast as possible. All of these led to more than a 50% increase in performance. Eien now handles an average of 90k requests per second on a single thread compared to 40k requests per second in October.

![benchmarks](https://user-images.githubusercontent.com/26604242/209473926-43485e5b-7ab2-4851-a5ee-fdb2b90973e7.png)

## WebSockets

Now for the main feature we added this month, WebSockets. We've added WebSockets to Eien to make it easier to build real-time applications. WebSockets allow you to have a persistent connection between a client and a server. This means that the client can send data to the server and the server can send data to the client at any time. This is great for building real-time applications like chat apps, multiplayer games, and more.

<i>Note that WebSockets functionality is still a beta feature, and only available on the beta channel. You'll need to install the beta versions of Leaf, Eien and Leaf Http to use websockets. To do this, run:</i>

```sh
leaf install leaf@3.2.2-beta eien@dev-main http@dev-main
```

Since Eien is just the server part of your app, you need to interface with Leaf to actually use WebSockets. To do this, you need to use the `ws` method in Leaf. The `ws` method is used to create a WebSocket handler. It takes two arguments which are the URL of the WebSocket server and the handler. Here's an example:

```php
<?php

require __DIR__ . '/vendor/autoload.php';

app()->ws('/ws-route', function () {
  response()->json([
    "message" => "Hello from websocket"
  ]);
});

app()->run();
```

As you see here, you can use the `response()` function to send data to the client. You can also use the `request()` function to get data from the client. Here's an example:

```php
<?php

require __DIR__ . '/vendor/autoload.php';

app()->ws('/ws-route', function () {
  $data = request()->body();

  response()->json([
    "message" => "Hello from websocket",
    "data" => $data
  ]);
});

app()->run();
```

This also applies to other Leaf modules like Leaf Auth, Leaf Cache, Leaf Router, Leaf Validation, and more. You can use them in your WebSocket handlers.

The handler function for the websocket route is a callback function that will be called when a client sends a message to the websocket route. The callback function receives a `Swoole\WebSocket\Server` instance as it's first argument. It also receives a `Swoole\WebSocket\Frame` instance as it's second argument. The `Swoole\WebSocket\Server` instance is the websocket server instance and the `Swoole\WebSocket\Frame` instance is the message sent by the client.

Here's an example of how you can use the `Swoole\WebSocket\Server` instance to send data to the client:

```php
?php

require __DIR__ . '/vendor/autoload.php';

app()->ws('/ws-route', function ($server, $frame) {
  $server->push($frame->fd, "Hello from websocket");
});

app()->run();
```

Although this is viable, it's not the best way to send data to the client. The best way to send data to the client is to use the `response()` function. This is because Eien is trained to handle responses from the Leaf response. This means that Eien will be able to better handle responses that come from Leaf modules like Leaf Auth, Leaf Cache, Leaf Router, Leaf Validation, and more.

**As mentioned before, Eien WebSockets are still in the dev phase, we'll need your help to make them production ready. Please open an issue on the [Eien repo](https://github.com/leafsphp/eien) if you encounter any mishaps, thanks.**
