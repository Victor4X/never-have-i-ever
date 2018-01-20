// Code block start. This code is by jolly.exe - https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/901144#901144
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
      // Game pack holder variable. (Holds all questions for specefic pack.)
      var gamePack = gamePacks[gamePackNumberInUse];
      // Run everytime button with id "getQuestionButton" is clicked.
      document.getElementById("getQuestionButton").onclick = function () {
        console.log("Button clicked.");
      };  // document.getElementById("getQuestionButton").onclick
    } // if (gamePackExists)

  } // if (gamePackNumberInUse)

} // window.onload
