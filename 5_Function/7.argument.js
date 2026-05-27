function sumOfNum() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  console.log("Total sum: " + sum);
}

sumOfNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function sumOfdigit() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  console.log("Total sum: " * sum);
}

sumOfdigit(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);