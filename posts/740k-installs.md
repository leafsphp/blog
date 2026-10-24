---
title: 'Looking back at 740k+ installs'
date: 2026-10-24
author: Michael Darko
github: mychidarko
twitter: '@mychidarko'
---

<img src="/740k-installs.png" style="width:100%; border-radius: 8px; margin-bottom: 15px;" alt="740,000+ installs across 54 Leaf packages since 2019" />

<p>
We checked Packagist this week and the Leaf packages have passed 740,000 installs between them. That number crept up on us. Leaf started as a tiny router I wrote for my own projects in 2019, and the first release on Packagist went up on the 17th of October that year, so this is a good week to stop and look back at how we got here.
</p>

---

## Our Story

Leaf was built as a lightweight router with a few helper classes around it, just so folks could build simple apps and APIs quickly without worrying about the bloat from bigger frameworks and the isolation of tiny alternatives. Leaf eventually grew, and somewhere around v3, we discovered the direction we wanted to build Leaf in.

- v3 introduced functional mode, modules and the crazy simplicity we're known for...
- v4 built on top of that, sharpening everything we had built in v3 and making the whole ecosystem more mature...
- v5 took everything we'd learnt about simplicity, modularity and our own experience with AI and shaped Leaf into the very first AI-native framework...built with agents in mind

This month, most of our modules are doing a record high in downloads, and per feedback received, lots of AI-users are enjoying a smooth building experience with lower costs and better context

