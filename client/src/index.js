import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import { configureStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import App from "./App";

import {ChakraProvider} from "@chakra-ui/react"

import reducers from "./reducers";


const store = configureStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
<ChakraProvider><App /> </ChakraProvider>, document.getElementById("root"));