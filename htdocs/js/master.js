function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

for (var i in packIdentifiers) {
  if (getParameterByName("pack") == packIdentifiers[i]) {
    $("#choosePack").hide();
    $("#question").show();
    break;
  } else {
    $("#choosePack").show();
    $("#question").hide();
  }
}

shuffle(packContent[0]);
var questionNumber = 0;

$("#getQuestion").click(function(){
    $("#question").text(packContent[0][questionNumber]);
    if (questionNumber == packContent.length + 1) {
      $("#question").text("No more questions in pack...");
    } else {
      questionNumber++;
    }
});
