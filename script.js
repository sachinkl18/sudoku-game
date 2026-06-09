const grid = document.getElementById("grid");

const puzzle = [
  [1,0,0,4,5],
  [0,5,1,0,0],
  [0,1,0,5,0],
  [0,0,5,1,0],
  [5,4,0,0,1]
];

const solution = [
  [1,2,3,4,5],
  [4,5,1,2,3],
  [3,1,2,5,4],
  [2,3,5,1,4],
  [5,4,3,2,1]
];

let inputs = [];

function createGrid(){
  grid.innerHTML = "";
  inputs = [];

  for(let r=0;r<5;r++){
    for(let c=0;c<5;c++){
      let input = document.createElement("input");

      if(puzzle[r][c] !== 0){
        input.value = puzzle[r][c];
        input.disabled = true;
      }

      grid.appendChild(input);
      inputs.push(input);
    }
  }
}

function check(){
  for(let i=0;i<25;i++){
    if(inputs[i].value != solution[Math.floor(i/5)][i%5]){
      alert("❌ Wrong!");
      return;
    }
  }
  alert("🎉 You Win!");
}

function reset(){
  createGrid();
}

createGrid();
