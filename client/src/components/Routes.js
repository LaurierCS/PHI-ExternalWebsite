import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import MeetTheTeam from "./MeetTheTeam";
import AboutUs from "./AboutUs";
const Routes = () => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route path="/" exact component={Body} />
                <Route path="/team" exact component={MeetTheTeam} />
                <Route path="/about" exact component={AboutUs} />
            </Switch>
            {/* <Footer /> */}
        </React.Fragment>
    );
};

export default Routes;
