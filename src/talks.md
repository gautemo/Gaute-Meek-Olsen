<main class="vp-doc">
  
  # Talks

Presentations, workshops, and lightning talks I have given and are ready to give again.

  <ul>
    <Talk
      title="Why I choose Vue.js"
      image="/talks/why-i-choose-vue.png"
      type="⚡"
      :presented="['20 February 2020 - Tech Talks, Online NTNU']"
      slides="https://drive.google.com/file/d/1IB5YSZkTzr9dCn984xoAIohJoyOel4Ba/view?usp=sharing"
      color="#42b883"
      :tech="['Vue', 'React']"
    >
      <template #description>
        <p>
          There exists a lot of great web development frameworks. These are my main reasons for choosing Vue over the most popular one, React.
        </p>
      </template>
    </Talk>
    <Talk
      title="What is Firebase and it's relation to Google Cloud"
      shortTitle="What is Firebase"
      image="/talks/firebase.png"
      type="👨‍🏫"
      :presented="['2 November 2019 - conference Rubiks, Sopra Steria']"
      slides="https://drive.google.com/file/d/18aKeAta5iO61tLYJfV3PU3ZVQfaQCtlf/view?usp=sharing"
      color="#f4820e"
      :tech="['Firebase', 'Web', 'Android', 'iOS']"
    >
      <template #description>
          <p>
            The definition of Firebase is "Firebase is Google’s mobile application development platform that helps you build, improve, and grow your app."
            But what does this mean? Firebase is multiple products and services hosted in the cloud and does that we don't have to write backend code.
            We will take a look at how Firebase offers database, authentication, analytics, file storage, push notifications, machine learning and a lot more directly on iOS, Android and web applications.
          </p>
          <p>
            Every Firebase project is also a Google Cloud Platform project. I'll explain the relation and how they overlap.
          </p>
        </template>
    </Talk>
    <Talk
      title="Intro to TypeScript"
      image="/talks/typescript.png"
      type="👨‍🏫"
      :presented="['November 2018 - meetup Sopra Steria']"
      slides="https://docs.google.com/presentation/d/1EiGefgjqQEt0YNrIsLEe9F2g6LC5iTNQ4j5UOgXvFsk/edit?usp=sharing"
      github="https://github.com/gautemo/TypeScript-Intro"
      color="#178fcf"
      :tech="['TypeScript']"
    >
      <template #description>
          <p>
            JavaScript can be time consuming when the project get large, because of readability and error detection. This is where TypeScript can help. TypeScript is JavaScript that scales, which provides you with types and new features. At the end your TypeScript file will be compiled into a JavaScript file you can use as normal.
          </p>
        </template>
    </Talk>
    <Talk
      title="Updating Your CSS Skills"
      image="/talks/css-up.png"
      type="👨‍🏫"
      :presented="['2019 - tech lunch, Sopra Steria']"
      color="#ef1684"
      :tech="['CSS']"
    >
      <template #description>
          <p>
            CSS are adding new modules from time to time. This talk will give you insight and show you how to use three of the new ones. I will demonstrate CSS variables, Flex and Grid.
          </p>
        </template>
    </Talk>
  </ul>
</main>

<script setup>
import Talk from './components/Talk.vue'
</script>

<style scoped>
  p:not(:first-child) {
    margin-top: 0.5rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
    gap: 1rem;
    list-style: none;
    padding: 0;
  }

  main{
    margin: 1rem;
  }
</style>
