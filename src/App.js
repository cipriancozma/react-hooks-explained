import React from "react";
import {StateTutorial} from "./useState/StateTutorial";
import './App.css';
import {ReducerTutorial} from "./useReducer/ReducerTutorial";
import {EffectTutorial} from "./useEffect/EffectTutorial";
import {RefTutorial} from "./useRef/RefTutorial";
import {LayoutEffectTutorial} from "./useLayoutEffect/LayoutEffectTutorial";
import {ImperativeHandle} from "./useImperativeHandle/ImperativeHandle";
import {ContextTutorial} from "./useContext/ContextTutorial";
import {MemoTutorial} from "./useMemo/MemoTutorial";
import {CallbackTutorial} from "./useCallback/CallbackTutorial";

export function App ()  {

    return (
        <>
            {/*<StateTutorial />*/}
            {/*<hr style={{ marginBottom: "40px"}}/>*/}
            {/*<ReducerTutorial/>*/}
            {/*<hr style={{ marginBottom: "40px"}}/>*/}
            {/*<EffectTutorial />*/}
            {/*<RefTutorial />*/}
            {/*<LayoutEffectTutorial />*/}
            {/*<ImperativeHandle />*/}
            {/*<ContextTutorial/>*/}
            <CallbackTutorial/>
        </>
    )
}