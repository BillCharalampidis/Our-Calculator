document.getElementById('calculate').addEventListener('click', function() {
    // Get input values
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    
    let result;

    // Perform the chosen operation
    switch(operation) {
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
            if(num2 === 0) {
                result = 'Error: Cannot divide by zero';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Invalid operation';
    }

    // Show result
    document.getElementById('result').textContent = result;
});
