import React from "react";
import { Route, Switch } from "react-router-dom";

import Body from "./Body";
const Routes = () => {
    return (
        <React.Fragment>
            {/* <Header /> */}
            <Switch>
                <Route path="/" exact component={Body} />
            </Switch>
            {/* <Footer /> */}
        </React.Fragment>
    );
};

export default Routes;
