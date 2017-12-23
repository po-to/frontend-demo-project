import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {Provider} from "react-redux";

import reducer from "../../reducer/user";
import saga from "../../reducer/saga";
import App from "../../containers/app/App";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
);