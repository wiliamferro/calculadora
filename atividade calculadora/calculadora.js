let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function operator(op) {
    display.value += op;
}

function calculate() {
    let expression = display.value;
    let result;
    try {
        result = eval(expression);
    } catch (error) {
        result = 'Error';
    }
    display.value = result;
}
