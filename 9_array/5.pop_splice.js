// pop()

let companies = ["excel", "nirma", "infosys", "reliance", "birla"];

console.log("Removed Element :", companies.pop());
console.log("Array After pop() :", companies);

let actors = ["ranveer", "ram", "ntr", "antony", "tiger"];

console.log("Removed Element :", actors.pop());
console.log("Array After pop() :", actors);

let products = ["balaji", "crunchex", "haldiram"];

console.log("Removed Element :", products.pop());
console.log("Array After pop() :", products);

let buses = ["tanna", "rajdhani", "alankar", "jay gopal", "rk", "randal"];

console.log("Removed Element :", buses.pop());
console.log("Array After pop() :", buses);


// shift() and splice()

const fruits = ["apple", "banana", "orange", "guava", "cherry"];

console.log("Before shift :", fruits);

fruits.shift(); 

console.log("After shift :", fruits);

fruits.splice(2, 0, "watermelon", "grapes"); 

console.log("After splice :", fruits);



const series = ["wednesday", "money heist", "dark", "stranger things"];

console.log("Before shift :", series);

series.shift(); 

console.log("After shift :", series);

series.splice(1, 0, "off campus", "all of us are dead"); 

console.log("After splice :", series);



const animal = ["parrot","pigeon","camel","lion","tiger","cow","jaguar"];

console.log("Before shift :", animal);

animal.shift();

console.log("After shift :", animal);

animal.splice(3, 1, "elephant", "lepord"); 






