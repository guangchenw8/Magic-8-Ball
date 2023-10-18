// JS for Magic 8 Ball

// eventListener
document.getElementById('magicball').addEventListener('click', askBall);

// Element References
let outputJs = document.getElementById('output');
let inputJs = document.getElementById('input');

// Ask Magic 8 Ball
function askBall() {
  // Get Random Number
  let randNum = Math.random();
  console.log(randNum);

  // Special Answers
  if (inputJs.value.toLowerCase() == 'are magic 8 balls real?') {
    outputJs.innerHTML = 'Concentrate and ask--I mean, Without a doubt!';
  } else if (inputJs.value.toLowerCase() == 'a question?') {
    outputJs.innerHTML = 'Very funny.';

    // Random Answers
  } else if (inputJs.value.length > 0) {
    if (randNum < 0.2) {
      outputJs.innerHTML = 'Without a Doubt.';
    } else if (randNum < 0.4) {
      outputJs.innerHTML = 'As I see it, yes.';
    } else if (randNum < 0.6) {
      outputJs.innerHTML = 'Concentrate and ask again.';
    } else if (randNum < 0.8) {
      outputJs.innerHTML = "Don't count on it.";
    } else {
      outputJs.innerHTML = 'Outlook not so good.';
    }
  } else {
    outputJs.innerHTML = 'Please ask a question...';
  }
}
