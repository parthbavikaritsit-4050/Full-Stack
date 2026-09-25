interface Employee {
    id: number;
    name: string;
}

function display(emp: Employee): void {
    console.log("ID:", emp.id);
    console.log("Name:", emp.name);
}

let emp1: Employee = {
    id: 101,
    name: "Parth"
};

display(emp1);