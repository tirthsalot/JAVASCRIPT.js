// map() method creates a new array by applying a function to every element

let prices = [50, 100, 150, 200, 250, 300, 350, 400, 450];

let updatedPrices = prices.map((price) => price * 2);

console.log(updatedPrices);

// Example 1

const StudentData = [
  { studentName: "Amit", age: 18, city: "Ahmedabad", course: "BCA" },
  { studentName: "Neha", age: 20, city: "Vadodara", course: "BBA" },
  { studentName: "Karan", age: 19, city: "Surat", course: "MCA" }
];

// Student Names

const studentNames = StudentData.map((student) => student.studentName);
console.log(studentNames);

// Student Ages

const studentAges = StudentData.map((student) => student.age);
console.log(studentAges);

// Student Cities

const studentCities = StudentData.map((student) => student.city);
console.log(studentCities);

// Student Courses

const studentCourses = StudentData.map((student) => student.course);
console.log(studentCourses);

// Example 2

let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90];

console.log(marks.map((mark) => mark + 5));

// Example 3

let MobileData = [
  { brand: "Samsung", model: "S24", color: "Black" },
  { brand: "Apple", model: "iPhone 15", color: "White" },
  { brand: "OnePlus", model: "12R", color: "Blue" }
];

// Brand Names

let mobileBrands = MobileData.map((mobile) => mobile.brand);
console.log(mobileBrands);

// Models

let mobileModels = MobileData.map((mobile) => mobile.model);
console.log(mobileModels);

// Colors

let mobileColors = MobileData.map((mobile) => mobile.color);
console.log(mobileColors);