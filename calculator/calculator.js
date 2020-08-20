let clickedBtns = [];
let resultCalculated = false;

function btnClick(btn){
    clickedBtns.push(btn.value);

    if (resultCalculated && !isNaN(btn.value)){
      clickedBtns = [btn.value];
      document.getElementById("operation").innerHTML = '';
    }

    if (document.getElementById("operation").innerHTML == "&nbsp;") {
      document.getElementById("operation").innerHTML = btn.value;
    }
    else {
      document.getElementById("operation").innerHTML += btn.value;
    } 
    
    if (document.getElementById("operation").innerHTML.length > 10) {
      substringOperation();
    }

    if (btn.value == "=") {
      document.getElementById("result").value = processClickedBtns();
      document.getElementById("operation").innerHTML += document.getElementById("result").value;
      resultCalculated = true
    } 
    else {
      resultCalculated = false
    }
}

function substringOperation(){
  var operationContent = document.getElementById("operation").innerHTML
  var operationContentSubstring = operationContent.substring(1)
  document.getElementById("operation").innerHTML = operationContentSubstring;
}

function processClickedBtns(){
  let number1 = []
  let number2 = []
  let operator = null
  
  for (i=0; i<clickedBtns.length; i++) {
    if (isNaN(clickedBtns[i])) {
      if (clickedBtns[i] != "=") {
        if (operator != null) {
          number1 = calculateResult(
            parseInt(number1.join('')), 
            operator, 
            parseInt(number2.join(''))
          ).toString().split('');
          number2 = [];
        }
        operator = clickedBtns[i];
      }
    }
    else if (operator == null) {
      number1.push(clickedBtns[i]); 
    } 
    else {
      number2.push(clickedBtns[i]);
    }
  }

  result = calculateResult(
    parseInt(number1.join('')), 
    operator, 
    parseInt(number2.join(''))
  );

  clickedBtns = result.toString().split('');

  return result;
}

function calculateResult(number1, operator, number2){
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '×':
      return number1 * number2;
  } 

  return "ERROR";
}
