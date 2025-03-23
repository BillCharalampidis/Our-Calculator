// Get elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationButtons = document.querySelectorAll('#operation button');
const resultDisplay = document.getElementById('result');
const calculateButton = document.getElementById('calculate');


let selectedOperation = '';


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        operationButtons.forEach(btn => btn.classList.remove('active'));

        
        selectedOperation = button.value;

        
        button.classList.add('active');
    });
});


calculateButton.addEventListener('click', () => {
    // Get the values from the inputs
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = 'Please enter valid numbers';
        return;
    }
    let result;
  
    switch (selectedOperation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                result = 'Error: Cannot divide by zero';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Please select an operation';
    }

    resultDisplay.textContent = result;
});
