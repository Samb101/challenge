import React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import Container from "./components/Container";
import Store from "./store/Store";
import "./assets/scss/app.scss";

const store = new Store();

render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById("root")
);
