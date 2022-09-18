const arr1 = [1,4,23,656];
const arr2 = [5,67,12,'53']
function checkArrayType(arr) {
  let arr1 = arr.map(e=>typeof e);
  return [...new Set(arr1)].length === 1;
}
function checkArrayType1(arr) {
  return arr.every((e,i,a) => typeof e === typeof a[0]);  
}
console.log(checkArrayType(arr1);
console.log(checkArrayType1(arr2);