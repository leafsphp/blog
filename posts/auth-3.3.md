---
title: Leaf Auth just got better! Try roles & permissions today 👻
date: 2024-12-19
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<p>We published Leaf Auth v3.3 which brings a lot of usability updates in addition to the long awaited Roles & Permissions feature. Here's everything you need to know about v3.3 (🥀 Sea Buckthorn)</p>

---

The main addition in v3.3 was the role/permission feature, and the whole release was centred around making it easier to assign roles to users. The full documentation for the authorization can be found on the permissions page

## What is Leaf Auth?

Leaf Auth is our module that contains all the functionality for allowing users to login/register an account on your application. It has lots of handy tools for managing the user state within your applications, now including user permissions.

![giggle](https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb388187a-b88a-43c8-96f7-89b9a105b2b6_204x192.jpeg)

## How does it work? 🤔

Roles and permissions basically allow you to grant a user access to some specific features in your application. A user without a role or permission may not be able to access some URLs, buttons or forms throughout your app. Leaf Auth provides built-in support for roles and permissions which makes this a whole lot easier to use since the feature is tied directly to the auth user object.

You start out by defining all the roles and permissions which should be available in your application. This is to let Leaf know which roles can be assigned to various users

```php
auth()->createRoles([
  'admin' => ['view user', 'view users', 'create user', ...],
  'user' => ['view user', 'view users'],
  'guest' => ['view user']
]);
```

Unlike with other libraries, Leaf Auth does not allow you to directly assign permissions to users, instead, you assign permissions to roles and then assign the correct roles to the user who should have them.

You can assign the roles using the auth user like this:

```php
auth()->user()->assign('admin');
```

You can pass an array to assign for multiple roles as well

```php
auth()->user()->assign(['role1', 'role2']);
```

## Database Stuff 💿

Before we move on, it’s important to highlight a few things you might notice using roles and permissions with respect to database behaviour. The first thing you may notice is that `createRoles()` does not create a database table with all your roles and permissions, and there are good reasons for this. The only data saved in the database is the role assigned to the user.

Leaf Auth tries to do as much as possible without relying on the database which improves performance and allows it to work with all sorts of systems and database types without having to do all kinds of configurations for different systems. The major downside to this approach is that your user data is not exactly normalized, so it’s a bit less performant to make queries like getting all users with the admin role. It’s however not that big of a problem since that performance loss is balanced by the performance gains you get from normal role/permission operations everywhere else.

The only information that Leaf will save in your database will be saved in the users table directly on the user which means once the user is fetched, Leaf can directly map the roles and permissions of that user without any real costs to your applications’s performance.

## Single role vs multi role 👯

Most applications would do perfectly fine with a single role because unlike other RBAC implementations, Leaf’s implementation allows you to directly modify permissions tied to a role directly in your code which means if you have new permissions that should be part of a role, you can always just modify the permissions array for that role and Leaf will automatically pick up the new permissions.

Having multiple roles might be a better use-case for your application when you need to fine-tune exactly what a user can or can’t do in specific sections of your application. In those cases, you would probably have multiple roles which offer different permissions for access to different sections in your application.

## Example use-cases 📂

The most basic use-case will be assigning roles to users right after they sign up to your application. This ensures that every user has a role in your application.

```php
$success = auth()->register(...);

if ($success) {
  auth()->user()->assign(...);
}
```

While this is quite straightforward, it will only work for new applications. If you already have an application that does not employ roles and permissions, the easiest way to assign a role to everyone who should have that role (outside of a database query) is to assign the role on login. This will ensure that the role is assigned before the user proceeds to use the rest of your application.

```php
$success = auth()->login(...);

if ($success) {
  auth()->user()->assign(...);
}
```

The problem with the approaches above is that they assume everyone is getting a particular role. In admin systems, you would usually have a super-admin assigning roles to other users within the app. For such use-cases, `register()` and `login()` will not work as they will sign the super-admin out of their own account.

If a super-admin needs to assign a role to an already existing user, you can use the `find()` method to get the user instance for that particular user and directly assign the role to them like this:

```php
$userToAssignRoleTo = auth()->find($userId);

if ($userToAssignRoleTo) {
  $userToAssignRoleTo->assign(...);
}
```

With this implementation, the admin can assign a role to any existing user with the click of a button.

But what if the admin needs to assign a role to a user who doesn’t exist yet? That’s where `createAccountFor()` comes in. It behaves just like `register()` which means you get all the benefits including validation and all the auth configuration, except that it won’t interfere with the admin’s current session.

```php
$newUser = auth()->createUserFor(...);

if ($newUser) {
  $newUser->assign('admin');  

  ...
}
```

These are the most-common approaches for assigning roles you will usually use in your applications, but there’s a lot more you can do with Leaf Auth. Find the full documentation for Leaf Auth on leafphp.dev

Upcoming events 🚀
We are hosting our ninth Leaf hang-out where we just chat with you, give you updates and build stuff for Leaf. On our last hangout, we talked about some updates for Leaf MVC v4 and updates to Leaf Auth. We have a lot more planned for our next one, so don’t forget to join in.

If you can’t make it to our next hangout, the recordings will be up on YouTube so you can catch it later. We will hold this session every other week, so you can join us another time.

📆 Friday, December 20

⏰ 5 pm (GMT)

📍 youtube.com/@leafphp

Support Leaf 🌟
You can help Leaf out by

Following @leafphp on X and YouTube

Donating on OpenCollective or GitHub sponsors

Don’t forget to Join our Discord and share your feedback.
