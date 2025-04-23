let submitFormElement = document.getElementById("submit-form");
let tableElement = document.getElementById("table");

submitFormElement.addEventListener("submit", submitFormEventHandler);

function submitFormEventHandler(event) {
  event.preventDefault();
  let nameElement = document.getElementById("name").value;
  let SizeElement = document.getElementById("size").value;
  let instructionsElement = document.getElementById("instructions").value;

  let toppings = [];
  if (document.getElementById("pepperoni").checked) toppings.push("Pepperoni");
  if (document.getElementById("green-peppers").checked)
    toppings.push("Green Peppers");
  if (document.getElementById("mushrooms").checked) toppings.push("Mushrooms");
  if (document.getElementById("extra-cheese").checked)
    toppings.push("Extra Cheese");
  if (document.getElementById("sausage").checked) toppings.push("Sausage");
  if (document.getElementById("pineapple").checked) toppings.push("Pineapple");

  let newRow = tableElement.insertRow();
  let nameCell = newRow.insertCell();
  let sizeCell = newRow.insertCell();
  let toppingsCell = newRow.insertCell();
  let instructionsCell = newRow.insertCell();

  nameCell.textContent = nameElement;
  sizeCell.textContent = SizeElement;
  toppingsCell.textContent = toppings.join(",");
  instructionsCell.textContent = instructionsElement;

  event.target.reset();
}
