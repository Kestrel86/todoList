const input = document.getElementById("addInput");
const button = document.getElementById("addButton");
const taskContainer = document.getElementById("taskContainer");

button.addEventListener("click", addButton);

function addTask(content) 
{
  const leftContainer = document.createElement("div");
  const rightContainer = document.createElement("div");
  const list = document.createElement("li");
  const textBox = document.createElement("span");

  const checkBox = document.createElement("input");
  //checkBox.type = "checkbox";
  checkBox.setAttribute("type", "checkbox");
  checkBox.style.cursor = "pointer";

  const removeButton = document.createElement("button");
  removeButton.classList.add("removeButton");
  removeButton.innerText = "X";
  removeButton.style.cursor = "pointer";

  textBox.innerText = content;

  checkBox.addEventListener("click", strikeCheckBox);

  removeButton.addEventListener("click", removeItem);

  leftContainer.appendChild(checkBox);
  leftContainer.appendChild(textBox);
  rightContainer.appendChild(removeButton);

  list.appendChild(leftContainer);
  list.appendChild(rightContainer);

  taskContainer.appendChild(list);

  function strikeCheckBox() 
  {
   if(!textBox.classList.contains("strikethrough")) {
    textBox.classList.add("strikethrough");
   } else if (textBox.classList.contains("strikethrough")) {
    textBox.classList.remove("strikethrough");
   }
  }

  function removeItem() 
  {
    taskContainer.removeChild(list);
    input.focus();
  }

}

function addButton(event)
{
  event.preventDefault();

  const userInput = input.value;
  if(userInput.length == 0) 
  {
    alert("No Input Given");
    return;
  }

  addTask(userInput);
  input.value = "";
}

