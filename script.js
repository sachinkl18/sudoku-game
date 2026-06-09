const grid = document.getElementById("grid");

// create 5x5 inputs
for (let i = 0; i < 25; i++) {
  let input = document.createElement("input");
  input.maxLength = 1;
  grid.appendChild(input);
}

function check() {
  alert("Game check logic not added yet (basic version)");
}