<svg class="lc" viewBox="0 0 860 320" width="100%" role="img" aria-label="Daily installs across all Leaf packages, monthly average, October 2019 to October 2026, with each major version marked"><rect class="zone z1" x="52.0" y="56" width="219.6" height="232"/><rect class="zone z2" x="271.6" y="56" width="500.8" height="232"/><rect class="zone z3" x="772.4" y="56" width="17.6" height="232"/>
<line class="grid" x1="52" x2="790" y1="288.0" y2="288.0"/><text class="ax" x="44" y="292.0" text-anchor="end">0</text>
<line class="grid" x1="52" x2="790" y1="230.0" y2="230.0"/><text class="ax" x="44" y="234.0" text-anchor="end">250</text>
<line class="grid" x1="52" x2="790" y1="172.0" y2="172.0"/><text class="ax" x="44" y="176.0" text-anchor="end">500</text>
<line class="grid" x1="52" x2="790" y1="114.0" y2="114.0"/><text class="ax" x="44" y="118.0" text-anchor="end">750</text>
<line class="grid" x1="52" x2="790" y1="56.0" y2="56.0"/><text class="ax" x="44" y="60.0" text-anchor="end">1,000</text>
<text class="ax" x="78.4" y="306" text-anchor="middle">2020</text>
<text class="ax" x="183.8" y="306" text-anchor="middle">2021</text>
<text class="ax" x="289.2" y="306" text-anchor="middle">2022</text>
<text class="ax" x="394.6" y="306" text-anchor="middle">2023</text>
<text class="ax" x="500.1" y="306" text-anchor="middle">2024</text>
<text class="ax" x="605.5" y="306" text-anchor="middle">2025</text>
<text class="ax" x="710.9" y="306" text-anchor="middle">2026</text>
<text class="mono" x="52" y="18">// INSTALLS PER DAY, ALL LEAF PACKAGES</text>
<line class="vline" x1="95.9" x2="95.9" y1="50" y2="288.0"/>
<g transform="translate(89.9,20) scale(0.22)"><path class="leaf" d="M59.805,57.461l22.579,-12.091l-13.317,31.834l-18.994,7.882c-0,-0 -13.304,-10.548 -13.311,-18.061c-0.01,-10.824 13.253,-46.885 13.253,-46.885l9.79,37.321Z" transform="translate(-30,-18)"/></g>
<text class="vlbl" x="105.9" y="38" text-anchor="start">v2</text>
<line class="vline" x1="271.6" x2="271.6" y1="50" y2="288.0"/>
<g transform="translate(265.6,20) scale(0.22)"><path class="leaf" d="M59.805,57.461l22.579,-12.091l-13.317,31.834l-18.994,7.882c-0,-0 -13.304,-10.548 -13.311,-18.061c-0.01,-10.824 13.253,-46.885 13.253,-46.885l9.79,37.321Z" transform="translate(-30,-18)"/></g>
<text class="vlbl" x="281.6" y="38" text-anchor="start">v3 · modules</text><text class="vdelta" x="281.6" y="51" text-anchor="start">36 → 42 a day (+17%)</text>
<line class="vline" x1="614.3" x2="614.3" y1="50" y2="288.0"/>
<g transform="translate(608.3,20) scale(0.22)"><path class="leaf" d="M59.805,57.461l22.579,-12.091l-13.317,31.834l-18.994,7.882c-0,-0 -13.304,-10.548 -13.311,-18.061c-0.01,-10.824 13.253,-46.885 13.253,-46.885l9.79,37.321Z" transform="translate(-30,-18)"/></g>
<text class="vlbl" x="604.3" y="38" text-anchor="end">v4</text><text class="vdelta" x="604.3" y="51" text-anchor="end">666 → 694 a day (+4%)</text>
<line class="vline" x1="772.4" x2="772.4" y1="50" y2="288.0"/>
<g transform="translate(766.4,20) scale(0.22)"><path class="leaf" d="M59.805,57.461l22.579,-12.091l-13.317,31.834l-18.994,7.882c-0,-0 -13.304,-10.548 -13.311,-18.061c-0.01,-10.824 13.253,-46.885 13.253,-46.885l9.79,37.321Z" transform="translate(-30,-18)"/></g>
<text class="vlbl" x="762.4" y="38" text-anchor="end">v5 · agents</text><text class="vdelta" x="762.4" y="51" text-anchor="end">544 → 852 a day (+57%)</text>
<text class="zlbl" x="161.8" y="72" text-anchor="middle">v1 · v2</text><text class="zlbl" x="522.0" y="72" text-anchor="middle">v3 · v4</text><text class="zlbl" x="781.2" y="280" text-anchor="middle">v5</text><path class="line" d="M52.0,287.1 L60.8,286.6 L69.6,286.6 L78.4,286.1 L87.1,285.2 L95.9,285.7 L104.7,285.9 L113.5,285.0 L122.3,285.2 L131.1,283.6 L139.9,285.7 L148.6,285.7 L157.4,285.0 L166.2,284.3 L175.0,284.8 L183.8,283.4 L192.6,284.1 L201.4,278.3 L210.1,283.1 L218.9,284.3 L227.7,284.5 L236.5,284.3 L245.3,285.0 L254.1,284.3 L262.9,279.6 L271.6,278.3 L280.4,271.8 L289.2,262.0 L298.0,268.7 L306.8,268.3 L315.6,261.6 L324.4,262.9 L333.1,267.4 L341.9,263.9 L350.7,245.8 L359.5,240.2 L368.3,238.6 L377.1,256.2 L385.9,256.7 L394.6,244.2 L403.4,250.9 L412.2,204.9 L421.0,220.5 L429.8,202.4 L438.6,208.9 L447.4,181.5 L456.1,195.0 L464.9,180.8 L473.7,194.7 L482.5,179.4 L491.3,191.5 L500.1,172.0 L508.9,164.8 L517.6,174.6 L526.4,176.9 L535.2,186.8 L544.0,177.6 L552.8,182.9 L561.6,174.1 L570.4,165.3 L579.1,164.3 L587.9,134.9 L596.7,187.8 L605.5,133.5 L614.3,127.0 L623.1,137.4 L631.9,136.7 L640.6,104.0 L649.4,115.6 L658.2,155.3 L667.0,169.4 L675.8,153.4 L684.6,180.1 L693.4,172.9 L702.1,176.2 L710.9,174.3 L719.7,174.3 L728.5,179.7 L737.3,154.6 L746.1,158.1 L754.9,179.7 L763.6,161.8 L772.4,90.3 L781.2,90.3 L790.0,73.6"/>
<rect class="hit" x="47.6" y="56" width="8.8" height="232"><title>2019-10: 4 installs per day</title></rect>
<rect class="hit" x="56.4" y="56" width="8.8" height="232"><title>2019-11: 6 installs per day</title></rect>
<rect class="hit" x="65.2" y="56" width="8.8" height="232"><title>2019-12: 6 installs per day</title></rect>
<rect class="hit" x="74.0" y="56" width="8.8" height="232"><title>2020-01: 8 installs per day</title></rect>
<rect class="hit" x="82.8" y="56" width="8.8" height="232"><title>2020-02: 12 installs per day</title></rect>
<rect class="hit" x="91.5" y="56" width="8.8" height="232"><title>2020-03: 10 installs per day</title></rect>
<rect class="hit" x="100.3" y="56" width="8.8" height="232"><title>2020-04: 9 installs per day</title></rect>
<rect class="hit" x="109.1" y="56" width="8.8" height="232"><title>2020-05: 13 installs per day</title></rect>
<rect class="hit" x="117.9" y="56" width="8.8" height="232"><title>2020-06: 12 installs per day</title></rect>
<rect class="hit" x="126.7" y="56" width="8.8" height="232"><title>2020-07: 19 installs per day</title></rect>
<rect class="hit" x="135.5" y="56" width="8.8" height="232"><title>2020-08: 10 installs per day</title></rect>
<rect class="hit" x="144.2" y="56" width="8.8" height="232"><title>2020-09: 10 installs per day</title></rect>
<rect class="hit" x="153.0" y="56" width="8.8" height="232"><title>2020-10: 13 installs per day</title></rect>
<rect class="hit" x="161.8" y="56" width="8.8" height="232"><title>2020-11: 16 installs per day</title></rect>
<rect class="hit" x="170.6" y="56" width="8.8" height="232"><title>2020-12: 14 installs per day</title></rect>
<rect class="hit" x="179.4" y="56" width="8.8" height="232"><title>2021-01: 20 installs per day</title></rect>
<rect class="hit" x="188.2" y="56" width="8.8" height="232"><title>2021-02: 17 installs per day</title></rect>
<rect class="hit" x="197.0" y="56" width="8.8" height="232"><title>2021-03: 42 installs per day</title></rect>
<rect class="hit" x="205.8" y="56" width="8.8" height="232"><title>2021-04: 21 installs per day</title></rect>
<rect class="hit" x="214.5" y="56" width="8.8" height="232"><title>2021-05: 16 installs per day</title></rect>
<rect class="hit" x="223.3" y="56" width="8.8" height="232"><title>2021-06: 15 installs per day</title></rect>
<rect class="hit" x="232.1" y="56" width="8.8" height="232"><title>2021-07: 16 installs per day</title></rect>
<rect class="hit" x="240.9" y="56" width="8.8" height="232"><title>2021-08: 13 installs per day</title></rect>
<rect class="hit" x="249.7" y="56" width="8.8" height="232"><title>2021-09: 16 installs per day</title></rect>
<rect class="hit" x="258.5" y="56" width="8.8" height="232"><title>2021-10: 36 installs per day</title></rect>
<rect class="hit" x="267.2" y="56" width="8.8" height="232"><title>2021-11: 42 installs per day</title></rect>
<rect class="hit" x="276.0" y="56" width="8.8" height="232"><title>2021-12: 70 installs per day</title></rect>
<rect class="hit" x="284.8" y="56" width="8.8" height="232"><title>2022-01: 112 installs per day</title></rect>
<rect class="hit" x="293.6" y="56" width="8.8" height="232"><title>2022-02: 83 installs per day</title></rect>
<rect class="hit" x="302.4" y="56" width="8.8" height="232"><title>2022-03: 85 installs per day</title></rect>
<rect class="hit" x="311.2" y="56" width="8.8" height="232"><title>2022-04: 114 installs per day</title></rect>
<rect class="hit" x="320.0" y="56" width="8.8" height="232"><title>2022-05: 108 installs per day</title></rect>
<rect class="hit" x="328.8" y="56" width="8.8" height="232"><title>2022-06: 89 installs per day</title></rect>
<rect class="hit" x="337.5" y="56" width="8.8" height="232"><title>2022-07: 104 installs per day</title></rect>
<rect class="hit" x="346.3" y="56" width="8.8" height="232"><title>2022-08: 182 installs per day</title></rect>
<rect class="hit" x="355.1" y="56" width="8.8" height="232"><title>2022-09: 206 installs per day</title></rect>
<rect class="hit" x="363.9" y="56" width="8.8" height="232"><title>2022-10: 213 installs per day</title></rect>
<rect class="hit" x="372.7" y="56" width="8.8" height="232"><title>2022-11: 137 installs per day</title></rect>
<rect class="hit" x="381.5" y="56" width="8.8" height="232"><title>2022-12: 135 installs per day</title></rect>
<rect class="hit" x="390.2" y="56" width="8.8" height="232"><title>2023-01: 189 installs per day</title></rect>
<rect class="hit" x="399.0" y="56" width="8.8" height="232"><title>2023-02: 160 installs per day</title></rect>
<rect class="hit" x="407.8" y="56" width="8.8" height="232"><title>2023-03: 358 installs per day</title></rect>
<rect class="hit" x="416.6" y="56" width="8.8" height="232"><title>2023-04: 291 installs per day</title></rect>
<rect class="hit" x="425.4" y="56" width="8.8" height="232"><title>2023-05: 369 installs per day</title></rect>
<rect class="hit" x="434.2" y="56" width="8.8" height="232"><title>2023-06: 341 installs per day</title></rect>
<rect class="hit" x="443.0" y="56" width="8.8" height="232"><title>2023-07: 459 installs per day</title></rect>
<rect class="hit" x="451.8" y="56" width="8.8" height="232"><title>2023-08: 401 installs per day</title></rect>
<rect class="hit" x="460.5" y="56" width="8.8" height="232"><title>2023-09: 462 installs per day</title></rect>
<rect class="hit" x="469.3" y="56" width="8.8" height="232"><title>2023-10: 402 installs per day</title></rect>
<rect class="hit" x="478.1" y="56" width="8.8" height="232"><title>2023-11: 468 installs per day</title></rect>
<rect class="hit" x="486.9" y="56" width="8.8" height="232"><title>2023-12: 416 installs per day</title></rect>
<rect class="hit" x="495.7" y="56" width="8.8" height="232"><title>2024-01: 500 installs per day</title></rect>
<rect class="hit" x="504.5" y="56" width="8.8" height="232"><title>2024-02: 531 installs per day</title></rect>
<rect class="hit" x="513.2" y="56" width="8.8" height="232"><title>2024-03: 489 installs per day</title></rect>
<rect class="hit" x="522.0" y="56" width="8.8" height="232"><title>2024-04: 479 installs per day</title></rect>
<rect class="hit" x="530.8" y="56" width="8.8" height="232"><title>2024-05: 436 installs per day</title></rect>
<rect class="hit" x="539.6" y="56" width="8.8" height="232"><title>2024-06: 476 installs per day</title></rect>
<rect class="hit" x="548.4" y="56" width="8.8" height="232"><title>2024-07: 453 installs per day</title></rect>
<rect class="hit" x="557.2" y="56" width="8.8" height="232"><title>2024-08: 491 installs per day</title></rect>
<rect class="hit" x="566.0" y="56" width="8.8" height="232"><title>2024-09: 529 installs per day</title></rect>
<rect class="hit" x="574.8" y="56" width="8.8" height="232"><title>2024-10: 533 installs per day</title></rect>
<rect class="hit" x="583.5" y="56" width="8.8" height="232"><title>2024-11: 660 installs per day</title></rect>
<rect class="hit" x="592.3" y="56" width="8.8" height="232"><title>2024-12: 432 installs per day</title></rect>
<rect class="hit" x="601.1" y="56" width="8.8" height="232"><title>2025-01: 666 installs per day</title></rect>
<rect class="hit" x="609.9" y="56" width="8.8" height="232"><title>2025-02: 694 installs per day</title></rect>
<rect class="hit" x="618.7" y="56" width="8.8" height="232"><title>2025-03: 649 installs per day</title></rect>
<rect class="hit" x="627.5" y="56" width="8.8" height="232"><title>2025-04: 652 installs per day</title></rect>
<rect class="hit" x="636.2" y="56" width="8.8" height="232"><title>2025-05: 793 installs per day</title></rect>
<rect class="hit" x="645.0" y="56" width="8.8" height="232"><title>2025-06: 743 installs per day</title></rect>
<rect class="hit" x="653.8" y="56" width="8.8" height="232"><title>2025-07: 572 installs per day</title></rect>
<rect class="hit" x="662.6" y="56" width="8.8" height="232"><title>2025-08: 511 installs per day</title></rect>
<rect class="hit" x="671.4" y="56" width="8.8" height="232"><title>2025-09: 580 installs per day</title></rect>
<rect class="hit" x="680.2" y="56" width="8.8" height="232"><title>2025-10: 465 installs per day</title></rect>
<rect class="hit" x="689.0" y="56" width="8.8" height="232"><title>2025-11: 496 installs per day</title></rect>
<rect class="hit" x="697.8" y="56" width="8.8" height="232"><title>2025-12: 482 installs per day</title></rect>
<rect class="hit" x="706.5" y="56" width="8.8" height="232"><title>2026-01: 490 installs per day</title></rect>
<rect class="hit" x="715.3" y="56" width="8.8" height="232"><title>2026-02: 490 installs per day</title></rect>
<rect class="hit" x="724.1" y="56" width="8.8" height="232"><title>2026-03: 467 installs per day</title></rect>
<rect class="hit" x="732.9" y="56" width="8.8" height="232"><title>2026-04: 575 installs per day</title></rect>
<rect class="hit" x="741.7" y="56" width="8.8" height="232"><title>2026-05: 560 installs per day</title></rect>
<rect class="hit" x="750.5" y="56" width="8.8" height="232"><title>2026-06: 467 installs per day</title></rect>
<rect class="hit" x="759.2" y="56" width="8.8" height="232"><title>2026-07: 544 installs per day</title></rect>
<rect class="hit" x="768.0" y="56" width="8.8" height="232"><title>2026-08: 852 installs per day</title></rect>
<rect class="hit" x="776.8" y="56" width="8.8" height="232"><title>2026-09: 852 installs per day</title></rect>
<rect class="hit" x="785.6" y="56" width="8.8" height="232"><title>2026-10: 924 installs per day</title></rect>
<circle class="dot" cx="790.0" cy="73.6" r="4.5"/><text class="lbl" x="800.0" y="77.6">924</text></svg>

