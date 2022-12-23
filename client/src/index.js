import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import { legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import App from "./App";

import {ChakraProvider} from "@chakra-ui/react"

import reducers from "./reducers";


const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
<ChakraProvider>  <Provider store={store}><App /> </Provider> </ChakraProvider>, document.getElementById("root"));