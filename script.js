body {
  text-align: center;
  font-family: Arial;
  background: #f4f4f4;
}

#grid {
  display: grid;
  grid-template-columns: repeat(5, 60px);
  width: 300px;
  margin: auto;
  margin-top: 20px;
}

input {
  width: 55px;
  height: 55px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #333;
}

input:disabled {
  background: #ddd;
  font-weight: bold;
}
