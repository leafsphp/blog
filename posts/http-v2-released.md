---
title: Leaf Http v2 Released
date: 2022-05-31
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<img src="https://repository-images.githubusercontent.com/214705101/0ff19323-d2c5-46f5-a582-0b1f3a6eabcc" style="border-radius: 8px; margin-bottom: 15px;" alt="" />

We released Leaf Http v2, codenamed 'Weather man 🌤' on 29th May 2022. It comes with a completely rethought base which makes it much simpler to handle requests and responses in your app.

---

The main idea behind this release was to add a more modern approach to handling requests and responses in leaf. We decided to change the base of how the Http library works and we focused most on the Response class. Since there are so many different types of responses Leaf can handle, we took a nice approach to giving you all the tools you need to handle those responses.

For this reason, we tried to make Http v2 as backward compatible with v1 just as we did with Leaf when we transitioned to v3. This means that most of your http v1 knowledge is still valid in v2. Now let's see what's new in v2.

## New in v2

### Method Chaining

This is the biggest addition to Leaf Http **Response** in version 2. Method chaining allows you to be more expressive with your code and basically fit everything better. There's just a single rule you need to follow here: ***the method you want to output should be the last thing you call.***

If you want to output some JSON with a header `something`, you should always set the header before calling the JSON method.


***Note that this applies to only the Response Object.***

```php
// ☑️ CORRECT
response()->withHeader('something', 'value')->json('data');
// ❌ HEADER ERROR
response()->json('data')->withHeader('something', 'value');
```

### xml method

This method allows you to output xml as your response. It takes in 2 parameters:

- the data to output
- http status code with 200 default (optional)

```php
response()->xml('<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema" version="1.0.0" />');
```

This was added by [@Dreamer0x01](https://github.com/Dreamer0x01)

### noContent Method

The HTTP 204 No Content success status response code indicates that a request has succeeded, but that the client doesn't need to navigate away from its current page. This method allows you to quickly create a 204 response.

```php
response()->noContent();
```

### redirect Method

This feature simply allows you to send a redirect response which redirects to a different route.

```php
$userHasAuth = true;
if ($userHasAuth) {
  return response()->redirect('/home');
}
```

You can also specify a status code:

```php
response()->redirect('/home', 307);
```

### exit Method

This is a new method which allows you to output some data and close your app right after. This means that it acts as a sort of early-return for your app, so right after outputting some data, it quits and makes sure that no other code is executed from your app until the next request comes through.

It takes in 2 parameters: the data to output and the http status code (default: 500).

```php
response()->exit('This will be output as markup');
// code below won't run
```

You can also output JSON.

```php
response()->exit(['data' => 'This will be output as JSON'], 500);
```

### withHeader method

This method gives you a quick and simple way to set headers for your response. It takes in 4 parameters:

- The header name or an array of headers (key-value pairs)
- The header value if header key is a string
- A boolean on whether to replace the header if it's already set
- An Http status code to associate to header.

```php
response()
  ->withHeader('something', 'something')
  ->withHeader('somethingAgain', 'something', true, 200)
  ->withHeader(['somethingElse' => 'another'])
```

### withCookie Method

This method gives you a quick and simple way to set cookies for your response. It takes in 3 parameters:

- The name of the cookie
- The value of cookie
- When the cookie expires. Default: 7 days

```php
response()->withCookie("name", "Michael", "1 day")->json('...');
```

### withoutCookie Method

This method allows you to remove existing cookies from your response. So you're basically returning a response without selected cookies.

```php
response()->withoutCookie("name")->json('...');

// cookie array
response()->withoutCookie(["name", "something"])->json('...');
```

### withFlash Method

This is a new method which allows you add some flash messages to a response. It is usually used with redirects like this:

```php
response()->withFlash('message', 'something')->redirect('/somewhere');
```

### has

This is a new method added on the Headers object. This method allows you to check if a particular header has been set. It returns a boolean indicating whether the header has been set or not.

```php
$headerSet = Headers::has('Content-Type');
```

### Support for `x-www-form-urlencoded`

We also correctly added support for `application/x-www-form-urlencoded` data on the request object. You can now read and sanitize your x-www-form-urlencoded data just as you would do for any normal request.

```php
$data = request()->get('someData');
```

### Status Code Helper

We added a new class to help with quick and easy management of http status codes in your app. You now have access to the `Leaf\Http\Status` class which contains constants and details for http status codes.

```php
use Leaf\Http\Status;

$code = Status::HTTP_CONTINUE;
// returns 100
```

You can also get the status text from the code like this:

```php
use Leaf\Http\Status;

$text = Status::$statusTexts[100];
// returns 'Continue'
```

## Removed in v2

In order to take things to a new level, we had to get rid of some older features in order to pave way for better and more usable stuff.

### `throwErr`

This is a method which has existed since v1 of Leaf. `throwErr` was an attempt at error handling, but had a few issues: the biggest being that it only supports JSON data. To fix this, we came up with a more general solution `(exit)` which still simply outputs some data and breaks your app after that, making sure no other code runs after the output.

### Static Accessors

Due to a certain number of new features added, most methods are no longer static. Not to worry, you can still use functional mode which means there's still no need to initialize the entire response object.

### Headers Object

In version 2, the headers object has been removed. To set headers, you can use the `withHeader` method.

### Cookies Object

Just like the headers object, we also got rid of the cookies object. You can use the `withCookie` method instead.

### CORS from response

Leaf now comes with a module for handling CORS in your apps, so there's no need to keep the cors method on the response object.