<p class="caption" style="font-size:13px;color:var(--vp-c-text-3)">Daily installs across every Leaf package, averaged by month, from the first Packagist release to this month. Each line marks a major version.</p>

## The big change

Throughout our journey, I'd say our biggest changes were v3 and v5. PHP frameworks traditionally fell into one of 2 categories:

- **Batteries-included frameworks**, meaning they give everything you'd need (or not need) to build your app, from authentication, queues, database stuff and more. In modern frameworks, all of those are initialized for you, meaning they're there whether you need them or not
- **Microframeworks**, which only give a router and probably an HTTP abstraction and error handling. Every other thing you'd add in your app is either a third-party install or a self-written feature

We took both of those concepts and combined them to make Leaf 3, introducing modules and making Leaf faster and lighter than ever, and that's why v3 was a major turning point for us.

But while this v3 a big change, we took an even bigger bet for v5.

Most devs couldn't yet wrap their heads around the fact that AI is here to stay, but we decided to double down on AI. We knew that at some point, we'd have more AI writing code than real humans and decided to rebuild the framework from the ground up with that in mind.

- A new route parser
- a new error handling system which AI could plug into and fix production bugs in near real-time
- Built-in AI rules
- Shared Leaf app context
- AI docs & manuals
- and a whole lot more AI-first tooling.

