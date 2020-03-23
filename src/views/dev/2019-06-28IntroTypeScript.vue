<template>
  <article>
    <h1>{{title}}</h1>
    <section>This is how I would have liked to be introduced to TypeScript; short and simple. So if you already know JavaScript, this article is for you.</section>
    <img
      src="https://66.media.tumblr.com/32e6864d3184fcb13ba1a14e576caecc/tumblr_pinzimXE8w1xfbgtko1_1280.png"
    >
    <h2>What is TypeScript</h2>
    <section>If you have developed a lot of JavaScript you probably have experienced how it can be a little cumbersome to use. In large codebases you will have to spend a lot of time reading code, to understand what it does and how your new code interacts with existing code. Also, errors do not occur until you actually run the code.</section>
    <section>
      Therefore TypeScript was created, with the slogan “JavaScript that scales”. TypeScript code will be compiled to JavaScript and then used just like you are used to. TypeScript has the benefits of:
      <ul>
        <li>Instant type error detection</li>
        <li>More self-documenting code</li>
        <li>Better IDE experience</li>
        <li>Improves readability and easiness of understanding the code</li>
      </ul>TypeScript is actually just JavaScript with types. So if you change the file-ending from .js to .ts, it should still be valid code (the type any will be used a lot). So don’t be scared of TypeScript, just start coding ordinary JavaScript and declare types where you feel it’s natural.
    </section>
    <section>Another benefit which I like best. In JavaScript, there is a feature gap, new features in ES6 to ES9 are still not available in every browser or in a Node server. But in TypeScript, you can write the code with the newest features, such as classes and arrow functions and you can target for example ES3 and the code will be compiled into JavaScript with prototype and ordinary functions. (This is not completely true; if you use features such as Set and includes(), you will need to target a newer JavaScript version)</section>
    <h2>Set Up</h2>
    <section>Download and open an IDE. I recommend Visual Studio Code, but TypeScript is supported in other as well, such as Sublime and Atom.</section>
    <section>
      Install typescript on your computer through npm. Download Node, if you don’t have npm installed. In a terminal run this command.
      <span
        class="cmd"
      >npm install -g typescript</span>
      You can now compile .ts files manually with
      <span class="cmd">tsc filename.ts</span>
      and you have created the .js file you want to use.
    </section>
    <section>
      But the best way is to create a project folder and run the init command, like this
      <span
        class="cmd"
      >tsc --init</span>
      to set up your config file. Take a look at it and you will get a feel of what it does. This is where you can change the ECMAScript target version and where the compiled JavaScript files are placed.
    </section>
    <section>Now create your files with the file ending .ts</section>
    <section>
      To automatically compile these files on save:
      <span class="cmd">tsc -w</span>
      If you use code bundlers such as webpack, the setup can be a little different.
    </section>
    <h2>Code</h2>
    <section>
      Type annotations in TypeScript are ways to record the intended contract of the function or variable. This is done by : followed by the type.
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="typescript1.ts"/>If you would assign a number to the variable text, that would give an error, because only strings are valid types for text.
    </section>
    <section>
      Let’s walk through all the types available.
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="typescript2.ts"/>Note that in TypeScript types are inferred when assigning variables. This is because specifying the type every time is tedious. Therefore the variable thing is of type string.
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="typescript3.ts"/>But what if we want a variable that can be both number and string? We could give it the type any, but a better approach is to specify multiple types.
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="typescript4.ts"/>Since variables are inferred and we don’t usually specify types when declaring variables. So when do we specify types? It is very useful for parameters and return types.
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="typescript5.ts"/>This way your future self and co-workers always know which types the function requires and what it will return.
    </section>
    <section>
      Now TypeScript is making our greet method require two parameters every time. In JavaScript we could have passed zero or an infinite number of parameters. So TypeScript has the optional parameters, which can be used in methods, classes, and interfaces. If the parameter is left out, the variable will be undefined.
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="typescript6.ts"/>
    </section>
    <h2>Conclusion</h2>
    <section>That’s the basic you need to know and maybe all you need to know for your projects.</section>
  </article>
</template>

<script>
import Gist from '@/components/Gist.vue'

export default {
  name: 'IntroTypeScript',
  data () {
    return {
      title: 'Intro to TypeScript'
    }
  },
  components: {
    Gist
  }
}
</script>

<style scoped>
li {
  font-weight: bold;
}
</style>
