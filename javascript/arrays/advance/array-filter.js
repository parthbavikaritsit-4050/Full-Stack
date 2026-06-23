let numbers=[1,2,3,4,5]

let num1=numbers.filter((num)=>num%2==0); /// creates  new array by  multiplying elemnts of numbers array
console.log(num1);

const ages=[12,19,32,2,25,28,18,17,16,57.35,36];
let adults=ages.filter(age=>age>18);
console.log(adults);

let uncles=ages.filter(age=>age>35);
console.log(uncles);

