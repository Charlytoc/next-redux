"use client"

import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./reducers"; ?// Import your root reducer
import { store } from "./store";


interface Props { children: React.ReactNode}
// Create the Redux store
export function Providers({children}: Props) {
    return <Provider store={store}>
        {children}
    </Provider>
}

