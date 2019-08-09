<template>
  <article>
      <h1>{{title}}</h1>
      <section>
        Firestore is a game changer in databases! It’s never been this easy to save and query data without any hassle of setting up a server and database yourself. Everything is done client-side. But…
      </section>
      <section>
        There is a security rule; never trust your client. Security should be handled by the server. But how is this done with Firestore?
      </section>
      <img src="https://66.media.tumblr.com/437164da521400873a3a93230655ee7b/tumblr_pir1ppqovW1xfbgtko1_1280.png" />
      <section>
        <i>If you’re not familiar with Firestore, check my <a href="/dev-blog/intro-firestore" target="_blank" rel="noopener">past developer blog.</a></i>
      </section>
      <section>
        Introducing Firestore security rules. Which looks like this.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'sec-firestore-1.rules'" />
        The <i>some_path</i> could match a single document using the document id. But often you would use the brackets {} for the document path, which matches any document in the collection.
      </section>
      <h2>Publish rules</h2>
      <section>
        They can be written and published in the rules tab in the Cloud Firestore section of the Firebase console or in a file in your project folder.
      </section>
      <h3>Deploy rules from your project folder</h3>
      <section>
        Make sure you have installed the Firebase CLI and are logged in.
        <span class="cmd">npm install -g firebase-tools</span>
        <span class="cmd">firebase login</span>
        Inside your project folder.
        <span class="cmd">firebase init firestore</span>
        Which creates a .rules file you can edit your rules in. Then deploy them with this command.
        <span class="cmd">firebase deploy</span>
        or only deploy rules, if your using more firebase functionallity
        <span class="cmd">firebase deploy --only firestore:rules</span>
      </section>
      <h2>Read-only</h2>
      <section>
        If you only need your user to read data, you can put your entire database in read-only mode. Notice that these rules don’t apply to the admin sdk, so you could for example still write to the database using Cloud Functions for Firebase.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'sec-firestore-2.rules'" />
        We don’t need to specify false for write, because rules are secure by default.
      </section>
      <h2>Validating data</h2>
      <section>
        Let’s say users can’t post messages with a length longer than 160 characters and users can only read public messages.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'sec-firestore-3.rules'" />
        <i>request.resource.data</i> is used to require incoming data. While <i>resource.data</i> is the requested document fields.
      </section>
      <section>
        One thing to keep in mind is that security rules are either accepted or denied. You can’t filter messages by adding the security rule for public messages. If a message could be private the entire read is denied. This logic only works with a where filter client side.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'sec-firestore-4.js'" />
        If you only had this logic client side, someone could alter your query from the developer tools and get the private messages.
      </section>
      <h2>Authenticated users</h2>
      <section>
        Firestore security rules integrate perfectly with Firebase Authentication. Which is trustworthy. Because when you sign in, Firebase will use a server-to-server call to the original identity provider which verifies the user is who they say they are. Then they pass an ID token in form of a JWT back to the client. Which is used in future requests that Firebase will recognize and know this is who they verified through the server-to-server authentication. In short words, Firebase Authentication is safe and trustworthy, and we can use this securely in our Firestore security rules.
      </section>
      <section>
        Now let’s use this to only allow authenticated users to read and authenticated users who are also verified can write to our database.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'sec-firestore-5.rules'" />
        Notice how we also can use functions to simplify writing our rules.
      </section>
      <h2>Role-based access</h2>
      <section>
        Let’s say we have a user collection. Each user has a role field, defining if they are an administrator, editor, or visitor.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'sec-firestore-6.rules'" />
        Notice how we can break down <i>read</i> into <i>get</i>(single document) and <i>list</i>(queries and collection). <i>write</i> can be broken into <i>create, update, delete</i>.
      </section>
      <section>
        All queries done inside the rules will count towards our quota. Also, rules don’t have variables, so we can’t keep the result of <i>getUserData</i>. This is why we pass it down into our other functions.
      </section>
      <h3>Custom user claims</h3>
      <section>
        There is another way of handling roles, which doesn’t query our user collection. We can use custom user claims. Which simplify our rules and doesn’t eat of our quota.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'sec-firestore-7.rules'" />
        Custom claims are set by the admin sdk, for example in a Cloud Functions for Firebase like this.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'sec-firestore-8.js'" />
      </section>
      <h2>Validate authenticated profile data</h2>
      <section>
        Let’s deal with another scenario. We have a message collection and a user collection. Since Firestore is a NoSQL database, we can’t join different collections. And we would like to avoid doubling our queries to get the user who posted the message. Therefore we have a <i>name</i> and <i>profileimg</i> field in the message documents.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'sec-firestore-9.js'" />
        Security issue, users can alter the method and change the <i>name</i> and <i>profileimg</i> field and pretend to be someone else. This rule will prevent this.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'sec-firestore-10.rules'" />
      </section>
      <h3>The Cloud Functions for Firebase way</h3>
      <section>
        You have another option when you want to prevent evil users to alter authenticated profile data. You can close all write to the messages collection.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'sec-firestore-11.rules'" />
        Then use Cloud Functions for Firebase and retrieve the profile data there. Then use the admin sdk to add the message to the collection, which will bypass the security rules. Cloud Functions for Firebase is a great way to validate and secure data when the security rules become to complex.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'sec-firestore-12.js'" />
        Then trigger the function client side (web example).
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'sec-firestore-13.js'" />
        Doing this, you might not feel the messages are as snappy with the first message. This is because Firebase lowers the functions resources if they are not frequently triggered, and you experience a cold start. This will likely improve in production when they are frequently triggered.
      </section>
      <h2>Conclusion</h2>
      <section>
        Even though logic is performed client side, the Firestore database can be completely secured. This has only been an introduction to how Firestore security rules work with example rules for some use cases. In the end, your application will decide how your rules end up.
      </section>
      <Share :url="'https://gaute.app' + $route.path" :text="title"/>
  </article>
</template>

<script>
import Gist from '@/components/Gist.vue'
import Share from '@/components/Share.vue'

export default {
  name: 'FirestoreSecurity',
  data () {
    return {
      title: 'Firestore and Security'
    }
  },
  components: {
    Gist,
    Share
  }
}
</script>
