// tests/calculator.test.js

const { JSDOM } = require('jsdom');

// Define the HTML content for the test
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Calculator Test</title>
</head>
<body>
  <form name="calculator">
    <input id="display" type="text" name="display" readonly>
    <input class="button mathButtons" type="button" value="=" onclick="calculator.display.value = eval(calculator.display.value)">
  </form>
</body>
</html>
`;

// Initialize jsdom with the HTML content
const dom = new JSDOM(htmlContent, { runScripts: "dangerously", resources: "usable" });
const { document, window } = dom;

// Function to simulate the calculator logic
function simulateCalculation(expression) {
  const calculator = document.forms['calculator'];
  const display = calculator.querySelector('#display');
  
  display.value = expression; // Set the expression
  try {
    display.value = eval(display.value); // Perform the calculation
  } catch (error) {
    display.value = 'Error';
  }
  return display.value;
}

// Tests
test('Addition operation', () => {
  expect(simulateCalculation('2 + 2')).toBe('4'); // Check if addition works
});

test('Subtraction operation', () => {
  expect(simulateCalculation('5 - 3')).toBe('2'); // Check if subtraction works
});
