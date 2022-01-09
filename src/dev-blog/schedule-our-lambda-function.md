---
title: Schedule our Lambda function
date: 2020-06-09
coverImgExtension: png
tags: [AWS]
serie: Twitter bot with Kotlin in AWS
---

This article is part of the **Twitter bot with Kotlin in AWS series** showing how [I created a Twitter bot for Vue 3 updates](/dev-blog/twitter-bot-vue-3-updates.html). But this article works as an independent article on how to run a Lambda function on a scheduled time period.

Now we want our Lambda function to run every 5 minutes. We will use the AWS CLI to set it up.

First, let's create a scheduled event where you specify when it should trigger based on a cron expression or a rate expression. More information about the syntax [here](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html).

```bash
aws events put-rule --schedule-expression "rate(5 minutes)" --name FiveMinRule
```

Copy the RuleArn from the output.

Now we will add permission for the CloudWatch event to trigger the function.

```bash
aws lambda add-permission --function-name twitter-bot-vue-3 --action lambda:InvokeFunction --principal events.amazonaws.com --source-arn <rule-arn-from-above> --statement-id my-scheduled-event
```

At last, we will use put-targets to add the Lambda function to the rule. First we need to run `aws lambda list-functions` and copy the FunctionArn for the function.

```bash
aws events put-targets --rule FiveMinRule --targets "Id"="1","Arn"="<function-arn>"
```

That's it, you can now see that the Lambda function has a trigger attached to it in the AWS console.
