import { apiKey,authDomain,projectId,storageBucket, messagingSenderId, appId, measurementId} from './firebaseConfig.js'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

const jokeButton = document.getElementById("joke-button");
const jokeText = document.getElementById("joke-text");
const loader = document.querySelector(".spinner-border");
const GeneralText = document.getElementById("GeneralText");

// Retrieve a reference to the 'jokes' node in the Firebase Realtime Database
const jokesRef = ref(database, "jokes");

async function getJoke() {
  loader.style.display = "inline-block"; // show the loader when the joke button is clicked
  jokeText.style.display = "none";

  // Attach a listener to the 'jokes' reference
  onValue(jokesRef, (snapshot) => {
    const jokes = snapshot.val();
    const jokeArray = Object.values(jokes); // convert the object of jokes to an array
    const randomIndex = Math.floor(Math.random() * jokeArray.length); // generate a random index
    const randomJoke = jokeArray[randomIndex]; // select a random joke from the array
    manipulateText(randomJoke);
  });
}

async function manipulateText(data) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  loader.style.display = "none"; // hide the loader once the joke has been generated
  jokeText.style.display = "inline-block";
  jokeText.innerHTML = `<h1>${data.setup}</h1> <br> ${data.punchline}`;
}

jokeButton.addEventListener("click", getJoke);
