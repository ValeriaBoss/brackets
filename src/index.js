module.exports = function check(str,bracketsConfig) {
  let OPEN_BRACKETS = [];
  let BRACKETS_PAIR = {};
 
  for (let i = 0; i < bracketsConfig.length; i++) {
    OPEN_BRACKETS.push(bracketsConfig[i][0]);
    BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  let stack = [];
 
  for(let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (OPEN_BRACKETS.includes(currentSymbol)) {
      if ((stack[stack.length - 1] === currentSymbol) && (BRACKETS_PAIR[currentSymbol] === currentSymbol)) {
        stack.pop();
      }
    else {
      stack.push(currentSymbol)
    }
   }
    else {
      if (stack.length === 0) {
        return  false;
      }
      let topElement = stack[stack.length - 1];

      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}