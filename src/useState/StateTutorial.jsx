import React, {useState} from "react";

export function StateTutorial() {
    const [text, setText] = useState("Hello JS")
    const [counter, setCounter] = useState(0);

    const handleClick = () => setText("Hello State with React");

    const handleIncrement = () => setCounter(prevCounter => prevCounter + 1);

    return (
        <>
            <div >{text}</div>
            <button onClick={handleClick}>Change text</button>
            <div>{counter}</div>
            <button onClick={handleIncrement}>Increment</button>
        </>
    )
}