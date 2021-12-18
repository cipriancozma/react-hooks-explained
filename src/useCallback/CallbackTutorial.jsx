import React, {useEffect, useState, useMemo, useCallback} from "react";
import axios from "axios";
import {Child} from "./Child";

export function CallbackTutorial() {
    const [data, setData] = useState("Please subscribe to my channel");
    const [toogle, setToogle] = useState(false);

        const returnComment = useCallback((name) => {
            return data + name;
        }, [data])


    return (
        <div>
            <Child returnComment={returnComment}/>
            <button onClick={() => setToogle(!toogle)}>Toogle</button>
            {toogle && <h1>Toogle</h1>}
        </div>
    )
}