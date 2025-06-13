// Higher Order Function + Call back

function multiply(a, b) {
    return a * b;
  }
  
  function calculate(num1, num2, callback) {
    return callback(num1, num2);
  }
  
  let result = calculate(5, 3, multiply);
  console.log(result);

  //example-2
  function add (a, b){
    return a + b;
  }

  function addition (num1, num2, callback){
    return callback(num1, num2);
  }

  let answer = addition(145, 5, add);
  console.log(answer);

  //example-3
  function subtract(a, b) {
    return a - b;
  }

  function minus (num1, num2,callback){
    return callback(num1, num2);
  }

  let ans = minus(745, 368, subtract);
    console.log(ans);
  
