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
const dom = new JSDOM(htmlContent, { runScripts: "dangerously" });
const { document } = dom.window;

// Access the form and display elements
const calculator = document.forms['calculator'];
const display = calculator.querySelector('#display');
const equalsButton = document.querySelector('.button.mathButtons[value="="]');

// Define tests for the calculator functionality
test('Addition operation', () => {
  display.value = '2 + 2';
  equalsButton.onclick();  // Simulate the click event
  expect(display.value).toBe('4');  // Check the result
});

test('Subtraction operation', () => {
  display.value = '5 - 3';
  equalsButton.onclick();  // Simulate the click event
  expect(display.value).toBe('2');  // Check the result
});
