interface Employee {
    name: String;
    age: number;
    id: number;
    isactive: boolean;
}

function EmployeeCard({ name, id, age, isactive }: Employee) {
    return (
        <div style={{ border: "2px solid green", padding: "20px", margin: "20px", fontWeight: "bold" }}>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Id:{id}</p>
            <p>Status:{isactive? "Active":"Inactive"}</p>
        </div>

    );
}

export default EmployeeCard;