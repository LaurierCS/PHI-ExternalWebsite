import React from "react";
import history from "../browserHistory";
import ExampleA from "./ExampleA";
const AboutUs = () => {
    return (
        <React.Fragment>
            <h1
                className="mattIsCool"
                onClick={() => {
                    history.push("/bye");
                }}
            >
                AboutUs
            </h1>
            <ExampleA></ExampleA>>
        </React.Fragment>
    );
};

export default AboutUs;
