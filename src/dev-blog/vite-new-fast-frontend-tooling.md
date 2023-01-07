---
title: Vite⚡ new lightning-fast frontend tooling
date: 2021-09-23
tags: [Vite]
description: Vite is saving us from slow frontend tooling. Vite is taking care of the dev server, hot module replacement, and building the code. And it's really fast.
---

I'm starting to get tired of slow frontend tooling, so today I want to tell you about Vite. Which is responsible for the dev server, Hot Module Replacement (HMR), and building the code - fast as lightning!

The process of developing a website has gotten slower over the years. Over time we have started using several useful features, such as compiling the code to older syntax to support older browsers or files that are written in e.g. `.ts`, `.jsx`, and `.scss`. Multiple third-party libraries from NPM and the code base are bundled into a single JavaScript file with the help of e.g. webpack. Everything takes time, and it takes more time the bigger the code base is. It's frustrating to wait for the changes to be reflected in the browser. This is what Vite solves and gives us an awesome developer experience. Life is too short to wait for slow tooling.

To provide some numbers I have taken the [RealWorld](https://codebase.show/projects/realworld) example app and implemented a React solution with CRA (which uses webpack) and one with Vite. Note that these timings are only from my machine, but they give a clear indication.

| Template         | Init project + npm install | Start | Change | Build |
| ---------------- | -------------------------- | ----- | ------ | ----- |
| Create react app | 4min 18s                   | 25s   | 2s     | 42s   |
| Vite             | 28s                        | 2s    | 0s     | 14s   |

## Getting started

Open your terminal and type

```sh
npm create vite
```

Then you can choose between templates: VanillaJS, Vue, React, Preact, Lit, or Svelte - with or without TypeScript. This will set up the project for you.

Note that you have the `index.html` file in the root of the folder as an entry for your application. This can be different from what you are used to with other toolings where it is usually in the public folder, and `App.js` is the entry point which during the build is magically moved into your HTML file.

In the `package.json` file, you have the `npm run dev` command which starts the dev server in a few milliseconds. If you make a change to a file and save it, it will be reflected directly in the browser. This is a huge improvement that makes the developer experience awesome.

## How it works

Today most tools build your entire code base into a file that can be served. This has to be done with every change, some of it is cached but that can only help to a certain point.

![Bundle based dev server](/images/dev-blog/vite-new-fast-frontend-tooling/bundler.png)

Vite on the other hand uses native ES modules and lets the browser do the work of retrieving the files when they are used. The dev server starts instantly and doesn't do any work until the browser opens the website. Every file that is used will result in a network request, files that are not imported don't have to be processed. Maybe you are thinking that a waterfall of network requests is slow, but in reality, it's almost insignificant since it's reading directly from your locale disk and requests are done in parallel.

![Native ESM based dev server](/images/dev-blog/vite-new-fast-frontend-tooling/esm.png)

Vite also uses [esbuild](https://esbuild.github.io/) which is an extremely quick bundler written in Go. It will take care of bundling dependencies and compile every file on-the-fly if it's needed. If you have e.g. a TypeScript file that is imported, then esbuild will compile it to JavaScript first when a request is retrieving the file.

<figure>
  <ImgWithZoom src="/images/dev-blog/vite-new-fast-frontend-tooling/esbuild.PNG" alt="esbuild bundle time comparison"/>
  <figcaption>Comparisson of esbuild and other bundlers' time to bundle three.js ten times.</figcaption>
</figure>

When the application is built for production, Vite uses the more traditional approach and bundles the code with Rollup. This is mainly because a waterfall of network requests over the internet isn't as fast.

## Conclusion

Even though this is a relatively new and improved developer experience in frontend, it is not certain Vite will be the leading one over time. For example, you have [Snowpack](https://www.snowpack.dev/) which also is a new tool doing mostly the same. Existing tools will probably also take measures to improve their performance.

If your application doesn't have any special needs where webpack is demanded, I will recommend that you try out Vite. To get a quicker developer experience and most of the features and functionality are supported.

Maybe you aren't that bothered by the small time losses you have every day, but when you are used to a quicker everyday life I can promise you won't go back.
