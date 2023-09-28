---
title: Getting Started with GitHub Actions - CI/CD Firebase deploy
date: 2019-12-08
updated: 2023-09-28
coverImgExtension: png
tags: [GitHub, Firebase]
description: How you can automate the deployment of your Firebase changes with GitHub Actions.
---

GitHub Actions are used to automatically run a pipeline on a repository. Uses cases can be to run tests on your code, build your application, and/or deploy your application.

First, you need the Firebase CLI installed, which you can do with `npm install -g firebase-tools`.

If you don't have set up Firebase hosting for your project yet, you can run:

```sh
firebase init hosting
```

If you already have set up a Firebase project with hosting you can run:

```sh
firebase init hosting:github
```

Follow the CLI prompts.

## Set Up a Workflow

The CLI prompts should have added the secrets to your GitHub repository and might have set up some workflow files for you. You can alter those, or create a file `.github/workflows/deploy.yml`. Add this to your file, and make changes according to your project.

```yaml
name: Deploy
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_PLANT_POINTS }}'
          channelId: live
```

This tells the file to run when a commit is pushed to the branch `main`. Then it runs the steps to checkout the code `uses: actions/checkout`, install dependencies `npm ci`, build your application with a script in package.json `npm run build`, and uses `FirebaseExtended/action-hosting-deploy` to deploy the web app.

Make sure that `firebase.json` and `.firebasearc` are present in your codebase for this action to work. You can add the property `entryPoint` to point toward the folder they are located.

You can read more about the configuration for the Firebase action [here](https://github.com/FirebaseExtended/action-hosting-deploy).
