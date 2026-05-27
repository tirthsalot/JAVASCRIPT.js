function factorial(digit) {
    if (digit < 0) {
        return "factorial is not defined for negative numbers";
    }else if (digit === 0 || digit === 1) {
        return 1;
    }else {
        return digit * factorial(digit - 1);
    }
}

console.log(factorial(5));

function multiplication(digit) {
    if (digit < 0) {
        return "multiplication is not defined for negative numbers";
    }else if (digit === 0 || digit === 1) {
        return 1;
    }else {
        return digit * multiplication(digit - 1);
    }
}

console.log(multiplication(10));


function addition(digit) {
    if (digit < 0) {
        return "addition is not defined for negative numbers";
    }else if (digit === 0 || digit === 1) {
        return 1;
    }else {
        return digit * addition(digit - 1);
    }
}

console.log(addition(8));