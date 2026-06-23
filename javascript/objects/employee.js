
function Employee(id, name, dept, salary) {
    this.name = name;
    this.id = id;
    this.dept = dept;

    this.displayinfo = function () {
        console.log(`Employee Name : ${name}`);
        console.log(`Employee Id : ${id}`);
        console.log(`Employee Dept : ${dept}`);
    };

    this.increasesalary = function (amount) {
        console.log(`Employee Salary before : ${salary}`);
        salary += amount;
        console.log(`Employee Salary after : ${salary}`);
    };

    this.decreasesalary = function (amount) {
        console.log(`Employee Salary before : ${salary}`);
        salary -= amount;
        console.log(`Employee Salary after : ${salary}`);
    };
}

let s = new Employee(1, "sarvjit", "IT", 10000);

s.displayinfo();
s.decreasesalary(1000);

//same code using arrow

// function employee(id,name,dept,salary){
//     this.name=name;
//     this.id=id;
//     this.dept=dept;


// this.displayinfo= () =>{
//     console.log(`Employee Name : ${name}`);
//     console.log(`Employee Id: ${id}`);
//     console.log(`Employee Dept :${dept}`);
// }

// this.increasesalary= (amount) =>{
//     console.log(`Employee Salary before :${salary}`);
//     salary+=amount;
//     console.log(`Employee Salary after :${salary}`);
// }

// this.decreasesalary= (amount) =>{
//     console.log(`Employee Salary before :${salary}`);
//     salary-=amount;
//     console.log(`Employee Salary after :${salary}`);
// }


// }

// let s=new employee(1,"sarvjit","It",10000);

// s.displayinfo();
// s.decreasesalary(1000)


