<template>
  <article>
      <h1>{{title}}</h1>
      <section>
        Let me introduce you to the easiest database in the world. It’s called Firestore and it lives in the cloud. It’s really easy to get started as all coding is done on the front end, but it also scales really well as it is a product by Firebase from Google.
      </section>
      <img src="https://66.media.tumblr.com/9a998ff243d9022782ac03594f88a5bf/tumblr_pidz17wiDQ1xfbgtko1_1280.png" />
      <h2>Set up</h2>
      <section>
        Feel free to follow along with the coding as I will show you how it works. If you get stuck on where to put the code, the full source code is provided at the bottom.
      </section>
      <section>
        First, go to the <a href="https://console.firebase.google.com/" target="_blank">Firebase console</a> and spend the 3 clicks to create a project. Then inside the project, click Database in the navigation menu and Create database button (test mode is good for now). We will deal with securing our database later. Actually, that is all the setup needed, you now have a working NoSQL database.
      </section>
      <section>
        I will walk you through how to read, write, update and delete to your database from the web. But you can see their <a href="https://firebase.google.com/docs/firestore/quickstart" target="_blank">documentation</a> for IOS, Android, Java, Python, Node.js, Go, PHP, C#, and Ruby. (That’s their support as I’m writing this, I won’t be shocked if they add more language and platform support later)
      </section>
      <section>
        Create an HTML file to get started.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-1.html'" />
      </section>
      <section>
        Then we need to add Firebase to our web application. The simplest way is to go to the project overview in the Firebase console, click the web symbol above the text <i>“Add an app to get started”</i>, then just copy the code and paste it into your HTML file.
      </section>
      <section>
        We are now ready to create a reference to our database.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-2.js'" />
      </section>
      <section>
        Firestore saves our data in collections which contains documents. Collections can also have sub-collections. Let’s say we have the collections families and cities. Let's create references for our collections.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-3.js'" />
      </section>
      <h2>Adding data</h2>
      <section>
        We are going to use the <i>add</i> method to add families and <i>set</i> method to add cities.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-4.js'" />
      </section>
      <section>
        The differences are that <i>set</i> uses the city as the ID, while <i>add</i> autogenerates an ID. Also if you use the <i>set</i> method and a document with the same ID already exists, it will be overwritten unless you add the { merge: true } option. Notice that <i>then</i> and <i>catch</i> are not required.
      </section>
      <section>
        Now we need some HTML.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-5.html'" />
        And some event listeners for our buttons.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-6.js'" />
      </section>
      <section>
        That is all you need to save data to your database, no need to create tables or schemas beforehand. If the collection doesn’t exist they will be created. You can see and administrate your data through the Firebase console (big bonus).
      </section>
      <h2>Getting data</h2>
      <h3>Get a single object</h3>
      <section>
        This is how we retrieve the population of a single city from Firestore. data() returns our object.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-7.js'" />
        Let’s add HTML.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-8.html'" />
        And JavaScript to use our populationCity method.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-9.js'" />
      </section>
      <h3>Getting multiple objects</h3>
      <section>
        If we want more objects from a collection we can use the get method on our cities reference. But we also have the option to filter, order, and limit our query. Let’s get the 3 biggest cities with over 1 million in population.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-10.js'" />
        Time for some HTML
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-11.html'" />
        and JavaScript to use our function.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-12.js'" />
      </section>
      <h3>Getting real-time updates</h3>
      <section>
        To get real-time updates to either a single document or a collection we will use the <i>onSnapshot</i> method. Let’s get all the cities.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-13.js'" />
        We use the <i>docChanges</i> method to know what change happened. If a document was added, modified or removed. Now let’s show the cities.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-14.html'" />
        JavaScript with the three methods to populate our div.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-15.js'" />
        You can use the <i>addCity</i> method for an already existing city to trigger an update. We haven’t covered deletion yet, but you can do it from the developer console if you want to test it.
      </section>
      <h2>Updating data</h2>
      <section>
        Updating data is simple, just get the document you would like to change. Then call the <i>update</i> method with only the data you would like to change.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-16.js'" />
        We would like the option to add 100 to a city population.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-17.js'" />
        This should be added inside the <i>cityAdded</i> function we created earlier.
      </section>
      <h2>Transactions</h2>
      <section>
        What if the city administrators had opened the application and clicked the increase button the exact same time? In that case, we need to use a transaction to avoid a race condition.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-18.js'" />
        Then update our cityAdded function.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-19.js'" />
        If you spam click the button before it disappears you will see that the transaction is working.
      </section>
      <section>
        Remember that in a transaction you need to do the read (<i>data()</i>) before the write (<i>update</i>). Also if your transaction contains multiple writes and one fails, all writes will be rolled back.
      </section>
      <h2>Deleting data</h2>
      <section>
        Deleting data is simple.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-20.js'" />
        Adding a button inside our cityAdded function to call deleteCity.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-21.js'" />
      </section>
      <h2>Sub-collections</h2>
      <section>
        If you need nested data, you could just have a list of objects inside your document. But then you need to retrieve the whole list every time you query your document. A better way which provides more flexibility is to use sub-collections.
      </section>
      <section>
        Let's add a demo functions, so you get the idea.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-22.js'" />
        We have used a batched write to add all family members, to do the writing in one commit call. Then we need a button to trigger the function.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'firestore-23.html'" />
        Visit your Firebase console to see how your data is added and structured.
      </section>
      <h2>Conclusion</h2>
      <section>
        I have now covered most of the Firestore functionality. I hope you see how easy it is. No need to set up a server which needs to connect to a database and provide an API. And we get a lot of functionality such as offline support, real-time updates, and an administration user interface.
      </section>
      <section>
        But what about security? If all this happens from the client, then our data cannot be safe. Security should always be done in the backend. This is where Firestore rules and Firebase authentication plays its part. Follow my next article to see how you can secure your database and customize who and which actions are allowed.
      </section>
      <h3>All code</h3>
      <Gist :id="'64ec43734e05d8839b18b1643de21ffc'"/>
      <Share :url="'https://gaute.app' + $route.path" :text="title"/>
  </article>
</template>

<script>
import Gist from '@/components/Gist.vue'
import Share from '@/components/Share.vue'

export default {
  name: 'IntroFirestore',
  data () {
    return {
      title: 'Intro to the easiest DB ever, Firestore'
    }
  },
  components: {
    Gist,
    Share
  }
}
</script>
