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
            <div className = "Question">Where can I sign up to be a member?
            </div>
            <div className = "Answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
            </div>

        </React.Fragment>
    );
};

export default AboutUs;
