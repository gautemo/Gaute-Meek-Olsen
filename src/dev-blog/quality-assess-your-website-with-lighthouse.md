---
title: Quality assess your website with Lighthouse
description: How you can use Lighthouse to assess your website. A guide on how you can do it with no developer skills or automate it with developer skills.
date: 2020-11-06
---

The best way to measure the quality of your website is by knowing how the users use it and think about it. But often we cannot get that insight, you might not know who the users are or have the capacity to find out.

Here we can utilize tools to help us. One tool that we can use, which the article will cover, is Lighthouse. If you already know Lighthouse and are not bothering reading, just a heads up. We will cover how to utilize it for a **non-technologist**, **during development**, and **automate it in the CI pipeline**.

## What is Lighthouse?

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) is an automated tool by Google for assessing and improving the quality of web pages. It has audits for multiple categories with specific details for each.

**Performance**: Audits for metrics like first paint and time to interactive to determine lag.
**Best Practices**: Looks for everything from HTTPS usage to correct image aspect ratios.
**Search Engine Optimization (SEO)**: Checks for best practices to ensure your site is discoverable.
**Accessibility**: Checks for common issues that may prevent users from accessing your content.
**Progressive Web App (PWA)**: These checks validate the aspects of a [Progressive Web App](https://web.dev/pwa-checklist/).

![Example of Lighthouse results](/images/dev-blog/quality-assess-your-website-with-lighthouse/score.png)

Above is an example of how the results can look. After you have scanned your website it will provide you with a quality score from 0 to 100 for the categories Performance, Accessibility, Best Practices, and SEO. It also gives details for PWA.

You can even dig into the report further and find the results for each audit, such as "Time to interactive" and "Background and foreground colors have sufficient contrast ratio" to mention a few. Each audit has an explanation of why the audit is important and how to fix it.

_Note that there exist other tools out there that might be better at assessing categories such as accessibility and performance. But Lighthouse is a great tool covering multiple areas, is free, and has good quality._

## For the Non-technologist

If you own a website, are a project manager, or have any other reasons to validate the quality, you can do that really simple. Just visit [web.dev/measure](https://web.dev/measure/), enter your URL, and press RUN AUDIT. There you get the full report on the quality and maybe you can periodically check the report and tell your team what to focus on improving.

## For the Developer

You can also run Lighthouse in Chrome DevTools. So make sure you have installed the Chrome browser, open a website, and hit F12. Navigate to the tab Lighthouse in the top navigation bar. There you can select which categories to audit and which device to simulate on. Then pressing the Generate report button will generate a report for you. This is an easy way to quality assess your website, even during development.

![Lighthouse in Chrome DevTools](/images/dev-blog/quality-assess-your-website-with-lighthouse/generate.png)

## For the Machine

You can even run Lighthouse from the command line. This means we can Automate our Lighthouse runs via shell scripts. It can be installed through NPM with `npm install -g @lhci/cli` and run with `lhci autorun`. I will show you how to implement this on every pull request on GitHub, giving the team full control over the quality of code being added to the repository.

_If you don't use GitHub, you can still follow along as doing the same for other platforms are most likely almost the same._

First, let's create our workflow file in our repository. Create `.github/workflows/lighthouse.yml`. The file name can be what you want, but the `.github` and `workflows` folders should have those names. Your .yml file should look like this.

```yaml
name: CI
on: pull_request

jobs:
  lighthouse-ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: npm install & build
        run: |
          npm install
          npm run build
      - name: run Lighthouse CI
        run: |
          sudo npm i -g @lhci/cli
          lhci autorun
```

This says that on pull requests it will run our lighthouse-ci job with those steps. The steps will install and build our application, then run Lighthouse on the build. If you don't have a build step, you can omit the "npm install & build step". This will run Lighthouse with default settings. It will look for a folder named `dist`, `build`, `out`, or `public` for HTML files to scan.

We can also add a configuration file to control the Lighthouse run. In the root folder create `lighthouserc.js`. For a detailed specification of all the settings, check out the [documentation](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md). But here is an example of my final configuration.

```js
module.exports = {
  ci: {
    collect: {
      staticDistDir: 'dist',
      isSinglePageApplication: true,
      url: ['', 'about', '404'],
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'unsized-images': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
```

The `collect` option is for which pages to audit. If you have multiple .html files in the folder, you might only need the `staticDistDir` set. But if you have a Single Page Application (SPA) with multiple routes, you can add the `staticDistDir`, `isSinglePageApplication: true`, and `url` with an array of routes to assess.

`assert` allows you to control what it asserts. For `preset` you can set `lighthouse:all`, `lighthouse:recommended`, or `lighthouse:no-pwa`. Where all is very aggressive and can't have any failures. Recommended evaluates the assertions on what they recommend, which is a more realistic assessment. No PWA option is the same as recommended, except it doesn't assess the PWA category. You can also be more specific in `assertions`. Since recommended only gives error when the score is below 50, I'm using `"categories:performance": ["error", { "minScore": 0.9 }]` to give an error if it's below 90 to be more strict. You can also turn off specific rules, e.g. `"unsized-images": "off"`.

Now if you want to keep the report, you can use `upload` with `target` to upload the report to a server. If you don't want to save them yourself, you can use the `temporary-public-storage` option provided by Lighthouse. This will upload the report on a temporary page you can get access to for free.

In the end, if you don't want to click into the workflow console in the pull request, you can use the Lighthouse CI GitHub app to set statuses. Here is an example of how Lighthouse has set a status for each URL in the pull request.

![Pull request status](/images/dev-blog/quality-assess-your-website-with-lighthouse/action.png)

First, install the GitHub app [Lighthouse CI](https://github.com/apps/lighthouse-ci) and give access to the repositories you want. Then copy the token and store it under Settings > Secrets in your GitHub repository with the name `LHCI_GITHUB_APP_TOKEN`. Now you only need to update the workflow `lighthouse.yml` file with

```yaml
# below - uses: actions/checkout@v2
with:
  ref: ${{ github.event.pull_request.head.sha }}
# below lhci autorun
env:
  LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

The complete file will be something like this.

```yaml
name: CI
on: pull_request

jobs:
  lighthouse-ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          ref: ${{ github.event.pull_request.head.sha }}
      - name: npm install & build
        run: |
          npm install
          npm run build
      - name: run Lighthouse CI
        run: |
          sudo npm i -g @lhci/cli
          lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

Check out my [GitHub repository](https://github.com/gautemo/lighthouse-example) for a demonstration with a [pull request](https://github.com/gautemo/lighthouse-example/pull/9) containing Lighthouse checks.

## Conclusion

Lighthouse provides reports that help us create better websites. It's easy to use without any knowledge by passing in any URL in [web.dev/measure](https://web.dev/measure/), during development with Chrome DevTools, and even automate it into your pipeline to continually keep the quality on top.
