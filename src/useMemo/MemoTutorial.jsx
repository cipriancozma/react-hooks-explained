import React, {useEffect, useState, useMemo} from "react";
import axios from "axios";

export function MemoTutorial() {
    const [data, setData] = useState("");
    const [toogle, setToogle] = useState(false);

    useEffect(() => {

        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data)
            })

    }, []);

    const findLongestName = (comments) => {
        if(!comments) return null;

        let longestName = "";
        for(let i=0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if(currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log("THIS WAS COMPUTED!");
        return longestName;
    }

    const getLongestName = useMemo(() => findLongestName(data), [data]);

    return (
        <div>
            {getLongestName}
            <button onClick={() => setToogle(!toogle)}>Toogle</button>
            {toogle && <h1>Toogle</h1>}
        </div>
    )
}