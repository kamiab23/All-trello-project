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
const person={
  firstname:"ali",
  lastname:"parhizian",
  nickname:"kamiab",
  age:23,
  address:{
    city:"shahi",
    country:"iran"
  },
}
const {firstname, lastname} = person;
console.log(firstname, lastname);