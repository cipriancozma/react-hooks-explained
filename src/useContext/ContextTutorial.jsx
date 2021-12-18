import React, {useState, createContext} from "react";
import {Login} from "./Login";
import {User} from "./User";

export const UsernameContext = createContext(null);

export function ContextTutorial() {
    const [username, setUsername] = useState("");



    return (
        <UsernameContext.Provider value={{setUsername, username}}>
           <Login/><User />
        </UsernameContext.Provider>
    )
}