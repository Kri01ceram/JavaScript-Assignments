/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
      constructor() {
            this.result = 0;
      }

      add(num) {
            this.result += coerceNumber(num);
      }

      subtract(num) {
            this.result -= coerceNumber(num);
      }

      multiply(num) {
            this.result *= coerceNumber(num);
      }

      divide(num) {
            const divisor = coerceNumber(num);
            if (divisor === 0) {
                  throw new Error('Cannot divide by zero');
            }
            this.result /= divisor;
      }

      clear() {
            this.result = 0;
      }

      getResult() {
            return this.result;
      }

      calculate(expression) {
            if (typeof expression !== 'string') {
                  throw new Error('Invalid expression');
            }

            const sanitizedExpression = expression.replace(/\s+/g, '');

            if (!sanitizedExpression.length) {
                  throw new Error('Invalid expression');
            }

            if (/[^0-9+\-*/().]/.test(sanitizedExpression)) {
                  throw new Error('Invalid characters in expression');
            }

            if (!hasValidParentheses(sanitizedExpression)) {
                  throw new Error('Invalid expression');
            }

            const tokens = tokenize(sanitizedExpression);
            const rpnTokens = toRpn(tokens);
            const value = evaluateRpn(rpnTokens);

            if (!Number.isFinite(value)) {
                  throw new Error('Invalid expression');
            }

            this.result = value;
            return this.result;
      }
}

const OPERATOR_PRECEDENCE = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
};

const OPERATORS = new Set(Object.keys(OPERATOR_PRECEDENCE));

function coerceNumber(value) {
      if (typeof value !== 'number' || Number.isNaN(value)) {
            throw new Error('Invalid number');
      }
      return value;
}

function hasValidParentheses(expression) {
      let balance = 0;
      for (const char of expression) {
            if (char === '(') {
                  balance += 1;
            } else if (char === ')') {
                  balance -= 1;
                  if (balance < 0) {
                        return false;
                  }
            }
      }
      return balance === 0;
}

function isDigit(char) {
      return char >= '0' && char <= '9';
}

function isOperator(char) {
      return OPERATORS.has(char);
}

function isUnaryMinus(expression, index) {
      if (expression[index] !== '-') {
            return false;
      }

      if (index === 0) {
            return true;
      }

      const prev = expression[index - 1];
      return isOperator(prev) || prev === '(';
}

function tokenize(expression) {
      const tokens = [];
      let i = 0;

      while (i < expression.length) {
            let char = expression[i];

            if (
                  isDigit(char) ||
                  char === '.' ||
                  (char === '-' && isUnaryMinus(expression, i))
            ) {
                  let numberStr = '';
                  let dotCount = 0;

                  if (char === '-') {
                        numberStr += '-';
                        i += 1;
                        if (i >= expression.length) {
                              throw new Error('Invalid expression');
                        }
                        char = expression[i];
                  }

                  while (i < expression.length) {
                        char = expression[i];

                        if (isDigit(char)) {
                              numberStr += char;
                              i += 1;
                              continue;
                        }

                        if (char === '.') {
                              dotCount += 1;
                              if (dotCount > 1) {
                                    throw new Error('Invalid expression');
                              }
                              numberStr += char;
                              i += 1;
                              continue;
                        }

                        break;
                  }

                  if (numberStr === '-' || numberStr === '' || numberStr === '-.') {
                        throw new Error('Invalid expression');
                  }

                  tokens.push(parseFloat(numberStr));
                  continue;
            }

            if (isOperator(char) || char === '(' || char === ')') {
                  tokens.push(char);
                  i += 1;
                  continue;
            }

            throw new Error('Invalid expression');
      }

      return tokens;
}

function toRpn(tokens) {
      const output = [];
      const operators = [];

      for (const token of tokens) {
            if (typeof token === 'number') {
                  output.push(token);
                  continue;
            }

            if (isOperator(token)) {
                  while (operators.length) {
                        const top = operators[operators.length - 1];
                        if (
                              isOperator(top) &&
                              OPERATOR_PRECEDENCE[top] >= OPERATOR_PRECEDENCE[token]
                        ) {
                              output.push(operators.pop());
                        } else {
                              break;
                        }
                  }
                  operators.push(token);
                  continue;
            }

            if (token === '(') {
                  operators.push(token);
                  continue;
            }

            if (token === ')') {
                  let matched = false;
                  while (operators.length) {
                        const top = operators.pop();
                        if (top === '(') {
                              matched = true;
                              break;
                        }
                        output.push(top);
                  }
                  if (!matched) {
                        throw new Error('Invalid expression');
                  }
                  continue;
            }

            throw new Error('Invalid expression');
      }

      while (operators.length) {
            const op = operators.pop();
            if (op === '(' || op === ')') {
                  throw new Error('Invalid expression');
            }
            output.push(op);
      }

      return output;
}

function evaluateRpn(rpnTokens) {
      const stack = [];

      for (const token of rpnTokens) {
            if (typeof token === 'number') {
                  stack.push(token);
                  continue;
            }

            if (!isOperator(token) || stack.length < 2) {
                  throw new Error('Invalid expression');
            }

            const b = stack.pop();
            const a = stack.pop();
            let value;

            switch (token) {
                  case '+':
                        value = a + b;
                        break;
                  case '-':
                        value = a - b;
                        break;
                  case '*':
                        value = a * b;
                        break;
                  case '/':
                        if (b === 0) {
                              throw new Error('Division by zero');
                        }
                        value = a / b;
                        break;
                  default:
                        throw new Error('Invalid expression');
            }

            stack.push(value);
      }

      if (stack.length !== 1) {
            throw new Error('Invalid expression');
      }

      return stack[0];
}

module.exports = Calculator;