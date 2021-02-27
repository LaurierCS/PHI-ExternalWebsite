import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from './Footer';
import Body from "./Body";
const Routes = () => {
    return (
        <React.Fragment>
            {/* <Header /> */}
            <Switch>
                <Route path="/" exact component={Body} />
            </Switch>
            {/* <Footer /> */}
            <Switch>
                <Route path="/" exact component={Footer} />
            </Switch>
        </React.Fragment>
    );
};

export default Routes;
