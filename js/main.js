window.onload = function() {

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

}
