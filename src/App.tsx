import React from "react";
import "./App.css";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./redux/reducers"
import {Connected} from "./components/Connected"
import createSagaMiddleware from 'redux-saga'
import {watchLoadData} from "./redux/sagas";

const App = () => {

    const sagaMiddleware = createSagaMiddleware() //здесь получили сагу
    const store = createStore(reducer, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(watchLoadData)

    return (
        <Provider store={store}>
            <Connected/>
        </Provider>
    );
}

export default App;
