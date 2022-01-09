---
title: Getting started with GitHub Actions - CI/CD Firebase deploy
date: 2019-12-08
hideCoverImg: true
coverImgExtension: png
tags: [GitHub, Firebase]
---

GitHub Actions are used to automatically run a pipeline on a repository. Uses cases can be to run tests on your code, build your application and/or deploy your application.

## Set Up a Workflow

In your repository, click the Actions tab in the middle.
<ImgWithZoom src="./assets/cover-github-actions-firebase-cicd.png" alt="GitHub Actions tab"/>
Then click <i>Set up a workflow yourself</i> in the top right corner.

## Yaml

This has created a .yml file for you which will contain all your triggers and steps.

First let's change it to trigger on a push, but only on the master branch.

```yml
on:
  push:
    branches:
      - master
```

Now let's create a step to build our code.

```yml
- name: Build
      run: |
        npm install
        npm run build
```

## Firebase deploy

Now we will set up continuous deployment to Firebase. To deploy to Firebase on our behalf, we need to get our Firebase token through the cli in your terminal. Run `firebase login:ci`. Now copy your token. Open a new tab for your GitHub repository and go to <i>Settings</i>, then <i>Secrets</i>. Add your secret and name it FIREBASE_TOKEN.

Now back to your .yml file, add a deploy step. First install the firebase-tools (if your job run's on linux, remember to add sudo). Then deploy with the token.

```yml
- name: Firebase Deploy
      run: |
        sudo npm install -g firebase-tools
        firebase deploy --token ${{ secrets.FIREBASE_TOKEN }}
```

## Finishing up

Click <i>Start commit</i> in the top right corner and commit your .yml file.
Go to the <i>Actions</i> tab and see your pipeline running.

The complete .yml file:

```yml
name: CI/CD

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: Build
        run: |
          npm install
          npm run build
      - name: Firebase Deploy
        run: |
          sudo npm install -g firebase-tools
          firebase deploy --token ${{ secrets.FIREBASE_TOKEN }}
```
