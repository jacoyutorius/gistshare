import firebase from 'firebase'

if (!firebase.apps.length) {
  // alert("initializeApp")
  console.log(process.env.APIKEY)
  firebase.initializeApp(
    {
      apiKey: process.env.APIKEY,
      authDomain: process.env.AUTHDOMAIN,
      databaseURL: process.env.DATABASEURL,
      projectId: process.env.PROJECTID,
      storageBucket: process.env.STORAGEBUCKET,
      messagingSenderId: process.env.MESSAGINGSENDERID
    }
  )
}

export default firebase