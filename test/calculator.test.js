// tests/calculator.test.js

const { JSDOM } = require('jsdom');

// Load the HTML content using jsdom
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

const dom = new JSDOM(htmlContent, { runScripts: "dangerously" });
const document = dom.window.document;
const calculator = document.forms['calculator'];
const display = calculator.querySelector('#display');

// Simulate clicking the buttons by directly manipulating the DOM
test('Addition operation', () => {
  display.value = '2 + 2';
  const equalsButton = document.querySelector('.button.mathButtons[value="="]');
  equalsButton.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));  // Simulate the click event
  expect(display.value).toBe('4');
});

test('Subtraction operation', () => {
  display.value = '5 - 3';
  const equalsButton = document.querySelector('.button.mathButtons[value="="]');
  equalsButton.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));  // Simulate the click event
  expect(display.value).toBe('2');
});
