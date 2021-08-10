var buttontranslate = document.querySelector("#translate-button");
var textArea = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");
var buttonSwitch = document.querySelector("#switch-button");
var enterText = document.querySelector("#enter-text");
var outputText = document.querySelector("#output-text");


var serverURl1 = "https://api.funtranslations.com/translate/us2uk.json";

var serverURl2 = "https://api.funtranslations.com/translate/uk2us.json";

function getTranslationURl1(text){
    return serverURl1 + "?" + "text=" + text;
}

function getTranslationURl2(text){
    return serverURl2 + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured", error)
    alert("something is wrong with the server! try again after some time");
}

function clickedEventHandler(){
    var inputText = textArea.value;
    
    fetch(getTranslationURl1(inputText))
    .then(response => response.json())
    .then(json => outputDiv.innerText=json.contents.translated)
    .catch(errorHandler); 

};

function clickedEventHandlerSwitch(){
    var inputText = textArea.value;

    enterText.innerHTML="Enter UK text below";
    outputText.innerHTML="Converted US text is below"

    fetch(getTranslationURl2(inputText))
    .then(response => response.json())
    .then(json => outputDiv.innerText=json.contents.translated)
    .catch(errorHandler);

}

buttontranslate.addEventListener("click", clickedEventHandler);

buttonSwitch.addEventListener("click", clickedEventHandlerSwitch);
