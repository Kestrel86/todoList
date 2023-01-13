let taskContainer = document.getElementById("taskContainer");
const button = document.getElementById("addButton");
let input = document.getElementById("addInput");

let checkBox = document.createElement("input");
checkBox.type="checkbox";

let delButton = document.createElement("button");
delButton.classList.add("delButton");
delButton.innerText = "X";

button.addEventListener("click", function(event) {
  event.preventDefault();
  if(input.value == "" || input.value == " ") {
    alert("Please Add An Input");
  } else {
    addInput();
  }
});

input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if(input.value == "" || input.value == " ") {
      console.log(); //To prevent the alert message from popping up when there is an input and to avoid double input
    } else {
      addInput();
    }
  }
});

function addInput() {
  let span = document.createElement("SPAN");
  let listEl = document.createElement("li");
  let userInput = input.value;

  let checkBox = document.createElement("input");
  checkBox.type="checkbox";
  checkBox.classList.add("checkBox");

  let delButton = document.createElement("button");
  delButton.classList.add("delButton");
  delButton.innerText = "X";
  
  let text = document.createTextNode(userInput);
  span.appendChild(text);
  taskContainer.appendChild(listEl);

  delButton.addEventListener("click", function(event) {
    event.preventDefault();
    taskContainer.removeChild(listEl);
  });

  listEl.appendChild(delButton);
  listEl.appendChild(span);
  listEl.appendChild(checkBox);
  input.value = ""
};

/*
Notes:
Create an alert based on incorrect messages

Create a ul list for the inputs to be stored

span - for inline styling, comparable to div but not block

preventDefault() prevents the site from resetting

Tried to use focus to make life easier, resorted to alert being called consistently
*/