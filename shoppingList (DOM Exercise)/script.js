var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

// button.addEventListener("click", function() {
//     if (inputLength() > 0) {
//         createListElement();
//     }
// })

// input.addEventListener("keypress", function(event){
//     if (inputLength() > 0 && event.keyCode === 13) {
//         createListElement();
//     }
// })

//this code is extracted from the previous code (final)
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//this code below is not effecient and repeated (before function)
// button.addEventListener("click", function() {
//     if (inputLength() > 0) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     }
// })

// input.addEventListener("keypress", function(event){
//     if (inputLength() > 0 && event.keyCode === 13) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     }
// })