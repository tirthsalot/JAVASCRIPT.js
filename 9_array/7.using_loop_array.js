// Array Element Access using for loop

let mobiles = ["oppo", "samsung", "iphone", "mi", "redmi", "realme", "nothing", "vivo"];

for (let i = 0; i < mobiles.length; i++) {
    console.log(mobiles[i]);
}

// for...of loop

for (let key of mobiles) {
    console.log(key);
}

// for...each loop

let languages = ["html", "css", "c", "c++", "javascript"];

languages.forEach((language, index) => {
    console.log(index + " : " + language);
});


let number = [1,2,3,4,5,6,7,8,9,10]

number.forEach((num)=>{

    console.log(num*num);
})

// concate


let teams = ["csk","mi","kkr","rcb","gt","srh","dc","pbks","lsg","rr"];

let concatJoint = mobiles.concat(teams);

console.log(concatJoint);


// Tostring this method is number to string convert

console.log("number to string convert :",number.toString());

//example

let series = ["stranger things","wednesday","alice in borderland","all of us are dead","money heist","off campus"];

for (let i=0;i<series.length;i++){

    console.log(series[i]);
}

for (let key of series){
    console.log(series);
}

//concate example

let concatemethod1 = series.concat(number);
console.log(concatemethod1)

let concatemethod2 = teams.concat(number);
console.log(concatemethod2);

//to string example

console.log("array to string :",series.toString());

