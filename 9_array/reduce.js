// reduce()
// reduce an array to a single value

// accumulator -> stores the result of previous iteration
// currentValue -> current array element
// initialValue -> starting value of accumulator

let marks = [15, 25, 35, 45, 55];

let totalMarks = marks.reduce((acc, current) => acc + current, 0);

console.log("Total Marks :", totalMarks);

// Example 1

let shoppingCart = [
  {
    productName: "smart phone",
    price: 50000,
    quantity: 1,
  },
  {
    productName: "t-shirt",
    price: 500,
    quantity: 2,
  },
  {
    productName: "shoes",
    price: 1500,
    quantity: 1,
  }
];

const totalAmount = shoppingCart.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);

console.log("Total Amount :", totalAmount);

// Example 2

let salaries = [20000, 25000, 30000, 35000];

let totalSalary = salaries.reduce(
  (acc, salary) => acc + salary,
  0
);

console.log("Total Salary :", totalSalary);

// Example 3

let BookStore = [
  {
    bookName: "war and peace",
    price: 500,
    quantity: 3,
  },
  {
    bookName: "hamlet",
    price: 700,
    quantity: 2,
  },
  {
    bookName: "Ulysses",
    price: 800,
    quantity: 1,
  }
];

let totalBookPrice = BookStore.reduce(
  (acc, book) => acc + book.price * book.quantity,
  0
);

console.log("Total Book Price :", totalBookPrice);