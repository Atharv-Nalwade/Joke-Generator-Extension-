const jokeButton = document.getElementById('joke-button');
const jokeText = document.getElementById('joke-text');

jokeButton.addEventListener('click', () => {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      jokeText.innerHTML = `${data.setup} <br> ${data.punchline}`;
    });
});
