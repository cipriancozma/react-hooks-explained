import React, {useImperativeHandle, useRef} from "react";
import Button from "./Button";

export function ImperativeHandle() {
    const ref = useRef(null);

    return (
        <div>
            <button onClick={() => ref.current.alterToogle()}>Button from parent</button>
            <Button ref={ref} />
        </div>
    )
}