Of course, the human element from v4 still exists in its full glory, but the new AI infra has unlocked a whole new world of possibilities for building with Leaf, and we're seeing all the love from builders around the world.


## From "AI slop" to the way things get built

But before all the love, there was a shit ton of hate. Leaf 5 was labelled as "AI slop" and we were literally laughed at for even suggesting the idea of a framework made for agents.

But just 2 months in, the whole narrative flipped. Most of the people we talk to now expect their next project to be written mostly by an agent, and they want a framework that makes that go well instead of pretending it is not happening.

The install graph shows the same shift. Since Leaf 5 shipped in August, installs have pretty much doubled compared to the months before. While Leaf 5 and all its tools have been blooming, Leaf MVC 5, has held steady at roughly 21 a day through the same period. Put the two together and the share of Leaf installs that are MVC projects has gone from about one in two at the start of 2025 to about one in three today.

<svg class="lc pie" viewBox="0 0 860 300" width="100%" role="img" aria-label="Share of Leaf installs that are Leaf MVC projects: 52% in January 2025, 34% in October 2026">
<text class="mono" x="40" y="30">// SHARE OF LEAF INSTALLS THAT ARE MVC PROJECTS</text>
<circle class="ring" cx="250" cy="150" r="78"/><circle class="slice" cx="250" cy="150" r="78" stroke-dasharray="254.8 235.2" transform="rotate(-90 250 150)"><title>January 2025: 52% of Leaf installs are MVC projects</title></circle><text class="big" x="250" y="160" text-anchor="middle">52%</text><text class="mono" x="250" y="258" text-anchor="middle">// JANUARY 2025</text>
<text class="arrow" x="430" y="158" text-anchor="middle">→</text>
<circle class="ring" cx="610" cy="150" r="78"/><circle class="slice" cx="610" cy="150" r="78" stroke-dasharray="166.6 323.5" transform="rotate(-90 610 150)"><title>October 2026: 34% of Leaf installs are MVC projects</title></circle><text class="big" x="610" y="160" text-anchor="middle">34%</text><text class="mono" x="610" y="258" text-anchor="middle">// OCTOBER 2026</text>
<rect class="key" x="40" y="284" width="10" height="10"/><text class="ax" x="56" y="293">Leaf MVC</text><rect class="keyrest" x="140" y="284" width="10" height="10"/><text class="ax" x="156" y="293">Plain Leaf</text>
</svg>

