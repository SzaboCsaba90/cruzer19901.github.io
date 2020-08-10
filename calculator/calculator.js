let clickedBtns = [];

function btnClick(btn){
    clickedBtns.push(btn.value);

    if (document.getElementById("operation").innerHTML == "&nbsp;") {
      document.getElementById("operation").innerHTML = btn.value;
    }
    else {
      document.getElementById("operation").innerHTML += btn.value;
    } 
    
    if (document.getElementById("operation").innerHTML.length > 10) {
      substringOperation();
    }

    if (document.getElementById("operation").innerHTML.charAt(document.getElementById("operation").innerHTML.length - 2) == '=') {
      document.getElementById("operation").innerHTML = btn.value;
    }

    if (btn.value == "=") {
      document.getElementById("result").value = processClickedBtns();
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
  console.log(number1);
  console.log(operator);
  console.log(number2);

  clickedBtns = [];

  return calculateResult(
    parseInt(number1.join('')), 
    operator, 
    parseInt(number2.join(''))
  );
}

function calculateResult(number1, operator, number2){
  if (operator == '+'){
    return number1 + number2;
  }
  else if (operator == '-'){
    return number1 - number2;
  }
  else if (operator == '×'){
    return number1 * number2;
  }

  return "ERROR";
}
