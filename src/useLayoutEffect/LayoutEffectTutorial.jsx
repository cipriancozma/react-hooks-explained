import React, {useEffect, useLayoutEffect, useRef} from "react";


export function LayoutEffectTutorial() {
    // useLayoutEffect is called before useEffect no matter where it is put in the code
    const inputRef = useRef();

    useLayoutEffect(() => {
        // console.log("Layout Effect")
        console.log(inputRef.current.value)
    }, [])

    useEffect(() => {
        // console.log("useEffect")
        inputRef.current.value = "Hi"
    }, [])

    return (
        <div>
            <input ref={inputRef} value={"Ciprian"} style={{width: "200px", height: "200px", border: "1px solid green"}}/>
        </div>
    )
}