This might seem strange, but we think we know why. Leaf MVC exists for humans: it gives you folders and conventions, plus a whole bunch of scaffolds and tools that make a project easier to hold in your head when you are the one typing. That is still valuable, and it is still what we recommend when a team is building something by hand.

However, fewer and fewer humans are starting a project from scratch themselves. The agent does, and an agent does not need the structure the same way a person does; it needs clear rules, small readable files, modules it can plug in instead of rewrite, and a memory of what was decided.

Leaf 5 was built around exactly that, with `.leaf/CONTEXT.md`, agent-readable docs and an error screen that hands the fix to your assistant, and those things work the same whether the project is MVC or plain Leaf. So MVC or not, agents are having a good time with Leaf, and the numbers say the plain version is where most of them start.

## What we learned

It's been just a few months since Leaf 5, but Leaf itself is by no means new. We've had 5 different iterations, gone through so many eras of PHP and code in general. Here are some of our favourite lessons:

- Small packages were the right bet. Splitting Leaf into modules felt like extra work in 2021, and it still means more releases to manage, but it is the reason a Leaf app stays small and the reason the install graph keeps climbing even for packages that are three years old.

- The big jumps came from rewrites, never from marketing. 2021, 2025 and 2026 each show a step up in the graph, and each one lines up with a major version rather than a campaign. People install Leaf when it gets better at the thing they need.

- The community carried it between the jumps. Leaf has never had a company behind it or a marketing budget. Besides this, it has never had more than a couple of people working on it at any one time. Every plateau in the graph is a period where the community kept using it, kept reporting bugs, and kept telling friends while we built the next version.

## Thank you

This one is for everyone who ran `composer require leafs/*` at some point in our journey. The early adopters in Accra and all over the world who used v1 in production when it had no business being there. The contributors who sent fixes for modules I had not looked at in months. The people who wrote tutorials, answered questions on Discord, and moved their teams onto Leaf. And lately, the AI agents filing bug reports at 2am, which we did not see coming in 2019.

Building Leaf from a tiny country in Africa, and seeing its reach on pretty much every continent is one of the biggest honours ever, and it's all thanks to you.

![countries](/leaf-map.png)

There's still a ton more stuff coming. Leaf 5 is still rolling more features out across modules, a desktop app in private testing, and the next 740,000 installs should take a lot less than seven years.

Thank you for being here for the first batch.

Love - Michael & the team 🍁
