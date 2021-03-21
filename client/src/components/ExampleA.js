import React from "react";
import history from "../browserHistory";
const ExampleA = () => {
    return (
        <h1
            className="mattIsCool"
            onClick={() => {
                history.push("/bye");
            }}
        >
            ExampleA
        </h1>
    );
};

export default ExampleA;
