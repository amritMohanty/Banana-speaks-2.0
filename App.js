// console.log("script testing....")

// var input = prompt("provide input")

// alert("input = "+ input)
var btnTranslate = document.querySelector("#btn-Translate")
var inputText = document.querySelector("#input--div")
function eventHandler() {
    console.log(inputText.value)
}

btnTranslate.addEventListener("click",eventHandler());

// the input text is to be assigned to a variable
// initiate a var whose text is shown in the output area
