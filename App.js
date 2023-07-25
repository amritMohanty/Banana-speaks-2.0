
var btnTranslate = document.querySelector("#btn-Translate")

var inputText = document.querySelector("#text--input")

var outputText = document.querySelector("#text--output")

var eventHandler = function eventHandler() {

    console.log("CLICKED")
    console.log("input: ",inputText.value)
    outputText.innerHTML = inputText.value
    console.log("output: ",outputText.value)
}

btnTranslate.addEventListener("click",eventHandler);

// the input text is to be assigned to a variable
// initiate a var whose text is shown in the output area
