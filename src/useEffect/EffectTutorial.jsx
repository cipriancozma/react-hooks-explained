import React, {useEffect, useState} from "react";
import axios from "axios";

export function EffectTutorial() {
    const [data, setData] = useState("");
    const [count, setCounter] = useState(0);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
            setData(response.data[0].email)
                console.log(response.data[0].email)
        })
    }, [])

    return (
        <>
            <div>Hello {data}</div>
            <div>{count}</div>
            <button onClick={() => setCounter(count + 1)}>Increment</button>
        </>
    )
}