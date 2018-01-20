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
var gamePackInUse = getParameterByName('gamePack');

// Check if gamePackInUse variable is empty.
if (gamePackInUse) {
  // Check weather gamePackInUse variable exists and valid.
  gamePackExists = false;
  for (var i = 0; i < gamePacks.length; i++) {
    if (gamePacks[i] == gamePackInUse) {
      gamePackExists = true;
      break;
    }
    // If gamePackInUse is valid.
    if (gamePackExists) {

    }
  }
}

}
