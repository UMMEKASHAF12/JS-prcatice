//local storage
localStorage.setItem("name", "Kashaf");
localStorage.setItem("age", "16");


let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log("Name:", name);
console.log("Age:", age);

//session storage

sessionStorage.setItem("userLoggedIn", "true");


let isLoggedIn = sessionStorage.getItem("userLoggedIn");

console.log("User Logged In:", isLoggedIn);



//JSON.parse
let jsonString = '{"name":"Kashaf","age":16}';
let obj = JSON.parse(jsonString);
 
console.log(obj.name);
console.log(obj.age);

//JSON.parse another eg
let array = '["apple" ,"mango", "strawberry"]';

let fruits = JSON.parse(array);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);