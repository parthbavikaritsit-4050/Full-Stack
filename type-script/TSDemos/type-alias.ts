// 1. Type Alias (Primitive)
type Age = number;

let sonamAge: Age = 45;
console.log("Age:", sonamAge);

// 2. Union Type
type Status = "Pending" | "Approved" | "Rejected";

let orderStatus: Status = "Pending";
console.log("Status:", orderStatus);

orderStatus = "Approved";
console.log("Updated Status:", orderStatus);

// 3. Function Type
type Add = (a: number, b: number) => number;

const sum: Add = (a, b) => {
    return a + b;
};

console.log("Addition:", sum(10, 20));

// 4. Intersection Type
type Person = {
    name: string;
};

type Employee = Person & {
    salary: number;
};

let emp: Employee = {
    name: "Sonam",
    salary: 50000
};

console.log("Employee Name:", emp.name);
console.log("Employee Salary:", emp.salary);
console.log("Employee:", emp);