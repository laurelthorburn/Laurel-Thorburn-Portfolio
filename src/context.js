import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = {darkMode: false};

//reducer (context API)
const themeReducer = (state, action) => {
    switch (action.type){
        case "TOGGLE" :
        return {darkMode:!state.darKMode};
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    //reducer
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

    return (
        <ThemeContext.Provider value={{state,dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}