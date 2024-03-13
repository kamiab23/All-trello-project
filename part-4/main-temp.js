let array1 = [1, 2, 3, 3, 4, 6, 6, 7, 8];
let array2 = [0, 0, 1, 5, 5, 5, 6, 8, 10];
let arr = [];

//your code
export default function module() {
  arr = arr.push.apply(array1, array2);
  console.log("array1 and array2 merged: ", array1);
  var uniqueArr = array1.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  //output
  console.log("array without duplicates: ", uniqueArr);
}
