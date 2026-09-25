import { useCallback, useEffect, useMemo, useState } from "react";

function Callback() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // 1️⃣ useMemo → remembers a VALUE
    const square = useMemo(() => {
        console.log("Calculating square...");
        return count * count;
    }, [count]);


    // 2️⃣ useCallback → remembers a FUNCTION
    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);


    // 3️⃣ useEffect → performs an ACTION after rendering
    useEffect(() => {
        console.log("useEffect executed");

        document.title = `Count: ${count}`;
    }, [count]);


    return (
        <div>
            <h1>Count: {count}</h1>

            <h2>Square: {square}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>

            <br /><br />

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />

            <br /><br />

            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}

export default Callback;