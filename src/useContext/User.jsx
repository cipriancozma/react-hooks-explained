import React, {useContext} from "react";
import {UsernameContext} from "./ContextTutorial";

export function User() {

    const {username} = useContext(UsernameContext)

    return (
        <div>User: {username}</div>
    )
}