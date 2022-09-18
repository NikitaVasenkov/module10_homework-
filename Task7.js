var arr = [12, 33, 45, 54, 56, 87, 100];
var a=0;
var b=0;
for (var i = 0; i < arr.length; i++)
{
  if ((arr[i] % 2) === 0)
  {
    a++	
  } else {
    b++
  }
}
console.log(a);
console.log(b);