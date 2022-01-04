---
title: Secrets in AWS and reading from Kotlin
date: 2020-06-21
tags: [AWS, Kotlin]
coverImgExtension: png
serie: Twitter bot with Kotlin in AWS
---

This article is part of the **Twitter bot with Kotlin in AWS series** showing how [I created a Twitter bot for Vue 3 updates](/dev-blog/twitter-bot-vue-3-updates.html). But this article works as an independent article on how to manage your secret values and tokens in AWS and read them from Kotlin code.

We are using the AWS Secrets Manager to keep our keys and tokens safe. Make sure your role running the code has access to the Secrets Manager.

## Adding secrets with AWS CLI

Run the create-secret command to create secret containing a JSON object with key/value's for all the secrets.

```bash
aws secretsmanager create-secret --name twitter-bot-vue-3/auth --description "Twitter app keys and tokens" --secret-string "{\"consumer-key\":\"API key\",\"consumer-secret\":\"API secret key\",\"access-token\":\"Access token\",\"access-token-secret\":\"Access token secret\"}"
```

## Reading from Kotlin

First, we need to add a JSON serializer and AWS Secrets Manager to `build.gradle.kts`.  
_plugins_:

```kts
kotlin("plugin.serialization") version "1.3.70"
```

_dependencies_:

```kts
implementation("software.amazon.awssdk:secretsmanager")
implementation("org.jetbrains.kotlinx:kotlinx-serialization-runtime:0.20.0")
```

Now create a Secrets.kt file where we create a class that will hold the secrets.

```kotlin
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonConfiguration
import kotlinx.serialization.json.content
import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.secretsmanager.SecretsManagerClient
import software.amazon.awssdk.services.secretsmanager.model.GetSecretValueRequest

const val secretName = "twitter-bot-vue-3/auth"

class Secrets {
    val consumerKey: String
    val consumerSecret: String
    val accessToken: String
    val accessTokenSecret: String

    init {
        val client = SecretsManagerClient.builder().region(Region.EU_WEST_1).build()
        val secrets = client.getSecretValue(GetSecretValueRequest.builder().secretId(secretName).build())
        val json = Json(JsonConfiguration.Default)
        val jsonObject = json.parseJson(secrets.secretString()).jsonObject
        consumerKey = jsonObject["consumer-key"]!!.content
        consumerSecret = jsonObject["consumer-secret"]!!.content
        accessToken = jsonObject["access-token"]!!.content
        accessTokenSecret = jsonObject["access-token-secret"]!!.content
    }
}
```

We can now use the Secrets class in our `Tweet.kt` file.

```kotlin
fun sendTweet(message: String){
    val secrets = Secrets()

    val cb = ConfigurationBuilder()
    cb.setOAuthConsumerKey(secrets.consumerKey)
    cb.setOAuthConsumerSecret(secrets.consumerSecret)
    cb.setOAuthAccessToken(secrets.accessToken)
    cb.setOAuthAccessTokenSecret(secrets.accessTokenSecret)
    val twitter = TwitterFactory(cb.build()).instance
    twitter.updateStatus(message)
}
```