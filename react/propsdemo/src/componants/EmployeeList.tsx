function EmployeeList() {

interface Employee{
    name:String;
    id:number;
    salary:number;
}
    const Employees:Employee[]=[
        {name:"Parth",id:101,salary:78991},
        {name:"Parth",id:101,salary:78991},
        {name:"Parth",id:101,salary:78991}
    ]
    return (  
       
                <div>
            <h2>Employee List</h2>
            {
                Employees.map(emp=>(
                    <div key={emp.id}>
                        <h3>{emp.name}</h3>
                        <p>ID:{emp.id}</p>
                        <p>Salary:{emp.salary}</p>
                    </div>
                ))
            }
        </div>

    );
}

export default EmployeeList;
