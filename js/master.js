// Questions asked.
var questionNumber = 0;

// Shuffle array.
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

//On button click.
document.getElementById("questionButton").onclick = updateQuestion();

//updateQuestion function.
function updateQuestion() {
  document.getElementById("question").innerHTML = getQuestion();
}

//getQuestion function.
function getQuestion() {
  
}
