<template>
  <article>
      <h1>{{title}}</h1>
      <section>
        I recomend using the Google Play Games Services leaderboard in your Android game. It's fast to get up, it gives you the UI and stores the scores for you.
        You should set a limit score to avoid cheaters, but you can't set it to low. Because you don't know how good your players will be before you launch.
        After a while you see some players have an unnatural score you want to delete. Let me show you how.
        <div class="center-container">
          <img class="small" src="https://66.media.tumblr.com/fdb8a761e5306e460314e731bf270fea/tumblr_plkov6LVHO1xfbgtko5_1280.png"/>
          <figcaption>Players we want to remove</figcaption>
        </div>
      </section>
      <section>
        <h2>Google Play Console</h2>
        <ol>
          <li>Go to your <a href="https://play.google.com/apps/publish/" target="blank" rel="noopener">Google play console</a>.</li>
          <li>Go to <b>Game services</b> in the left menu.</li>
          <li>Open your game.</li>
          <li>Copy the <b>applicationId</b> for later.</li>
          <img src="https://66.media.tumblr.com/907043a63463afc5dde33b925ed5f4d8/tumblr_plkov6LVHO1xfbgtko2_1280.png"/>
          <li>Click <b>Leaderboard</b> in the left menu. Then copy the <b>leaderboardId</b> for later.</li>
          <img src="https://66.media.tumblr.com/42352d75a8dc8d9008a7c83751b1a2ac/tumblr_plkov6LVHO1xfbgtko4_1280.png"/>
          <li>Go to <b>Linked apps</b> in the left menu.</li>
          <li>Click <b>Link another app</b> and choose <b>web</b>.</li>
          <li>Give it a rememberable name such as «App to remove player score».</li>
          <li>Launch url doesn’t matter, you can enter: https://developers.google.com/oauthplayground/</li>
          <li>Save and continue.</li>
          <li>Authorize your app.</li>
          <li>Confirm.</li>
          <li>Open the APIs console by clicking the <b>here in the APIs Console</b> link.</li>
        </ol>
      </section>
      <section>
        <h2>APIs Console</h2>
        <ol>
          <li>Go to the tab you opened in the previous step or use this <a href="https://console.developers.google.com/apis/credentials" target="_blank" rel="noopener">link</a>.</li>
          <li>Click on the web application name you created in Google Play Console step 8.</li>
          <li>Copy the <b>Client ID</b> and <b>Client Secret</b> for later. If you don’t see it you can find it in the <b>DOWNLOAD JSON</b> file.</li>
          <li>Remove the link in the Authorized redirect URIs and add <b>https://developers.google.com/oauthplayground</b>. <i>N.B. dont end the url with a slash</i>. Then save.</li>
          <img src="https://66.media.tumblr.com/82a186c5d2736bdc2c4d6f341e35353e/tumblr_plkpl3KTxy1xfbgtko1_1280.png" />
        </ol>
      </section>
      <section>
        <h2>OAuth 2.0 Playground</h2>
        <ol>
          <li>Open the <a href="https://developers.google.com/oauthplayground/" target="_blank" rel="noopener">Google Developers OAuth 2.0 Playground</a>.</li>
          <li>Click the settings wheel.</li>
          <li>Check <b>Use your own OAuth credentials</b> checkbox.</li>
          <li>Enter the <b>Client ID</b> and <b>Client Secret</b> from APIs Console step 3.</li>
          <img src="https://66.media.tumblr.com/d34c067656316c7ea408bfe00a454a6d/tumblr_plkov6LVHO1xfbgtko1_500.png"/>
          <li>On the left side, expand <b>Google Play Game Services Management API v1management</b> and click <b>https://www.googleapis.com/auth/games</b></li>
          <li>Click <b>Authorize APIs</b>.</li>
          <li>Sign in with your account.</li>
          <li>Click <b>Exchange authorization code for tokens</b>.</li>
          <li>Enter the <a href="https://developers.google.com/games/services/web/api/scores/list" target="_blank" rel="noopener">GET request </a> <b>https://www.googleapis.com/games/v1/leaderboards/<mark>leaderboardId</mark>/scores/PUBLIC?maxResults=10&timeSpan=all_time</b> and change the leaderboardId with the id you got from Google Play Console step 5.</li>
          <li>Click <b>Send the request</b>.</li>
          <li>Search for the playerId in the response. You will find it under items. Copy the playerId for the players you want to hide from the leaderboard.</li>
          <li>Change HTTP Method to <b>POST</b>.</li>
          <li>Enter the <a href="https://developers.google.com/games/services/management/api/players/hide" target="_blank" rel="noopener">POST request </a> <b>https://www.googleapis.com/games/v1management/applications/<mark>applicationId</mark>/players/hidden/<mark>playerId</mark></b> and change the playerId from step 11 and applicationId from Google Play Console step 4.</li>
          <li>Click <b>Send the request</b>.</li>
        </ol>
      </section>
      <section>
        <h2>Summary</h2>
        <div class="center-container">
          <img class="small" src="https://66.media.tumblr.com/1382352f0f20610670889b4f72082c90/tumblr_plkov6LVHO1xfbgtko6_1280.png"/>
          <figcaption>Leaderboard as it should be. The unnatural scores are gone.</figcaption>
        </div>
        There you go, the player will be gone from your leaderboard!
        If you want, you can clean up by deleting your web app from the Google Play Console and the APIs Console.
        If you regret your hiding, you can <a href="https://developers.google.com/games/services/management/api/players/unhide" target="_blank" rel="noopener">unhide them</a>.
      </section>
  </article>
</template>

<script>
export default {
  name: 'GooglePlayGamesApi',
  data () {
    return {
      title: 'Removing Player from Your Google Play Games Services Leaderboard'
    }
  }
}
</script>
