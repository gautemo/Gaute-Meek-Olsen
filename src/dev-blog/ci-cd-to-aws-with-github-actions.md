---
title: CI/CD to AWS with GitHub Actions
date: 2020-06-21
tags: [AWS, Kotlin, GitHub]
coverImgExtension: png
series: Twitter bot with Kotlin in AWS
---

This article is part of the **Twitter bot with Kotlin in AWS series** showing how [I created a Twitter bot for Vue 3 updates](/dev-blog/twitter-bot-vue-3-updates.html). But this article works as an independent article on how to automatically deploy to AWS from your GitHub repository.

Now let's wrap it up by setting up continuous build and deployment of our Kotlin Lambda function to AWS. This will make sure the Lambda function is always up to date with the code in the master branch, no need to manually deploy your changes.

## AWS IAM User

First, we need an [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html). If you already have one, you can use the existing Access key ID and Secret access secret key. Or you can just click the "Create access key" button and generate new tokens.

## GitHub Actions

We need to add two secrets to the GitHub repository. Go to your repository, click the "Settings" tab, and then "Secrets" in the side menu. Add the secrets AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY from the IAM user.

Luckily the GitHub Actions run on machines with a lot of [software pre-installed](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1804-README.md), which includes the AWS CLI and Gradle.

Now head to "Actions" in the tab menu. Click "Set up this workflow" from any template. Add this yml code, that will set up Gradle, configure the AWS CLI, build the project, and update the function.

```yml
name: CI/CD

on:
  push:
    branches: [master]

jobs:
  CI-CD:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Gradle setup
        run: gradle wrapper
      - name: Build & Deploy
        run: |
          aws configure set aws_access_key_id ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws configure set aws_secret_access_key ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws configure set default.region eu-west-1
          ./gradlew build
          aws lambda update-function-code --function-name twitter-bot-vue-3 --zip-file fileb://build/libs/twitter-bot-vue-3.jar
```

## Wrap Up

That completes our series on how to create your own Twitter bot running in AWS. Check out the Twitter account [@vue_3](https://twitter.com/vue_3) for the completed product. Also, you can find all the code on [GitHub](https://github.com/gautemo/twitter-bot-vue-3).
