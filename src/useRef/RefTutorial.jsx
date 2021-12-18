import React, {useRef} from "react";


export function RefTutorial() {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.focus();
        // inputRef.current.value = "";
    }

    return (
        <div>
            <h1>Ciprian</h1>
            <input type={"text"} placeholder={"Ex..."} ref={inputRef}/>
            <button onClick={onClick}>Change name</button>
        </div>
    )
}