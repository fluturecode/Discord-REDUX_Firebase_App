import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBvwATpAR36ago4Bq3lLuvuPXGqjDUJFGo",
	authDomain: "discord-clone-38f12.firebaseapp.com",
	databaseURL: "https://discord-clone-38f12.firebaseio.com",
	projectId: "discord-clone-38f12",
	storageBucket: "discord-clone-38f12.appspot.com",
	messagingSenderId: "553894893394",
	appId: "1:553894893394:web:506ddfee7a363cfeb20c8b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
