// swap
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b);

// add a value at the first of the array
let newArray = [3, ...[a, b]];
console.log(newArray);

// add a value at the end of the array
newArray = [...newArray, 4];
console.log(newArray);

let FLname = [
  { firstName: "ali", lastName: "moradi" },
  { firstName: "reza", lastName: "soltani" }
];
let firstNames = FLname.map(({ firstName }) => firstName);
let lastNames = FLname.map(({ lastName }) => lastName);
console.log(firstNames, lastNames);
