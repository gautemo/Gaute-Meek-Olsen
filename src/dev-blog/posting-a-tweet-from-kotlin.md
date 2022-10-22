---
title: Posting a tweet from Kotlin
date: 2020-06-16
tags: [Kotlin]
series: Twitter bot with Kotlin in AWS
---

This article is part of the **Twitter bot with Kotlin in AWS series** showing how [I created a Twitter bot for Vue 3 updates](/dev-blog/twitter-bot-vue-3-updates.html). But this article works as an independent article on how to use the Twitter API from Kotlin code.

## Twitter Developer Console

First, we need to head over to the [Twitter developer console](https://developer.twitter.com/apps). If you haven't applied for access you need to do that before creating an app. Now create an app and provide a name, description, and website URL(could be the GitHub repository URL). Leave the rest blank.

<ImgWithZoom src="./assets/posting-a-tweet-from-kotlin.png" alt="Twitter developer console"/>

Go to the Keys and tokens tab and generate an Access token and access token secret. You will need the API key, API secret key, Access token, and Access token secret for later. These will be used to perform a tweet from the Twitter account that owns the Twitter developer app. If you want to tweet from another account's behalf, you can get tokens from the [3-legged OAuth flow](https://developer.twitter.com/en/docs/basics/authentication/oauth-1-0a/obtaining-user-access-tokens), but I won't cover that here.

## Kotlin Project

You can send a tweet from an HTTP request, but the difficulties lie in the authorization of the requests. Therefore we are using a library [Twitter4J](https://github.com/Twitter4J/Twitter4J) to do the heavy lifting for us. Other libraries can be found [here](https://developer.twitter.com/docs/developer-utilities/twitter-libraries).

In your `build.gradle.kts` file, add this line to your dependencies.

```kotlin
implementation("org.twitter4j", "twitter4j-core", "4.0.7")
```

Now add these functions to `Tweet.kt`

```kotlin
import twitter4j.TwitterFactory
import twitter4j.conf.ConfigurationBuilder

fun consumerKey() = "<API key>"
fun consumerSecret() = "<API secret key>"
fun accessToken() = "<Access token>"
fun accessTokenSecret() = "<Access token secret>"

fun sendTweet(message: String){
    val cb = ConfigurationBuilder()
    cb.setOAuthConsumerKey(consumerKey())
    cb.setOAuthConsumerSecret(consumerSecret())
    cb.setOAuthAccessToken(accessToken())
    cb.setOAuthAccessTokenSecret(accessTokenSecret())
    val twitter = TwitterFactory(cb.build()).instance
    twitter.updateStatus(message)
}
```
