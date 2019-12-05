var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

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

ul.onclick = function (event) {
    var target = event.target;
    target.classList.toggle("done");
}

function listLength() {
    return listItems.length;
}

function removeParent(e) {
    e.target.parentNode.remove();
}


function deleteButton() {
    var dtbn = document.createElement("button");
    dtbn.appendChild(document.createTextNode("Delete"));
    listItems[i].appendChild(dtbn);
    dtbn.onclick = removeParent;
}

for( i=0; i<listLength(); i++){
    deleteButton();
    }