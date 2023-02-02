const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to My Calculator Application');
rl.question('Enter the first number: ', (firstNum) => {
  rl.question('Enter the second number: ', (secondNum) => {
    rl.question('Enter the operator (+, -, *, /): ', (operator) => {
      let result;
      switch(operator) {
        case '+':
          result = parseFloat(firstNum) + parseFloat(secondNum);
          break;
        case '-':
          result = parseFloat(firstNum) - parseFloat(secondNum);
          break;
        case '*':
          result = parseFloat(firstNum) * parseFloat(secondNum);
          break;
        case '/':
          result = parseFloat(firstNum) / parseFloat(secondNum);
          break;
        default:
          console.log('Invalid operator');
      }

      if (result) {
        console.log(`The result is: ${result}`);
      }
      rl.close();
    });
  });
});
