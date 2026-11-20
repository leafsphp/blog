---
title: "PHP 8.6 is here, and every supported branch got a security release"
date: 2026-11-19
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
image: /php-november-security-releases.jpg
description: PHP 8.6.0 is out today with partial function application, clamp(), a Duration class and a new polling API. The same day, PHP fixed 18 CVEs across every supported branch, seven of them critical. Here is what is new and what to update.
---

<img src="/php-november-security-releases.jpg" style="width:100%; border-radius: 8px; margin-bottom: 15px;" alt="PHP 8.6 is here: partial function application, clamp(), Duration and more, plus security fixes for every supported branch" />

<p>
PHP 8.6 is out. The PHP team released 8.6.0 today, 19 November 2026, after seven release candidates, and it is a big one. It brings partial function application, a real Duration type and a new polling API. The same day, PHP shipped security releases for every supported branch, fixing 18 CVEs. Seven of them are rated critical.
</p>

---

This post is for anyone running PHP, whatever framework you use. The first half covers what is new in 8.6. The second half covers the security round and how to tell if you are exposed.

## What is new in PHP 8.6

Congratulations to the release managers and to everyone who contributed. Here is what we are most excited about. The [release page](https://www.php.net/releases/8.6/en.php) has the full list.

### Partial function application

You can now fill in some of a function's arguments and get back a closure that takes the rest. A `?` stands for one argument you will pass later, and `...` stands for all the remaining ones.

```php
// PHP 8.5
$slugs = array_map(fn ($title) => str_replace(' ', '-', $title), $titles);

// PHP 8.6
$slugs = array_map(str_replace(' ', '-', ?), $titles);
```

The function only runs once the missing arguments arrive. Most one-line arrow functions passed as callbacks can go.

### clamp()

Keeping a value inside a range used to mean nesting `min()` inside `max()` and hoping you got the order right.

```php
// PHP 8.5
$volume = max(0, min($input, 100));

// PHP 8.6
$volume = clamp($input, 0, 100);
```

It works with any comparable value, numbers or otherwise.

### A Duration class

`Time\Duration` represents elapsed time with nanosecond precision, independent of any date or timezone. A timeout can now say which unit it is in.

```php
use Time\Duration;

$timeout = Duration::fromSeconds(30);
$retryIn = Duration::fromMilliseconds(250);
```

Durations are comparable, so they work with `min()`, `max()` and `clamp()` directly.

The best use is in your own function signatures. A parameter typed as `Duration` tells every caller what it expects, and nobody has to guess whether `30` means seconds or milliseconds.

```php
// PHP 8.5: is 250 seconds or milliseconds?
function retry(callable $job, int $delay) {}

retry($job, 250);

// PHP 8.6: the call says it
function retry(callable $job, Duration $delay) {}

retry($job, Duration::fromMilliseconds(250));
```

One caveat: PHP's existing functions, like `sleep()` and `usleep()`, still take plain integers in 8.6. The new polling API is the only built-in that accepts a `Duration` so far. Inside your function you read `$delay->seconds` and `$delay->nanoseconds` and pass those on.

A Duration measures elapsed time, like a timeout or a retry delay. It has no days, months or years, so it does not replace date handling. For dates, Leaf already has [Leaf Date](https://leafphp.dev/docs/utils/date). Its `tick()` helper adds, subtracts and compares dates, and it works the same on every PHP version Leaf supports, from 8.2 to 8.6. You do not need to upgrade PHP to use it.

```php
tick()->add(1, 'week')->format('YYYY-MM-DD');
tick('2026-12-31')->diff('2026-11-19', 'days'); // 42
tick('2026-11-19')->fromNow();
```

The two sit side by side in one app. Use `tick()` for anything on a calendar and a `Duration` for anything on a stopwatch. When you need both, a duration's seconds go straight into `tick()`:

```php
$ttl = Duration::fromMinutes(15);

$expiresAt = tick()->add($ttl->seconds, 'seconds');
```

### A polling API

The new `Io\Poll` API watches many streams at once using the best mechanism on each platform, such as epoll or kqueue. It does not have the connection limits of `stream_select()`. It is built as a common foundation for event loop libraries like ReactPHP and AMPHP, so most of us will feel it through faster async tooling.

### And the smaller things

- A built-in `SortDirection` enum with `Ascending` and `Descending` cases, so libraries can share one type for sort order.
- Readonly properties can declare default values.
- Stream functions can throw a `StreamException` with structured errors, which replaces the `@` operator and `error_get_last()`.
- Function parameters can carry their own DocComments.

### Should you upgrade today?

Library maintainers should add 8.6 to their CI matrix now. Make it a required entry if your suite passes, and allow failure only where it truly breaks, so the failures stay visible.

For applications, try 8.6 in staging and read the [migration guide](https://www.php.net/manual/en/migration86.php) before you move production. PHP 8.6.0 already includes every security fix described below.

## The fixed versions

| Branch | Update to | CVEs fixed |
| --- | --- | --- |
| PHP 8.5 | 8.5.13 | 18 |
| PHP 8.4 | 8.4.28 | 14 |
| PHP 8.3 | 8.3.37 | 13 |
| PHP 8.2 | 8.2.36 | 12 |

The counts are the CVE IDs in each version's entry in the [PHP 8 changelog](https://www.php.net/ChangeLog-8.php). You will see both 17 and 18 quoted for this round. PHP published 17 security advisories of its own, and the eighteenth CVE is a fix in the bundled uriparser library, which only PHP 8.5 and 8.6 ship.

PHP 8.6.0 already contains all 18 fixes. Downloads are on [php.net](https://www.php.net/downloads.php), and the official `php:` Docker images for all five versions are published.

When you update, restart your PHP workers: FPM, Apache, Swoole, FrankenPHP, whatever runs your app. The fix does nothing until the old processes are gone.

The October releases (8.5.12, 8.4.27, 8.3.36 and 8.2.35) are affected too.

## What was fixed

PHP said ahead of the release that the critical issues need "either non-default configuration or uncommon setups". That holds for most of them. Each one still deserves a quick check against your own setup, because some of those setups are common in production.

These are the seven critical ones:

| CVE | What it is | Branches | You are exposed when |
| --- | --- | --- | --- |
| CVE-2026-129289 | PHP-FPM request smuggling | all | your web server reuses FastCGI connections and your app opens `php://input` without reading all of it |
| CVE-2026-115560 | Session serializer mismatch | all | upload progress is on and two serializers read the same session store |
| CVE-2026-126714 | Partially overwritten session files | all | you use the default `files` session handler and an attacker can influence session data |
| CVE-2026-129496 | Timezone cache use-after-free | all | PHP logs errors to a file and prints a warning during startup |
| CVE-2026-129481 | Use-after-free after interrupted session shutdown | 8.3 and newer | a fatal error happens in a callback during session cleanup |
| CVE-2026-129474 | Use-after-free in magic method backtraces | 8.5 and newer | fatal error backtraces include arguments |
| CVE-2026-129182 | Use-after-free in the fatal error backtrace global | 8.5 and newer | specific per-directory INI overrides are in place |

The other eleven are rated high or medium. They cover a PHP-FPM local privilege escalation, a PHAR signature bypass, HTTPS and FTPS URLs with an uppercase scheme being sent in plaintext, a denial of service in the HTTP stream wrapper, and smaller fixes in SOAP, DOM, CGI, the FPM status page and the URI extension.

### PHP-FPM request smuggling (CVE-2026-129289)

This is the one to check first, because it needs no unusual PHP setting. When a front end keeps FastCGI connections open between requests, an attacker can leave bytes behind in one request that PHP-FPM then reads as a new request. That forged request can run PHP code as the worker.

Two things have to be true. Your front end reuses backend connections: nginx with `fastcgi_keep_conn on`, Apache `mod_proxy_fcgi` with `enablereuse=on`, or HAProxy keeping FastCGI connections alive. And your application opens `php://input` without reading it to the end.

Standard nginx and Apache setups close the FastCGI connection after each request and are not affected by the demonstrated attack.

### The session bugs (CVE-2026-115560 and CVE-2026-126714)

Session upload progress writes the progress of a file upload into the session while the upload is still running. It has been on by default since PHP 5.4.

CVE-2026-115560 happens when upload progress writes session data in one format and something else reads it in another. The October advisory described one way to get there: your config sets `session.serialize_handler` to `php_binary` or `php_serialize`, and your code switches it back to `php` with `ini_set()` before `session_start()`. Today's full advisory adds a second way. Two applications, FPM pools or command-line jobs with different serializers can share the same session directory, and no `ini_set()` call is needed for that.

CVE-2026-126714 is in the default `files` session handler. An interrupted write can leave a session file holding parts of two sessions, which PHP may then read as serialized objects.

Both need a usable gadget chain in your application to reach code execution. The advisory for the first one reports working chains with Guzzle and Monolog, which a lot of applications have installed.

The fixed releases also change two behaviours. In the words of the [advisory](https://github.com/php/php-src/security/advisories/GHSA-658j-r8rw-q6mx), the fix disables session upload progress by default and rejects runtime changes to session settings while upload progress is enabled. A php.ini that turns upload progress on explicitly still wins over the new default, so check for it.

### Magic method backtraces (CVE-2026-129474, PHP 8.5 only)

PHP 8.5 turned fatal error backtraces on by default. When a fatal error lands at the moment the application enters a `__call()` or `__callStatic()` method, the backtrace can read freed memory. The demonstrated attack needs `fatal_error_backtraces=1` and `zend.exception_ignore_args=0`.

`php.ini-production` sets `zend.exception_ignore_args=1`, which blocks this path. PHP's built-in default is `0`, so a server running without a production php.ini is exposed.

### Timezone cache (CVE-2026-129496)

This one needs PHP to write a diagnostic to a file-based `error_log` during startup, for example because of an invalid `date.timezone` or a deprecated session setting. A crafted request to a fresh worker can then crash it, and code execution has been demonstrated locally.

## How to check if you are exposed

Run these on the server, and check the FPM configuration, since the CLI can load a different php.ini:

```bash
php -v
php -i | grep -E "session.serialize_handler|session.upload_progress.enabled|session.save_handler"
php -i | grep -E "zend.exception_ignore_args|fatal_error_backtraces|^error_log"
grep -rn "fastcgi_keep_conn\|enablereuse" /etc/nginx /etc/apache2 /etc/httpd 2>/dev/null
```

Then run these from the root of your project:

```bash
grep -rn "session.serialize_handler" --include="*.php" --include="*.ini" .
grep -rn "php://input" --include="*.php" .
```

Treat the update as urgent when `fastcgi_keep_conn on` or `enablereuse=on` shows up. The same goes for `zend.exception_ignore_args` set to `0` on PHP 8.5.

## If you cannot update right away

These are the workarounds from the PHP advisories. They narrow the exposure and none of them replaces the update.

```ini
; php.ini or the FPM pool config
session.upload_progress.enabled = 0
zend.exception_ignore_args = 1

; PHP 8.5 only, as an alternative to the line above
fatal_error_backtraces = 0

; FPM pool config only
catch_workers_output = no
```

- Set `session.upload_progress.enabled = 0` in every config that writes to your session store. It has to be set in configuration. Calling `ini_set()` from the application is too late.
- Set `zend.exception_ignore_args = 1` on PHP 8.5. Setting `fatal_error_backtraces = 0` also closes that path.
- Set `catch_workers_output = no` in your FPM pools. This is the workaround for CVE-2026-129291, a privilege escalation from a worker to the FPM master. The official `php:*-fpm` Docker images set it to `yes`, so most containers have it on. Turning it off stops worker output from reaching the container logs, so on Docker a fresh image is the better fix.
- Turn off backend connection reuse on your front end: remove `fastcgi_keep_conn on` from nginx or `enablereuse=on` from Apache.
- Fix any warning or deprecation PHP prints at startup, or send PHP errors to syslog.
- Do not expose a PHP-FPM listener to an untrusted network.

Restart the PHP master process and all workers after any of these.

Disabling upload progress does not cover CVE-2026-129481 or session data your own code stores, so plan the update even with the workarounds in place.

## PHP 8.2 is almost done

PHP 8.2 reaches end of life on 31 December 2026. Today's 8.2.36 is one of its last releases. Anyone still on 8.2 should plan the move to 8.4 or 8.5 now, or go straight to 8.6 once your dependencies support it.

## What to do now

1. Update PHP to the fixed version for your branch, then restart your workers.
2. If you deploy with Docker, bump the image tag and make sure the build pulls a fresh base image.
3. If you cannot update today, apply the workarounds above.
4. Check your web server config for FastCGI connection reuse.
5. Check that two applications with different session settings do not share one session directory.
6. Add 8.6 to your CI matrix if you maintain a package, and try it in staging.

## A note for Leaf users

Nothing needs updating on the Leaf side. We checked the Leaf packages against today's advisories.

No Leaf package changes `session.serialize_handler`, and none of them turns on upload progress. If you store sessions in Redis with `leafs/redis`, it calls `ini_set()` to point the session save handler and save path at Redis. That is a different setting from the serialize handler. The patched versions reject runtime session changes while upload progress is enabled. The advisory does not list which settings that covers, so we expect it to include these two. Leave upload progress off, which is the new default, and the Redis session setup keeps working.

Leaf's request reader opens `php://input` and reads the whole body, so it does not leave unread bytes behind. Your own code might, and the fix for the smuggling bug is in PHP, so update either way.

The Fly.io deployment template in Leaf CLI and the `leaf-docker` image set `catch_workers_output = yes` in the FPM pool, the same as the official images. CVE-2026-129291 needs an attacker who can already run PHP code on your server. Rebuilding on a patched PHP image fixes it.

Leaf 5 and its modules require PHP 8.2 or newer, so every supported branch works. We will add 8.6 to the test matrix of the Leaf repositories and update the Docker tags in our docs and CLI templates. If a Leaf package behaves differently on the patched builds or on 8.6, open an issue on the repo or write to mychi@leafphp.dev.
