enum Department {
    IT = "IT",
    HR = "HR",
    Sales = "Sales"
}

class Employee {
    constructor(
        public name: string,
        public department: Department
    ) {}

    display(): void {
        console.log("Employee Name:", this.name);
        console.log("Department:", this.department);
    }
}

let emp1 = new Employee("Parth", Department.IT);
emp1.display();