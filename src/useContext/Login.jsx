import React, {useContext} from "react";
import {UsernameContext} from "./ContextTutorial";


export function Login() {

    const {setUsername} = useContext(UsernameContext)

    return (
        <div>
            <input onChange={(e) => setUsername(e.target.value)}/>
        </div>
    )
}