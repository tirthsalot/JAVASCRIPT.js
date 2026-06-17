
//callback function passed as an argument to another function

function showAnswer(result) {
    console.log(result);
}

function divide(a, b, callback) {
    let result = a / b;

    callback(result);
}

divide(100, 4, showAnswer);

//another example


function callBack(result){
    console.log(result);
}

function total(a,b,call){
    let result = a*b;

    callBack(result);
}

total(100,200,callBack);

//example

function display(result) {
    console.log(result);
}

function subtract(x, y, callback) {
    let ans = x - y;

    callback(ans);
}

subtract(50, 20, display);