const input = document.getElementById("addInput");
const taskContainer = document.getElementById("taskContainer");

function addTask(content) {
  //entire function for adding and removing tasks as well as strikethrough
  const list = document.createElement("li"); //Creates list item in html
  const contentLabel = document.createElement("span"); //label that is attached to leftContent div
  const leftContent = document.createElement("div"); //division for the left side of content
  const rightContent = document.createElement("div"); //division for the right side of content

  //Creates checkBox attributes and properties
  const checkBox = document.createElement("input"); //type of element
  checkBox.setAttribute("type", "checkBox");
  checkBox.style.cursor = "pointer";

  //Creates removeButton attributes and properties
  const removeButton = document.createElement("button");
  removeButton.classList.add("removeButton");
  removeButton.innerText = "X";
  removeButton.style.cursor = "pointer";

  contentLabel.innerText = content;

  checkBox.addEventListener("click", () => {
    if (!contentLabel.classList.contains("strikethrough")) {
      contentLabel.classList.add("strikethrough");
    } else {
      contentLabel.classList.remove("strikethrough");
    }
  });

  removeButton.addEventListener("click", () => {
    taskContainer.removeChild(list);
    input.focus();
  });

  leftContent.appendChild(checkBox);
  leftContent.appendChild(contentLabel);

  rightContent.appendChild(removeButton);

  list.appendChild(leftContent);
  list.appendChild(rightContent);

  taskContainer.appendChild(list);
}

const button = document.getElementById("addButton");

button.addEventListener("click", (event) => {
  const content = input.value;
  event.preventDefault();

  if (content.length == 0) {
    alert("Task field must not be empty");
    return;
  }

  addTask(content);

  // Clear the input's current value
  input.value = "";
});
