//find method
const numArray = [1, 10, 100, 1000, 10000, 100000];

let numgreaterThan = numArray.find((value) => value > 1000);

console.log("Finding number greater than 1000 in numArray:", numgreaterThan);

//example

const marks = [20, 35, 45, 60, 75];

let result = marks.find((value) => value > 50);

console.log("First number greater than 50:", result);

//slice & splice

const fruits = ["apple","mango","litchie","banana","watermelon","graps","orange","cherry","pineapple"]

console.log("fruits array op with slice",fruits.slice(2,4));

console.log("fruits array before",fruits);

console.log("fruits array op with slice adding one more fruits in second index op :",fruits.splice(2,0,"guava"));

console.log("fruits array after",fruits);

//some and every method


let num = [25, 50, 75, 2, 5, 10, 36, 65, 15, 20, 8];

console.log(
  "Num greater than 50 is available ?",
  num.some((value) => value > 50)
);

console.log(
  "checking every elements that num greater than 50 is available :",
  num.every((values) => values > 50)
);

console.log(
  "check number every number  is greater than 10 or not ?",
  num.every((values) => values > 10)
);
