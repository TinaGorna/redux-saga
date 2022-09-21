import React from "react";
import "./App.css";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./redux/reducers"
import {Connected} from "./components/Connected"
import thunk from "redux-thunk"
// import logger from 'redux-logger'


const App = () => {

    const store = createStore(reducer, applyMiddleware(thunk))

    return (
        <Provider store={store}>
            <Connected/>
        </Provider>
    );
}

export default App;
