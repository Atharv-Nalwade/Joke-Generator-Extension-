const jokeButton = document.getElementById('joke-button');
const jokeText = document.getElementById('joke-text');
const loader = document.querySelector('.spinner-border');
const GeneralText = document.getElementById('GeneralText');

async function manipulateText(data){
  console.log(data);
  jokeText.innerHTML = `<h1>${data.setup}</h1> <br> ${data.punchline}`;
  loader.style.display = 'none'; // hide the loader once the joke has been generated
}

jokeButton.addEventListener('click', () => {
  loader.style.display = 'inline-block'; // show the loader when the joke button is clicked
  GeneralText.style.display = 'none';

  if(jokeText.innerHTML != ''){
      jokeText.innerHTML = '';
  }
  
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      console.log("before");
      setTimeout(() => {
        manipulateText(data);
      }, 2000);
      console.log('After');
    });
});
