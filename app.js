 var btn = document.querySelector("#btn");
 var txt = document.querySelector("#text");
 var output = document.querySelector('#output');

 var url = "https://api.funtranslations.com/translate/minion.json"

 function getURL(text) {
    return url + "?text=" + text;
 }

 function errorHandler(error) {
    alert("Something wrong!")
 }

function btnHandler() {
    fetch(getURL(txt.value))
    .then(response => response.json())
    .then(json => {
        output.innerHTML = json.contents.translated
    })
    .catch(errorHandler)
}

 btn.addEventListener('click', btnHandler)