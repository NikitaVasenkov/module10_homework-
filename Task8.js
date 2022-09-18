let myMap = new Map ();
myMap.set(1, `yellow`);
myMap.set(2, `blue`);
myMap.set(3, `red`);
myMap.set(4, `green`);

for (let name of myMap.keys()){
  console.log ('Ключ - ', name)
}
for (let name of myMap.values()){
  console.log ('Значение - ',name)
}