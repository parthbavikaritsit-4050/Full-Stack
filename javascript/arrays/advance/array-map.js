let numbers=[1,2,3,4,5]

let num1=numbers.map((num)=>num*3); /// creates  new array by  multiplying elemnts of numbers array
console.log(num1);


let users = [
    {name: "John",age:55},
    {name: "Alice",age:34},
    {name: "Catty",age:27},
    {name: "Bob",age:30},
]

let names=users.map(user=>user.name); /// creates new array by taking only names from frist array

console.log(names);