import React from "react";
import history from "../browserHistory";
const AboutUs = () => {
    return (
        <React.Fragment>
            {/* <h1
                className="mattIsCool"
                onClick={() => {
                    history.push("/bye");
                }}
            >
                AboutUs
            </h1> */}
            <h2 className ="FAQ">FAQ</h2>
            <div className = "Member">Where can I sign up to be a memeber?</div>

        </React.Fragment>
    );
};

export default AboutUs;
