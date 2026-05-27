console.log("String to Number 1 :", "900" - 20);

console.log("String to Number 2 :", "45" + 15);

console.log("String to Number 3 :", "250" * 200);

console.log("String to Number 4 :", "80" / 4);

console.log("String to Number 5 :", "999" % 50);

console.log("String to Number 6 :", "1000" + 500);

console.log("String to Number 7 :", "75" * 100);

console.log("String to Number 8 :", "44" + 22);

console.log("String to Number 9 :", "888" / 8);

console.log("String to Number 10 :", "abc" - 100);



console.log("Number to String 1 :", 50 + "500");

console.log("Number to String 2 :", 200 - "50");

console.log("Number to String 3 :", 5 * "xyz");

console.log("Number to String 4 :", 90 / "3");

console.log("Number to String 5 :", 1000 % "7");

console.log("Number to String 6 :", 700 + "300");

console.log("Number to String 7 :", 500 - "hello");

console.log("Number to String 8 :", 25 || 50);

console.log("Number to String 9 :", 300 * "abc");

console.log("Number to String 10 :", 9000 - "qwe");



console.log("Boolean to Number 1 :", true + 25);

console.log("Boolean to Number 2 :", false + 5);

console.log("Boolean to Number 3 :", true - 10);

console.log("Boolean to Number 4 :", false * 15);

console.log("Boolean to Number 5 :", true / 2);

console.log("Boolean to Number 6 :", true ** 8);

console.log("Boolean to Number 7 :", false % 7);

console.log("Boolean to Number 8 :", true + "55");

console.log("Boolean to Number 9 :", false - "10");

console.log("Boolean to Number 10 :", false + 200);



console.log("Null to Number 1 :", null + 25);

console.log("Null to Number 2 :", null - 75);

console.log("Null to Number 3 :", null * 100);

console.log("Null to Number 4 :", null / 5);

console.log("Null to Number 5 :", null % 10);

console.log("Null to Number 6 :", null + "999");

console.log("Null to Number 7 :", null - "500");

console.log("Null to Number 8 :", null + 150);

console.log("Null to Number 9 :", null - 250);

console.log("Null to Number 10 :", null + 300);



console.log("Undefined to Number 1 :", undefined - 10);

console.log("Undefined to Number 2 :", undefined + 99);

console.log("Undefined to Number 3 :", undefined * 5);

console.log("Undefined to Number 4 :", undefined / 2);

console.log("Undefined to Number 5 :", undefined % 6);

console.log("Undefined to Number 6 :", undefined + "777");

console.log("Undefined to Number 7 :", undefined - "100");

console.log("Undefined to Number 8 :", undefined + "test");

console.log("Undefined to Number 9 :", undefined ** 2);

console.log("Undefined to Number 10 :", undefined + 500);



let str1 = 456;

let num1 = String(str1);

console.log("Number to String :", num1);

console.log("Type of          :", typeof num1);


let str2 = "tirth";

let num2 = Number(str2);

console.log("String to Number :", num2);

console.log("Type of          :", typeof num2);


let str3 = false;

let num3 = String(str3);

console.log("Boolean to String :", num3);

console.log("Type of           :", typeof num3);


let str4;

let num4 = String(str4);

console.log("Undefined to String :", num4);

console.log("Type of             :", typeof num4);


let str5 = 987654321;

let num5 = Boolean(str5);

console.log("Number to Boolean :", num5);

console.log("Type of            :", typeof num5);


let str6 = 72.9876;

console.log("ParseInt   :", parseInt(str6));

console.log("ParseFloat :", parseFloat(str6));


let str7 = 654321.987654;

console.log("parseInt :", parseInt(str7));

console.log("parseFloat :", parseFloat(str7));