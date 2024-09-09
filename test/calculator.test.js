// tests/calculator.test.js

const { JSDOM } = require('jsdom');

// Define the HTML content for the test
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Calculator Test</title>
  <script>
    function calculate() {
      const display = document.getElementById('display');
      try {
        display.value = eval(display.value); // Perform the calculation
      } catch (e) {
        display.value = 'Error';
      }
    }
  </script>
</head>
<body>
  <form name="calculator">
    <input id="display" type="text" name="display" readonly>
    <input class="button mathButtons" type="button" value="=" onclick="calculate()">
  </form>
</body>
</html>
`;

// Initialize jsdom with the HTML content
const dom = new JSDOM(htmlContent, { runScripts: "dangerously" });
const { document, window } = dom;

// Define the test cases
test('Addition operation', () => {
  const display = document.getElementById('display');
  const equalsButton = document.querySelector('.button.mathButtons[value="="]');
  
  // Set the expression
  display.value = '2 + 2';
  
  // Simulate the click event
  equalsButton.click();
  
  // Verify the result
  expect(display.value).toBe('4');
});

test('Subtraction operation', () => {
  const display = document.getElementById('display');
  const equalsButton = document.querySelector('.button.mathButtons[value="="]');
  
  // Set the expression
  display.value = '5 - 3';
  
  // Simulate the click event
  equalsButton.click();
  
  // Verify the result
  expect(display.value).toBe('2');
});
