const currentWord = document.getElementById('word');
const inputText = document.getElementById('text');
let score = document.getElementById('score');
let time = document.getElementById('time');
const difficulty = document.getElementById('difficulty');
let defaultTime = 20;
let defaultScore = 0;
const words = [
  'hallo',
  'was',
  'geht'
];
let wordIndex = 0;
let word = words[wordIndex];

score.innerHTML = defaultScore;
 


difficulty.addEventListener('change', () => {
  wordIndex = 0;
  word = words[wordIndex];
  currentWord.innerHTML = word;
  defaultTime = difficulty.value; 

  let myInterval = setInterval(function () {
 
    time.innerHTML = defaultTime + 's';

    inputText.innerHTML = word;
    defaultTime = defaultTime - 1;
  
    inputText.addEventListener('input', () => {
      word = words[wordIndex];
      currentWord.innerHTML = word;

      if (inputText.value == word && defaultTime >= 0) {
        wordIndex = wordIndex + 1;
        currentWord.innerHTML = words[wordIndex];
        defaultTime = defaultTime + 5;
        defaultScore = defaultScore + 1;
        score.innerHTML = defaultScore;

      }


      if (wordIndex == words.length || defaultTime == 0 ) {
        currentWord.innerHTML = 'done';
        clearInterval(myInterval);
      }
    })

  }, 1000);


});
