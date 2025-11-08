localStorage.setItem("user", JSON.stringify({name: "Kashaf", age: 17}));
console.log(localStorage.getItem("user"));

const user = JSON.parse(localStorage.getItem("user"));
console.log(user);

console.log(user.name);
console.log(user.age);

localStorage.clear();
