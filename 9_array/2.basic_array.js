let series = ["wednesday", "from", "off campus", "stranger things", "alice in borderland"];

console.log("series array: ", series);

console.log("favourite series is", series[2]);

console.log("first series is", series[0]);

console.log("last series is", series[series.length-1]);

console.log("series array second element before changing is :", series[1]);

series[1] = "money heist";

console.log("now we have changed second element in series array");

console.log("series after money heist added", series);

let movies = ["dhurandhar", "kattalan", "marco", "kill", "kgf"];

console.log("movies array: ", movies);

console.log("favourite movies is", movies[2]);

console.log("first movies is", movies[0]);

console.log("last movies is", movies[series.length-1]);

console.log("movies array third element before changing is :", movies[2]);

movies[1] = "salaar";

console.log("now we have changed third element in movies array");

console.log("movies after salaar added", movies);

let cars = ["thar", "range rover", "g-wegon", "ford", "bmw"];

console.log("cars array: ", cars);

console.log("favourite cars is",cars[2]);

console.log("first cars is", cars[0]);

console.log("last cars is", cars[cars.length-1]);

console.log("cars array fourth element before changing is :", cars[3]);

cars[1] = "defender";

console.log("now we have changed fourth element in car array");

console.log("cars after defender added", cars);


let fruits = ["mango","water melon","litchi","banana","pineapple","strawberry"];

console.log("fruits array before", "and their length",fruits.length,fruits);

fruits.push("cherry");

console.log("fruits array after","and their length",fruits.length,fruits);