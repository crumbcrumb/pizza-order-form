let submitFormElement = document.getElementById("submit-form");
let tableElement = document.getElementById("table");

submitFormElement.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();
  let nameElement = document.getElementById("name").value;
  let SizeElement = document.getElementById("size").value;
  let instructionsElement = document.getElementById("instructions").value;

  let toppings = [];

  let pizzaToppingsElement = document.querySelectorAll(
    ".check-box input[type='checkbox']"
  );
  for (let i = 0; i < pizzaToppingsElement.length; i++) {
    if (pizzaToppingsElement[i].checked) {
      toppings.push(pizzaToppingsElement[i].labels[0].innerText);
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


//instead of insertRow and insertCell i tried

// let newTableRowElement = document.createElement("tr")
// let nameCell = document.createElement("td")
// let sizeCell = document.createElement("td")
// let toppingsCell = document.createElement("td")
// let instructionsCell = document.createElement("td")

// newTableRowElement.appendChild(nameCell);
// newTableRowElement.appendChild(sizeCell);
// newTableRowElement.appendChild(toppingsCell);
// newTableRowElement.appendChild(instructionsCell);
// tableElement.appendChild(newTableRowElement);

//but the styling for the table was off and it wasn't as clean 
