<template>
  <article>
    <h1>{{title}}</h1>
    <section>
      GitHub Actions are used to automatically run a pipeline on a repository. Uses cases can be to run tests on your code, build your application and/or deploy your application.
    </section>
    <h2>Set Up a Workflow</h2>
    <section>
      In your repository, click the Actions tab in the middle.
      <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--soDtXerg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/1aipjfyajo1fhuj3gyl5.PNG" alt="GitHub Actions tab">
      Then click <i>Set up a workflow yourself</i> in the top right corner.
    </section>
    <h2>Yaml</h2>
    <section>
      <p>
        This has created a .yml file for you which will contain all your triggers and steps.
      </p>
      <p>
        First let's change it to trigger on a push, but only on the master branch.
      </p>
      <pre class="code block">
        on:
        &nbsp;&nbsp;push:
        &nbsp;&nbsp;&nbsp;&nbsp;branches:
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- master
      </pre>
      <p>
        Now let's create a step to build our code.
      </p>
      <pre class="code block">
        - name: Build
        &nbsp;&nbsp;run: |
        &nbsp;&nbsp;&nbsp;&nbsp;npm install
        &nbsp;&nbsp;&nbsp;&nbsp;npm run build
      </pre>
    </section>
    <h2>Firebase deploy</h2>
    <section>
      Now we will set up continuous deployment to Firebase. 
      To deploy to Firebase on our behalf, we need to get our Firebase token through the cli in your terminal. 
      <pre class="cmd">firebase login:ci</pre>
      Now copy your token. Open a new tab for your GitHub repository and go to <i>Settings</i>, then <i>Secrets</i>. 
      Add your secret and name it FIREBASE_TOKEN.
      <p>
        Now back to your .yml file, add a deploy step. First install the firebase-tools (if your job run's on linux, remember to add sudo). Then deploy with the token.
      </p>
      <pre class="code block" v-pre>
        - name: Firebase Deploy
        &nbsp;&nbsp;run: |
        &nbsp;&nbsp;&nbsp;&nbsp;sudo npm install -g firebase-tools
        &nbsp;&nbsp;&nbsp;&nbsp;firebase deploy --token ${{ secrets.FIREBASE_TOKEN }}
      </pre>
    </section>
    <h2>Finishing up</h2>
    <section>
      Click <i>Start commit</i> in the top right corner and commit your .yml file.
      Go to the <i>Actions</i> tab and see your pipeline running.
      <p>The complete .yml file:</p>
      <pre class="code block" v-pre>
        name: CI/CD

        on:
        &nbsp;&nbsp;push:
        &nbsp;&nbsp;&nbsp;&nbsp;branches:
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- master

        jobs:
        &nbsp;&nbsp;build:

        &nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest

        &nbsp;&nbsp;&nbsp;&nbsp;steps:
        &nbsp;&nbsp;&nbsp;&nbsp;- uses: actions/checkout@v1
        &nbsp;&nbsp;&nbsp;&nbsp;- name: Build
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run: |
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;npm install
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;npm run build
        &nbsp;&nbsp;&nbsp;&nbsp;- name: Firebase Deploy
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run: |
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sudo npm install -g firebase-tools
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;firebase deploy --token ${{ secrets.FIREBASE_TOKEN }}
      </pre>
    </section>
    <Share :url="'https://gaute.app' + $route.path" :text="title"/>
  </article>
</template>

<script>
import Share from '@/components/Share.vue'

export default {
  name: 'GitHubActionsFirebaseCICD',
  data () {
    return {
      title: 'Getting started with GitHub Actions - CI/CD Firebase deploy'
    }
  },
  components: {
    Share,
  }
}
</script>
