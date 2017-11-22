import Rebase from "re-base";
import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD2kgIh3ONNhC5CJdBs5MBjFcl7tsEszbo",
  authDomain: "le-site-du-hibou.firebaseapp.com",
  databaseURL: "https://le-site-du-hibou.firebaseio.com",
  projectId: "le-site-du-hibou",
  storageBucket: "le-site-du-hibou.appspot.com",
  messagingSenderId: "505789907701"
});

const base = Rebase.createClass(app.database());

export default base;

// const base = Rebase.createClass({
//   apiKey: "AIzaSyD2kgIh3ONNhC5CJdBs5MBjFcl7tsEszbo",
//   authDomain: "le-site-du-hibou.firebaseapp.com",
//   databaseURL: "https://le-site-du-hibou.firebaseio.com",
//   projectId: "le-site-du-hibou",
//   storageBucket: "le-site-du-hibou.appspot.com",
//   messagingSenderId: "505789907701"
// });

// export default base;
