// Code block start. This code is by jolly.exe - https://stackoverflow.com/a/901144
  function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
// Code block end.

// Code block start. This code is by CoolAJ86 - https://stackoverflow.com/a/2450976
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
// Code block end.

// Execute when page has fully loaded.
window.onload = function() {

  // Get current game pack in use.
  var gamePackNumberInUse = getParameterByName('gamePack');

  // Check if gamePackNumberInUse variable is empty.
  if (gamePackNumberInUse) {
    // Check weather gamePackNumberInUse variable exists and valid.
    gamePackExists = false;
    for (var i = 0; i < gamePacks.length; i++) {
      if (gamePacks[i]["gamePackID"] == gamePackNumberInUse) {
        gamePackExists = true;
        break;
      } // if (gamePacks[i] == gamePackNumberInUse)
    } // for (var i = 0; i < gamePacks.length; i++)

    // If gamePackNumberInUse is valid.
    if (gamePackExists) {
      // Game pack holder variables.
      var gamePack = gamePacks[gamePackNumberInUse];
      var gamePackQuestions = gamePacks[gamePackNumberInUse]["questions"];
      // Variable to store what question in pack currently at.
      var questionNumber = 0;
      // Weather or not there are more questions in pack.
      var moreQuestionsLeft = true;
      //Shuffle question in pack.
      shuffle(gamePackQuestions);
      // Run everytime button with id "getQuestionButton" is clicked.
      document.getElementById("getQuestionButton").onclick = function () {
        if (moreQuestionsLeft) {
            document.getElementById("question").innerHTML = gamePackQuestions[questionNumber];
            questionNumber++;
            if (questionNumber >= gamePackQuestions.length) {
              moreQuestionsLeft = false;
            }
        } else {
          document.getElementById("question").innerHTML = "No more questions left in pack.";
        }
      };  // document.getElementById("getQuestionButton").onclick
    } // if (gamePackExists)

  } // if (gamePackNumberInUse)

} // window.onload
