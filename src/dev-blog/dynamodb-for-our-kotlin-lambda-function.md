---
title: DynamoDB for our Kotlin Lambda function
date: 2020-06-10
coverImgExtension: png
tags: [AWS, Kotlin]
serie: Twitter bot with Kotlin in AWS
---

This article is part of the **Twitter bot with Kotlin in AWS series** showing how [I created a Twitter bot for Vue 3 updates](/dev-blog/twitter-bot-vue-3-updates.html). But this article works as an independent article on how to create a DynamoDB table and interact with it from Kotlin code.

If you haven't set up a Lambda function in Kotlin before, you can look [here](/dev-blog/creating-an-aws-lambda-kotlin-function.html). Also remember to give your role running the code permission to access DynamoDB.

Now it's time to set up our DynamoDB table, add some items, and write code to read and update them.

## Table setup

First, let's create our table through the AWS CLI. We are specifying our required partition key with the --attribute-definitions and --key-schema, saying that the attribute "Project" is a string and HASH for the partition key.

```bash
aws dynamodb create-table --table-name twitter-bot-vue-3 --attribute-definitions AttributeName=Project,AttributeType=S -
-key-schema AttributeName=Project,KeyType=HASH --billing-mode PAY_PER_REQUEST
```

For my use case, I want an item for each changelog file I'm looking up. They will be defined beforehand, so you can add them through the AWS console, AWS CLI or code if you want. This is how to add an item with the CLI. (for Linux based systems, you can change to single quotes ' on the start and end and skip the escaping of quotes).

```bash
aws dynamodb put-item --table-name twitter-bot-vue-3 --item "{\"Project\": {\"S\": \"Vue 3\"}, \"Changelog\": {\"S\": \"
https://github.com/vuejs/vue-next/blob/master/CHANGELOG.md\"}, \"LastRecordedChange\": {\"S\": \"\"}}"
```

## Dependencies

Now go to the `build.gradle.kts` file and add these two dependencies (add them to the existing dependencies in your file). You can find the latest version [here](https://sdk.amazonaws.com/java/api/latest/).

```kts
dependencies {
    implementation(platform("software.amazon.awssdk:bom:2.13.18"))
    implementation("software.amazon.awssdk:dynamodb")
}
```

## Read and update items

I have the file `ProjectsDB.kt` which has two methods that interact with the DynamoDB table.

```kotlin
import software.amazon.awssdk.services.dynamodb.DynamoDbClient
import software.amazon.awssdk.services.dynamodb.model.*

data class Project(val name: String, val changelog: String, var lastRecordedChangelog: String)

const val tableName = "twitter-bot-vue-3"

fun readProjects(): List<Project>{
    val client = DynamoDbClient.create()

    val result = client.scan {
        it.tableName(tableName)
    }
    return result.items().map {
        Project(it["Project"]!!.s(), it["Changelog"]!!.s(), it["LastRecordedChange"]!!.s())
    }
}

fun updateProjectLastRecordedChange(project: Project){
    val client = DynamoDbClient.create()

    val key = mutableMapOf(Pair("Project", createAttributeValueString(project.name)))
    val updates = mutableMapOf(Pair("LastRecordedChange", AttributeValueUpdate
        .builder()
        .value(createAttributeValueString(project.lastRecordedChangelog))
        .action(AttributeAction.PUT)
        .build()
    ))

    client.updateItem {
        it.tableName(tableName)
        it.key(key)
        it.attributeUpdates(updates)
    }
}

fun createAttributeValueString(value: String): AttributeValue = AttributeValue.builder().s(value).build()
```

## Updating the Lambda function

First, we need a function that checks the latest update to the changelog files in the Vue repositories.

```kotlin
import java.net.URL

fun checkChangelog(url: String): String{
    val rawGithubUrl = url.replace("https://github.com/", "https://raw.githubusercontent.com/").replace("blob/", "")
    val text = URL(rawGithubUrl).readText()
    return text.lines().first()
}
```

Now let's update the Lambda function with some logic.

```kotlin
fun runLambda(){
    val projects = readProjects()
    for(project in projects){
        val latestChange = checkChangelog(project.changelog)
        if(latestChange != project.lastRecordedChangelog){
            project.lastRecordedChangelog = latestChange
            // tweet(project)
            updateProjectLastRecordedChange(project)
        }
    }
}
```

That's it. If you want a temporary tweet function that prints the tweet message you can use this.

```kotlin
fun tweet(project: Project){
    val regex = """\[.+]""".toRegex()
    val version = regex.find(project.lastRecordedChangelog)?.value?.trim('[', ']')
    val message = "${project.name}, ${if(version.isNullOrEmpty()) "new version" else version} is out! (${project.changelog}) #VueJS"
    println(message)
}
```
