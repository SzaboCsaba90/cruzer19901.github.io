let clickedBtns = []

const MAX_CLICKED_BTNS = 5;

function btnClick(btn) {
    operation = document.getElementById("operation");
    
    if (btn.value != '=') {
        clickedBtns.push(btn.value);

        if (operation.innerHTML == "&nbsp;") {
            operation.innerHTML = btn.value;
        }
        else {
            if (operation.innerHTML.length > MAX_CLICKED_BTNS - 1) {
                operation.innerHTML = operation.innerHTML.substring(1);
            }
            operation.innerHTML += btn.value;
        }

    }
    else {
        document.getElementById("result").value = processInput(clickedBtns);
        clickedBtns = [];
        operation.innerHTML = "&nbsp;";
    }
}

function processInput(clickedBtns) {
    let number1 = []
    let number2 = []
    let operator = null

    for (i = 0; i < clickedBtns.length; i++) {
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

function calculateResult(number1, operator, number2) {
    if (operator == '+') {
        return number1 + number2;
    }
    else if (operator == '-') {
        return number1 - number2;
    }
    else if (operator == '×') {
        return number1 * number2;
    }

    return "ERROR";
}
