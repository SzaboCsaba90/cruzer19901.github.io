let clickedBtns=[]

function btnClick(btn){
  if (btn.value != '='){
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
  

  }
  else{
    document.getElementById("result").value = processInput(clickedBtns);
    clickedBtns = [];
    document.getElementById("operation").innerHTML = "&nbsp;";  
  }
}

function substringOperation(){
  var str = document.getElementById("operation").innerHTML
  var res = str.substring(1)
  document.getElementById("operation").innerHTML = res;
}

function processInput(clickedBtns){
  let number1 = []
  let number2 = []
  let operator = null
  
  for (i=0; i<clickedBtns.length; i++){
    if (isNaN(clickedBtns[i])) {
      operator = clickedBtns[i];
    }  
    else if (operator == null) {
      number1.push(clickedBtns[i]);
    } else {
      number2.push(clickedBtns[i]);
    }
  }

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
