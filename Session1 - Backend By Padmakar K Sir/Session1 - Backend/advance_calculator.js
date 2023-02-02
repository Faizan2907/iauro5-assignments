const math = require('mathjs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to My Calculator Application');
rl.question('Enter an expression to evaluate: ', (expression) => {
  try {
    const result = math.evaluate(expression);
    console.log(`The result is: ${result}`);
  } catch (error) {
    console.log(`Invalid expression: ${error.message}`);
  }
  rl.close();
});
