// tests/calculator.test.js

const { JSDOM } = require('jsdom');

// Load the HTML content using jsdom
const dom = new JSDOM(`
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
`, { runScripts: "dangerously" });

const calculator = dom.window.document.forms['calculator'];
const display = calculator.display;

test('Addition operation', () => {
  display.value = '2 + 2';
  calculator['='].click(); // Simulates the equal button click
  expect(display.value).toBe('4');
});

test('Subtraction operation', () => {
  display.value = '5 - 3';
  calculator['='].click(); // Simulates the equal button click
  expect(display.value).toBe('2');
});
