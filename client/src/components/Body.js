import React from "react";
import history from "../browserHistory";
const Body = () => {
    return (
        <h1
            className="mattIsCool"
            onClick={() => {
                history.push("/bye");
            }}
        >
            Matt Is Cool
        </h1>
    );
};

export default Body;
