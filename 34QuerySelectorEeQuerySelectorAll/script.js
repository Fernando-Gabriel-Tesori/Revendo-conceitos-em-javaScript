let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
    currentOperand += number;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentOperand;
}

function changeStyle() {
    const calculator = document.getElementById('calculator');
    const buttons = document.querySelectorAll('.btn');
    const isDark = calculator.classList.toggle('dark-mode');

    calculator.style.backgroundColor = isDark ? '#333' : '#fff';
    calculator.style.color = isDark ? '#fff' : '#000';

    buttons.forEach(button => {
        button.style.backgroundColor = isDark ? '#555' : '#eee';
        button.style.borderColor = isDark ? '#777' : '#ccc';
    });
}
