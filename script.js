let submitFormElement = document.getElementById("submit-form");
let tableElement = document.getElementById("table");

submitFormElement.addEventListener("submit", submitFormEventHandler);

function submitFormEventHandler(event) {
  event.preventDefault();
  let nameElement = document.getElementById("name").value;
  let SizeElement = document.getElementById("size").value;
  let instructionsElement = document.getElementById("instructions").value;

  let toppings = [];

  let pizzaToppings = document.querySelectorAll(
    ".check-box input[type='checkbox']"
  );
  for (let i = 0; i < pizzaToppings.length; i++) {
    if (pizzaToppings[i].checked) {
      toppings.push(pizzaToppings[i].labels[0].innerText);
    }
  }

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
