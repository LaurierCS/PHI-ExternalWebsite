import React from "react";
import history from "../browserHistory";
const App = () => {
    return (
        <h1
            className="mattIsCool"
            onClick={() => {
                history.push("/bye");
            }}
        >
            {/* Matt Is Cool */}
        </h1>
    );
};

export default App;
