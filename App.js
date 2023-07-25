
var btnTranslate = document.querySelector("#btn-Translate")
var inputText = document.querySelector("#text--input")
var outputText = document.querySelector("#text--output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

var temp = ""

function getURL(text){
    return serverURL+"?text="+text
}

function errorHandler(error){
    console.log(error)
}

function fetchReturn(url){
    return fetch(url).then(res => res.json()).then(res => temp = res.contents.translated).catch(errorHandler)
}



var eventHandler = function eventHandler() {
    fetchReturn(getURL(inputText.value))
    outputText.innerHTML = temp
}

btnTranslate.addEventListener("click",eventHandler);

// the input text is to be assigned to a variable
// initiate a var whose text is shown in the output area
