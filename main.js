const output = document.getElementById("output");
const buttons = document.querySelectorAll(".calculator button");
let currentInput = '';
let firstOperand = null;
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;

        if (buttonId >= '0' && buttonId <= '9') {
                    currentInput += buttonId;
                    output.textContent = currentInput;
                } else if (buttonId === 'add' || buttonId === 'subtract' || buttonId === 'multiply' || buttonId === 'divide') {
                    if (currentInput !== '') {
                        firstOperand = parseFloat(currentInput);
                        operator = button.textContent;
                        currentInput = '';
                        output.textContent = operator;
                    }
                } else if (buttonId === 'equals') {
                    if (firstOperand !== null && currentInput !== '') {
                        let secondOperand = parseFloat(currentInput);
                        let result;
                        switch (operator) {
                            case '+':
                                result = firstOperand + secondOperand;
                                break;
                            case '-':
                                result = firstOperand - secondOperand;
                                break;
                            case '*':
                                result = firstOperand * secondOperand;
                                break;
                            case '/':
                                result = firstOperand / secondOperand;
                                break;
                        }
                        output.textContent = result;
                        currentInput = '';
                        firstOperand = null;
                        operator = null;
                    }
                } else if (buttonId === 'clear') {
                    currentInput = '';
                    firstOperand = null;
                    operator = null;
                    output.textContent = '0';
                }
            });
        });