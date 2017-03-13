import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import 'font-awesome/css/font-awesome.css'

import App from "./components/App";
import ProductsList from "./components/ProductsList";
import About from "./components/About";
import ProductDetailsContainer from "./components/product-details/ProductDetailsContainer";
import store from "./store";

import "./index.css";

Object.defineProperty(Array.prototype, 'chunk', {
    value: function (chunkSize) {
        let R = [];
        for (let i = 0; i < this.length; i += chunkSize)
            R.push(this.slice(i, i + chunkSize));
        return R;
    }
});

let app = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ProductsList}/>
                <Route path="products" component={ProductDetailsContainer}/>
                <Route path="about" component={About}/>
            </Route>
        </Router>
    </Provider>,
    app);
