
var btnTranslate = document.querySelector("#btn-Translate")

var inputText = document.querySelector("#text--input").innerText

function eventHandler() {

    console.log("CLICKED")
    console.log("input: ",inputText)
}

btnTranslate.addEventListener("click",eventHandler());

// the input text is to be assigned to a variable
// initiate a var whose text is shown in the output area
