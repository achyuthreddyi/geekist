import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyBV1VITP57YwY0qHFN9V9Vr_DPOJu4U4qg',
  authDomain: 'geekist-f64a4.firebaseapp.com',
  projectId: 'geekist-f64a4',
  storageBucket: 'geekist-f64a4.appspot.com',
  messagingSenderId: '529558792874',
  appId: '1:529558792874:web:818670137170941a3bfed3',
  measurementId: 'G-44F1GTXK2V'
})

export { firebaseConfig as firebase }
