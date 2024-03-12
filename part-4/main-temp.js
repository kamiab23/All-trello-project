let array1 = [1, 2, 3, 3, 4, 6, 6, 7, 8];
let array2 = [0, 0, 1, 5, 5, 5, 6, 8, 10];

//your code
Array.prototype.push.apply(array1, array2);
console.log(array1);
// let arr = lastArr.split(" ");
var uniqueArr = array1.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

//output
console.log(uniqueArr);