// filter() method creates a new array containing only the elements
// that pass a specific condition

let marks = [12, 25, 30, 45, 50, 65, 70, 85, 90, 100];

const evenMarks = marks.filter((mark) => mark % 2 === 0);

console.log(evenMarks);

// Example 1

const EmployeeData = [
  { employeeName: "boyd", age: 25, city: "Ahmedabad", job: "Designer" },
  { employeeName: "juli", age: 35, city: "Surat", job: "Developer" },
  { employeeName: "angelina", age: 42, city: "Rajkot", job: "Manager" }
];

// Employees whose age is greater than 30

const employeeNames = EmployeeData
  .filter((employee) => employee.age > 30)
  .map((employee) => employee.employeeName);

console.log(employeeNames);

// Employee Details

const employeeAgeFilter = EmployeeData.filter(
  (employee) => employee.age > 30
);

console.log(employeeAgeFilter);

// Example 2

let numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

let evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);

// Example 3

let ProductData = [
  {
    productName: "Laptop",
    price: 55000,
    category: "Electronics"
  },
  {
    productName: "Mobile",
    price: 25000,
    category: "Electronics"
  },
  {
    productName: "Book",
    price: 500,
    category: "Education"
  }
];

// Products with price greater than 1000

let productNames = ProductData
  .filter((product) => product.price > 1000)
  .map((product) => product.productName);

console.log(productNames);

// Product Details

let productFilter = ProductData.filter(
  (product) => product.price > 1000
);

console.log(productFilter);