var arr = [1, 5, 14, 32, 67];
var count = arr.length;
console.log(count);
arr.forEach(el => {
  setTimeout(() => {
    console.log(el)
  }, 1000)
})