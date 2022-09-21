import React from "react";
import "./App.css";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./redux/reducers"
import {Connected} from "./components/Connected"
import createSagaMiddleware from 'redux-saga'

const App = () => {

    const sagaMiddleware = createSagaMiddleware() //здесь получили сагу
    const store = createStore(reducer, applyMiddleware(sagaMiddleware))

    return (
        <Provider store={store}>
            <Connected/>
        </Provider>
    );
}

export default App;
