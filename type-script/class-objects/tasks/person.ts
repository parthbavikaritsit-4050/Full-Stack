class Person {
    constructor(
        public name: string,        // Accessible everywhere
        protected age: number,      // Accessible in Person and Student
        private salary: number      // Accessible only in Person
    ) {}

    showSalary() {
        console.log("Salary:", this.salary);
    }
}

class Student extends Person {
    constructor(
        name: string,
        age: number,
        salary: number,
        public course: string
    ) {
        super(name, age, salary);
    }

    display() {
        console.log("Name:", this.name);      // ✅ public
        console.log("Age:", this.age);        // ✅ protected
        console.log("Course:", this.course);  // ✅ public

        // ❌ Error: 'salary' is private in Person
        // console.log(this.salary);
    }
}

let s1 = new Student(
    "Parth",
    21,
    100000,
    "Information Technology"
);

s1.display();
s1.showSalary();

// Outside the class
console.log(s1.name);      // ✅ public

// ❌ Error: protected
// console.log(s1.age);

// ❌ Error: private
// console.log(s1.salary);