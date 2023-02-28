let operand1 = null;
let operand2 = null;
let operator = null;
let result = document.getElementById('result');

function addDigit(digit) {
    if (result.value === '0') {
        result.value = digit;
    } else {
        result.value += digit;
    }
}

function addOperator(op) {
    operand1 = parseFloat(result.value);
    operator = op;
    result.value = '0';
}

function calculate() {
    operand2 = parseFloat(result.value);
    let res = null;
    switch (operator) {
        case '+':
            res = operand1 + operand2;
            break;
        case '-':
            res = operand1 - operand2;
            break;
        case '*':
            res = operand1 * operand2;
            break;
        case '/':
            res = operand1 / operand2;
            break;
    }
    result.value = res;
}

function clearResult() {
    operand1 = null;
    operand2 = null;
    operator = null;
    result.value = '0';
}
