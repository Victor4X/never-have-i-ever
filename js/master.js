
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

shuffle(hyggeligFest);

//updateQuestion function.
function updateQuestion() {
  console.log("autist");
  if (!(questionNumber + 1 > hyggeligFest.length)) {
    document.getElementById("question").innerHTML = hyggeligFest[questionNumber];
    questionNumber++;
  } else {
    document.getElementById("question").innerHTML = "Ikke flere spørgsmål.......... SO!";
  }
}

//On button click.
$(function() {
  $("#questionButton").click( function() {
     updateQuestion();
    }
  );
});
