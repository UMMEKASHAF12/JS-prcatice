//Map-----------Array method Of javascript

const numbers = [1, 2, 3, 4];
const Multiply = numbers.map(num => num * 2);

console.log(Multiply);

//upercase in map

const siblings = ["Kashaf", "Ahmed", "Anabia", "Zainab"];
const uppercase = siblings.map(name => name.toUpperCase());

console.log(uppercase); 

//Age, Names, Skills

const users = [
  { name: "Kashaf", age: 16 , skills: "web-developer" , followers: 2390},
  { name: "Shafaq", age: 15 , skills: "ui/ux-design" , followers: 2550 }
];

const names = users.map(users => users.name);
const ages = users.map(users => users.age);
const skills = users.map(users => users.skills);
const follower = users.map(users => users.followers);
console.log(names);
console.log(ages);
console.log(skills);
console.log(follower);


//products

const products = [
  { name: "Shampoo", price: 800 },
  { name: "Soap", price: 100 },
  { name: "Lotion", price: 500 }
];

// Har product pe 10% discount lagana hai
const discountedProducts = products.map(product => {
  return {
    name: product.name,
    discountedPrice: product.price - (product.price * 0.10)
  };
});

console.log(discountedProducts);

