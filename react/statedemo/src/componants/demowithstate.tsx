import { useState } from "react";

function DemoWithState() {
    const [name, setName] = useState<string>("Hello");
    const handleClick = () => {
        setName("Parth");
    }
    return (
        <>
            <h2>Welcome {name}</h2>
            <button onClick={handleClick}>Change Value</button>
        </>
    );
}

export default DemoWithState;