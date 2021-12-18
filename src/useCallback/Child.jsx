import React, {useEffect} from "react";

export function Child({returnComment}) {

    useEffect(() => {
        console.log("FUNCTION CALLED")
    }, [returnComment])

    return (
        <div>
            {returnComment("Ciprian")}
        </div>
    )
}