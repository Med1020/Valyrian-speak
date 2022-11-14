var inputText = document.querySelector("#input")
var outputText = document.querySelector(".output")
const btn = document.querySelector(".btn")
const error = document.querySelector(".error")

const serverURL = "https://api.funtranslations.com/translate/valyrian.json"

const getURL = (input)=>{
    return serverURL + "?text=" + input

}

const errorHandler=(error)=>{
    return console.log("There was an error:", error)
}

btn.addEventListener("click", ()=>{
    let input = inputText.value
    if(input){
        error.innerText=""
        fetch(getURL(input))
        .then(response => response.json())
        .then(json => outputText.innerText = json.contents.translated)
        .catch(errorHandler)
    }
    else{
        error.innerText = "*Please enter text here"
    }
})