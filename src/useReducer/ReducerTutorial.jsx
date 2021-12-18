import React, {useReducer} from "react";


// useReducer is an alternative or a replacement for useState hook
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText}
        case "SHOWTEXT":
            return {count: state.count, showText: !state.showText}
        default:
            return state;
    }
}

export function ReducerTutorial() {
    // const [count, setCount] = useState(0);
    // const [showText, setShowText] = useState(true);
    const [state, dispatch] = useReducer(
        reducer, {count: 0, showText: true})

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => {
                // setCount(count + 1);
                // setShowText(!showText)
                dispatch({type: "INCREMENT"})
                dispatch({type: "SHOWTEXT"})
            }}>
                Click here
            </button>
            {state.showText && <p>This is my text</p>}
        </div>
    )
}