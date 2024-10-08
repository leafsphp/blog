---
title: Leaf Catch-up September!
date: 2024-10-02
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---


<img src="https://github.com/user-attachments/assets/603f2a66-73e7-47bc-9f71-7c59993c2b98" style="border-radius: 8px; margin-bottom: 15px;" alt="" />

<p>
Welcome to our September issue of the Leaf Catch-Up! Let's take a look at the progress on implementing some of our RFCs and the cool stuff the team has done since our last catch-up. Let's do this!
</p>

---

Our biggest goal is to make Leaf the kind of place where you can share your thoughts and concerns without feeling like you're shouting into the void. While we could sit in a corner and just build features that we think you'll like, we'd rather build Leaf together with you. This includes things like understanding your use cases, your pain points, and how you usually build with Leaf and other tools. We want to make sure that we're building the right things for you, and that we're building them in the right way.

## Highlights ✨

Happy new month folks! These are our highlights for September 2024.

- Following the result of our RFC to merge the router into Leaf, we have actually gone ahead to implement this change. The new code is available on GitHub although we are yet to release a new version. We initially thought the changes would add just a little bit of performance goodness to the already fast core, but to our horror (just being dramatic 🤭), we saw a 5x performance improvement which is absolutely insane.We have a few more tests to run because we rewrote the entire middleware implementation and the core route registration section of the router, but we hope to get this out within the next week. You can find the updated code on the “next” branch.

    ![image](https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F405112b8-d963-45aa-b9c1-799ea32b2cbe_2488x1416.png)

- The updated documentation has been the biggest headache over the past 3 weeks. Luckily, we are about halfway through what we can consider to be our initial release. The new documentation is a complete rewrite and approaches the documentation from a feature standpoint instead of an API reference standpoint as we did in the current documentation.This means it will have more visuals, it will be easier to read and understand and also navigate. We have published our latest commit to beta.leafphp.dev you can check this out and share your feedback. We have opened new pull-request under which you can share all your feedback.

    ![image](https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0fb04431-db73-4630-954e-438130f23d88_2916x1980.png)

- External contributor-fest 🤭
    We’ve had lots of releases over the past few weeks that were authored by folks outside the Leaf team and we’re extremely happy about this uptrend. We’ve had 7 external contributors make fixes and add some new relevant features to Leaf and it’s modules.If you’re interested in contributing to anything Leaf, don’t hold back. Our contribution guide details what you need to setup and how to proceed. We’d love to have you.

## Upcoming events 🚀

We are hosting our second Leaf hang-out where we just chat with you, give you updates and build stuff for Leaf. Our last hangout was fun and we showcased our progress and some new things we plan to build. We also fixed a few issues people had reported.

If you can’t make it to our next hangout, the recordings will be up on YouTube so you can catch it later. We will hold this session every other week, so you can join us another time.

📆 Friday, October 11

⏰ 5 pm (GMT)

📍 youtube.com/@leafphp

## Finances 💵

Our September saw us rake in $105 in donations with no new contributors 🥹

As Leaf is currently not funded by any external investors, we solely rely on your donations to support our full-time maintainers to keep Leaf and all our libraries running. We require your help to keep Leaf’s development ongoing. You can contribute to our GitHub Sponsors or OpenCollective.

You can find our full financial report on finance.leafphp.dev.

## Support Leaf 🌟

You can help Leaf out by

- Following @leafphp on X and YouTube

- Donating on OpenCollective or GitHub sponsors

Don’t forget to Join our Discord and share your feedback.

Warm Regards 😊❤️

Michael and the Leaf team
