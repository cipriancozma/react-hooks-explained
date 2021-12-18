import React, {forwardRef, useImperativeHandle, useState} from "react";

const Button = forwardRef((props, ref) => {

    const [toogle, setToogle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToogle() {
            setToogle(!toogle);
        }
    }))
    return (
        <>
            <button>
                Button from child
            </button>
            {toogle && <span>Toogle</span>}
        </>
    )
})

export default Button;