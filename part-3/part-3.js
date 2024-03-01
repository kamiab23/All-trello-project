// swap
let a = [1,5,4];
let b = [22,3,6];

[a, b] = [b, a];
console.log(a, b);

// add a value at the first of the array
let newArray = [3, ...a,...b];
console.log(newArray);

// add a value at the end of the array
newArray = [...newArray, 4];
console.log(newArray);

// distructuring
let FLname = [
  { firstName: "ali", lastName: "moradi", age: 22 },
  { firstName: "reza", lastName: "soltani", age: 22 },
  { firstName: "sara", lastName: "mohammadi", age: 22 },
  { firstName: "mohammad", lastName: "azizi", age: 22 },
];
FLname.forEach(({firstName, lastName}) => console.log(firstName, lastName));
// let {firstName, lastName} = FLname;
// let firstNames = FLname.map(({ firstName }) => firstName);
// let lastNames = FLname.map(({ lastName }) => lastName);
// console.log(firstName);
// console.log(lastName);

