body {
  text-align: center;
  font-family: Arial;
  background: #f0f2f5;
}

h1 {
  margin-top: 10px;
}

.controls button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
}

#grid {
  display: grid;
  grid-template-columns: repeat(5, 60px);
  justify-content: center;
  margin-top: 20px;
}

input {
  width: 55px;
  height: 55px;
  font-size: 20px;
  text-align: center;
  border: 1px solid #333;
}

input:disabled {
  background: #ccc;
  font-weight: bold;
}

#info {
  margin-top: 10px;
  font-size: 18px;
}
