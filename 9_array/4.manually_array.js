let movies = ["dhurandhar","kill","kattalan"]

let moviesCount = 0;

for(let key of movies){
    moviesCount++;
}

movies[moviesCount] = "marco";

console.log(movies);


let number1 = [10,100,1000,10000,100000];

let numberCount = 0;

for(let key of number1){

    numberCount++;
}


console.log(numberCount);

for(let j=numberCount - 1;j>=0;j--){

    number1[j+1] = number1[j];
}
number1[0]=60;

console.log(number1);


let seasons = ["winter","summer",]

let seasonsCount = 0;

for(let key of seasons){
    seasonsCount++;
}

seasons[seasonsCount] = "monsoon";

console.log(seasons);


let employees = ["boyd","hoopeer","jack"]

let unshiftemployeesCount = 0;

for(let key of employees){

    unshiftemployeesCount++;
}

console.log(unshiftemployeesCount);

for(let i=unshiftemployeesCount - 1; i>= 0;i--){

    employees[i+1] = employees[i];
}

employees[0] = "jenny";

console.log(employees);


let cars = ["defender","g-wegon","thar"]

let unshiftcars = 0;

for(let key of cars){

    unshiftcars++;
}

console.log(unshiftcars);

for(let i=unshiftcars-1;i>=0;i--){

    cars[i+1] = cars[i];

}

cars[0] = "range rover";

console.log(cars);
