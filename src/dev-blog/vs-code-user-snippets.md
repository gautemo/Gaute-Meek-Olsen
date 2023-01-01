---
title: Create your own snippets in VS Code
date: 2020-05-15
coverImgExtension: png
description: How to create some handy VS code snippets which help you autocomplete code.
---

Often you find yourself typing repetitive code or code you don't always remember by heart. With Visual Studio Code you can easily create your own code snippets so you can use them at any time. Like this:

![media query snippet](/images/dev-blog/vs-code-user-snippets/1.gif)

Start by opening the Command Palette `Ctrl + Shift + P` and enter `Preferences: Configure User Snippets`. It will then ask you which files it should be used for, which can be CSS for example.

In the .json file, you can add as many snippets as you like in the object. This is a snippet I find useful, to write media queries.

```json
{
  "Mobile CSS": {
    "prefix": "media",
    "body": ["@media only screen and (max-width: 600px) {", "  ", "}"],
    "description": "media query for mobile screen"
  }
}
```

The first property is just what you name your snippet. The prefix is what you type in the editor to get the snippet suggested, body contains an array of lines of code and a description of the snippet.

That's it. Go write code rapidly and easily.

![Fast typer GIF](/images/dev-blog/vs-code-user-snippets/2.gif)
