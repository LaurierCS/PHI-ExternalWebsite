import React from "react";
import { Router } from "react-router-dom";
import history from "../browserHistory";
import Routes from "./Routes";

const App = () => {
    return (
        <Router history={history}>
            <Routes />
        </Router>
    );
};

export default App;
