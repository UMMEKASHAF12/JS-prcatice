// Sorting Method
//Default Asscending Order

let numbers = [5, 2, 9, 1, 4];
numbers.sort();

console.log(numbers); 


//Descending Order
const number = [5, 2, 9, 1, 4];
number.sort((a, b) => b - a);

console.log(number); 


//using Products Sort Method
const Products =[
{name: "Ipad", Price:80000},
{name: "MacBook", Price: 120000},
{name: "Iphone", Price: 600000},

];

Products.sort((a, b) => b.Price - a.Price);
for (let item of Products) {
    console.log(item.name + " - Rs." + item.Price);
  }
