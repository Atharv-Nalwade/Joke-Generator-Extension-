const jokeButton = document.getElementById('joke-button');
const jokeText = document.getElementById('joke-text');
const loader = document.querySelector('.spinner-border');

async function manipulateText(data){
  console.log(data);
  jokeText.innerHTML = `<h1>${data.setup}</h1> <br> ${data.punchline}`;
  // hide the loader once the joke has been generated
  loader.style.display = 'none';
}

jokeButton.addEventListener('click', () => {
  // show the loader when the joke button is clicked
  loader.style.display = 'inline-block';
  
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      console.log("before");
      setTimeout(() => {
        manipulateText(data);
      }, 5000);
      console.log('After');
    });
});
