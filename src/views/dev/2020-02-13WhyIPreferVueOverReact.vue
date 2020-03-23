<template>
  <article>
      <h1>{{title}}</h1>
      <img src="https://66.media.tumblr.com/6b2bce8e582baa37e83ed4f2ab8719b6/20f1e5748949b716-89/s1280x1920/fc25b69fad24bc2eaa3455984eaa99c79bfdb5df.png" alt="cover image">
      <section>
        There exists a lot of great web development frameworks out there. I believe that every framework can be used to create the website you want. What you should choose only comes down to individual preference. Remember, there also is a possibility to use no framework as well.
      </section>
      <section>
        Myself, I usually choose <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue</a>. Here are my top reasons to choose Vue over the most used <s>framework</s> library <a href="https://reactjs.org/" target="_blank" rel="noopener">React</a>.
        (Just to have it said, I have reasons to choose React over Vue as well, but I don't value them as much as the points below)
      </section>
      <h2>Without using a building tool</h2>
      <section>
          With both Vue and React you don't necessarily need a building step to create your website. It can be done with just vanilla JavaScript, HTML and CSS. Let's create a button that count's the number of times it has been clicked.
          <img class="small center-line" src="https://66.media.tumblr.com/952e125ba9d7a88d4ed4400c5e635d7d/d14731b849ac0482-15/s400x600/d410f04b0a315337d86f52c236e8fa0d464d31bc.gifv" alt="Incremental button">
      </section>
      <h3>React</h3>
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="react-nobuild.html"/>
      <h3>Vue</h3>
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="vue-nobuild.html"/>
      <section>
        <table style="width:100%">
            <tr>
                <th></th>
                <th>Size</th>
                <th>Characters of Code</th>
                <th>Drawbacks</th>
            </tr>
            <tr>
                <td>React</td>
                <td>40.7 KB</td>
                <td>740</td>
                <td>
                <ul>
                    <li>No JSX support, which is React's main way to code</li>
                    <li>Code will start to get messy with many elements</li>
                    <li>Two script imports</li>
                </ul>
                </td>
            </tr>
            <tr>
                <td>Vue</td>
                <td>32.6 KB</td>
                <td>389</td>
                <td>
                <ul>
                    <li>Sub components need to use template strings for the HTML</li>
                    <li>Code will start to get messy with many components</li>
                </ul>
                </td>
            </tr>
        </table>
        I prefer Vue in this scenario because it is pretty easy to add reactivity to a website and the code is pretty much the same as "ordinary" Vue in a project with a build step.
      </section>
      <h2>CLI</h2>
      <section>
          React has the <a href="https://create-react-app.dev/" target="_blank" rel="noopener">Create React App</a> to set up your project. But when you want to add features, such as router, Sass, linter and more, you have to do it manually afterward.
      </section>
      <section>
          Vue provides you with a <a href="https://cli.vuejs.org/" target="_blank" rel="noopener">CLI</a> where you can pick what features you like when you are creating a project. Which makes the process of creating a project smooth and easy.
          <img class="small center-line" src="https://66.media.tumblr.com/aa6c2a9a365290dcf6b3a5e3b8db7d5f/d14731b849ac0482-5f/s400x600/9b0b3ca0ceaf683df988e6bbd135ac7a4c19f758.png" alt="Vue CLI, selecting features">
      </section>
      <h2>Template</h2>
      <section>
          A big difference between the frameworks is how the HTML is created. React uses JSX to allow you to combine JavaScript and HTML in the same render function. For me, this feels like it can quickly turn into spaghetti code.
      </section>
      <section>
          In Vue you write your HTML in a template tag, allowing you to write normal HTML with directives to add functionality. (JSX is also an option in Vue, but not very used.) Look at my next reasons to see examples of the difference.
      </section>
      <h2>Bind Input Values</h2>
      <img class="small center-line" src="https://66.media.tumblr.com/de96d189da8e307372d0742d6ad7ca39/d14731b849ac0482-b0/s400x600/690bcc1ec5fe13b4e6da3e9f10d55a1b8feffa9b.gifv" alt="input tag with binded value to state">
      <h3>React</h3>
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="react-bind.jsx"/>
      <h3>Vue</h3>
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="vue-bind.vue"/>
      <h2>Conditionally Render</h2>
      <img class="small center-line" src="https://66.media.tumblr.com/1f929e24b7baf057e0d8557595b13af6/d14731b849ac0482-1c/s400x600/8f9c316ec5387ff1c19c4e1c209816e0cff1ee78.gifv" alt="Conditional render of element based on state">
      <h3>React</h3>
      <section>Option 1: Ternary operation. Which isn't always as readable.</section>
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="react-if1.jsx"/>
      <section>Option 2: Logical Short Circuit Evaluation. Feels a little like magic and you need to know how logical expressions are being evaluated.</section>
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="react-if2.jsx"/>
      <section>Option 3: if-else function. Best for understandability, but HTML code needs to be moved away from the rest of the HTML.</section>
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="react-if3.jsx"/>
      <h3>Vue</h3>
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="vue-if.vue"/>
      <h2>List an Array</h2>
      <img class="small center-line" src="https://66.media.tumblr.com/4f22ed08db2c6701e9362899c0f2cd93/d14731b849ac0482-e3/s250x400/aa68bd5ff2d7cc8450775cc8cf366194c6043b25.png" alt="listing elements based on state">
      <h3>React</h3>
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="react-list.jsx"/>
      <h3>Vue</h3>
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="vue-list.vue"/>
      <h2>className vs class</h2>
      <h3>React</h3>
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="react-class.html"/>
      <h3>Vue</h3>
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="vue-class.html"/>
      <section>I don't like to be pushed away from normal HTML.</section>
      <h2>Alter state directly</h2>
      <h3>React</h3>
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="react-state.js"/>
      <h3>Vue</h3>
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="vue-state.js"/>
      <section>This is a clear win for Vue, as I don't like the idea that I need to rewrite my whole object or value by using the previous state.</section>
      <h3>Examples above project stats</h3>
      <section>
        <table style="width:100%">
            <tr>
                <th></th>
                <th>Production Build Size</th>
                <th>Project Size</th>
                <th>Characters of Code</th>
            </tr>
            <tr>
                <td>React</td>
                <td>460 KB</td>
                <td>146 MB</td>
                <td>2345</td>
            </tr>
            <tr>
                <td>Vue</td>
                <td>443 KB</td>
                <td>67.2 MB</td>
                <td>1797</td>
            </tr>
        </table>
      </section>
      <h2>Conclusion</h2>
      <section>
          For me, Vue had a much quicker learning curve, as it took me some time to understand React, while Vue I got from the first second (maybe because of the similarity to AngularJS directives). It feels closer to ordinary HTML and JavaScript. I don't need to use JSX, where I often feel like the JavaScript clutters the HTML code. Vue also has single file components, where all component code (HTML, JavaScript, and CSS) are in the same file if wanted. Vue has scoped CSS for components, which also is super nice!
      </section>
      <section>
          Example code can be found at <a href="https://github.com/gautemo/frontend-framework-compare" target="_blank" rel="noopener">GitHub</a>.
      </section>
      <section>
          This is just my friendly opinions. If you like something else, that's okay :)
      </section>
  </article>
</template>

<script>
export default {
  name: 'WhyIPreferVueOverReact',
  data () {
    return {
      title: 'Why I prefer Vue over React'
    }
  },
  components: {
    Gist: () => import('@/components/Gist.vue')
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid #c9c9c9;
}

th{
    background: #f9f9fa;
}

td{
    text-align: center;
    min-width: 80px;
}

td li{
    text-align: start;
}
</style>