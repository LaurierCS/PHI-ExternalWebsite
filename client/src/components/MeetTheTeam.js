import React from "react";
import history from "../browserHistory";
import ExampelA from "./ExampleA";
const MeetTheTeam = () => {
    return (
        <React.Fragment>
            <h1
                className="mattIsCool"
                onClick={() => {
                    history.push("/bye");
                }}
            >
                Meet The Team
            </h1>
            <ExampelA />
        </React.Fragment>
    );
};

export default MeetTheTeam;
