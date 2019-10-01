// https://bugzilla.mozilla.org/show_bug.cgi?id=1408996#c31
// https://stackoverflow.com/questions/22725555/override-web-pages-javascript-function-using-firefox-addon-sdk

var s = document.createElement("script");
s.innerHTML =
  "window.navigator.permissions.query = function () { return Promise.resolve({ state: 'granted' }); };";
document.body.appendChild(s);
