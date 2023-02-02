---
title: Maven lifecycle
date: 2022-03-08
category: maven
description: Understanding the Maven lifecycle of validate, compile, test, package, verify, install and deploy.
---

Maven has some default build lifecycle phases, the most important ones are shown here.

1. `validate` - validate the project is correct and all necessary information is available
2. `compile` - compile the source code of the project
3. `test` - test the compiled source code using a suitable unit testing framework. These tests should not require the code to be packaged or deployed
4. `package` - take the compiled code and package it in its distributable format, such as a JAR.
5. `verify` - run any checks on results of integration tests to ensure quality criteria are met
6. `install` - install the package into the local repository, for use as a dependency in other projects locally
7. `deploy` - done in the build environment, copies the final package to the remote repository for sharing with other developers and projects.

Running any of these will run each command earlier in the lifecycle. Meaning:

`mvn test`: `validate` -> `compile` -> `test`  
`mvn install`: `validate` -> `compile` -> `test` -> `package` -> `verify` -> `install`

Full list of default lifecycle is shown at [https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#default-lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#default-lifecycle)
