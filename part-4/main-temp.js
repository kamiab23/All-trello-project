//your code
export function module(array1, array2) {
  let arr = [...array1, ...array2];
  console.log("array1 and array2 merged: ", arr);
  return arr;
}
export function removeDuplicates(arr) {
  var uniqueArr = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  console.log("array without duplicates: ", uniqueArr);
  return uniqueArr;
}
