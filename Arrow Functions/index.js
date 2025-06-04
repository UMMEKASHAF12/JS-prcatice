//Arrow Functions

//example-1
let isEven = num => num % 2 === 0;
console.log(isEven(10));

//example-2
let add = (a, b) => a + b;
console.log(add(5, 3));

//example-3
let name = userName => userName
console.log(name("Kashaf"));

//example-4
let greet = sayhi => sayhi
console.log(greet("Hello!"));

//function declaration
function num (a , b){
    return a + b;

}

//function expression
let num1 = function(a , b){
    return 12 + 12;

}

//function declaration - result 
let result =num(5 , 3)
console.log(result);


//function expression - result
let results = num1()
console.log(results);