// function for getElement input  value
function getInput(id) {
  const inputField = document.getElementById(id);
  const inputString = inputField.value;
  const inputValue = parseInt(inputString);
  return inputValue;
}

// function for element innerText value
function getInner(id) {
  const innerField = document.getElementById(id);
  const innerSt = innerField.innerText;
  const innerValue = parseInt(innerSt);
  return innerValue;
}
// function for set the value in inputValue
function setInputValue(id, value) {
  const innerField = document.getElementById(id);
  innerField.value = value;
}

// function for set the innerText in element
function setInnerValue(id, value) {
  const innerField = document.getElementById(id);
  innerField.innerText = value;
}

// function for calculate all value of product
function calculation() {
  const food = getInput('food');
  const rent = getInput('rent');
  const clothes = getInput('clothes');

  const total = food + rent + clothes;
  return total;
}

// function for condition

document.getElementById('calculate').addEventListener('click', () => {
  const totalCost = calculation();
  const income = getInput('income');
  const balance = income - totalCost;
  const incomes = document.getElementById('income');
  const num1 = document.getElementById('food');
  const num2 = document.getElementById('rent');
  const num3 = document.getElementById('clothes');
  //  value of expenses input
  const food = getInput('food');
  const rent = getInput('rent');
  const clothes = getInput('clothes');
  if (incomes.value === '') {
    alert('please enter your income amount');
    return;
  }
  if (food < 0 || rent < 0 || clothes < 0) {
    alert('Taka ki kokhon 0 er kom hote pare ');
    return;
  }
  if (num1.value === '' || num2.value === '' || num3.value === '') {
    alert('please enter your cost');
    return;
  }
  if (isNaN(num1.value) || isNaN(num2.value) || isNaN(num3.value)) {
    alert('please enter a valid number');
    return;
  }
  if (totalCost > income) {
    alert('Tumer kase eto taka nai ');
    return;
  }
  setInnerValue('totalExpense', totalCost);
  setInnerValue('balance', balance);
});

document.getElementById('saveBtn').addEventListener('click', () => {
  const income = getInput('income');
  const saveRate = getInput('savInput');
  const totalSave = income * (saveRate / 100);
  const totalSaveString = totalSave.toFixed(2);
  const totalSaveInt = parseFloat(totalSaveString);
  const prevBalnce = getInner('balance');
  if (prevBalnce < totalSaveInt) {
    alert('Tumar kase save korar moto taka nai');
    return;
  }
  setInnerValue('saving', totalSaveInt);
  const remaingBalnce = prevBalnce - totalSaveInt;
  setInnerValue('remaining', remaingBalnce);
});
