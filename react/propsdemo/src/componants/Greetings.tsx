interface greetingprops {
    name: string;
}


function Greetings({ name }: greetingprops) {
    return (
        <div style={{ border: "2px solid blue", padding: "20px", margin: "20px" }}>

            <h1>Hello {name}</h1>
        </div>
    );
}

export default Greetings;