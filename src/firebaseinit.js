import * as firebase from 'firebase/app'
import 'firebase/performance'

const init = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBubeRJYOqm1TAkEI8Z_62F6aOWq-9xfnw',
    authDomain: 'gaute-meek-olsen.firebaseapp.com',
    databaseURL: 'https://gaute-meek-olsen.firebaseio.com',
    projectId: 'gaute-meek-olsen',
    storageBucket: 'gaute-meek-olsen.appspot.com',
    messagingSenderId: '1045254237387',
    appId: '1:1045254237387:web:e6741be087d0b378'
  }
  firebase.initializeApp(firebaseConfig)
  firebase.performance()
}

export default init
