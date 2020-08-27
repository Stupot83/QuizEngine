import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo-denied.png";
import Button from "@material-ui/core/Button";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import "../sass/NotAuthorized.scss";

const NotAuthorized = props => {
    return (
        <div className="NotAuthorized_container">
            <div className="Logo_container">
                <div className="Logo_header">
                    🚨🤦🚨 Page not found 🚨🤦🚨
                    <img id="Logo-denied" className="Logo" src={Logo} alt="Logo" />
                </div>
            </div>
            <p>
                Either you do not have the correct access role, you have made a typo in the URL, or the page requested
                no longer exists.
            </p>
            <p>To visit the landing page for QuizEngine click below:</p>
            <Button variant="contained" size="large" className="Landing_button" startIcon={<KeyboardReturnIcon />}>
                <Link to="/">QuizEngine Landing Page</Link>
            </Button>
        </div>
    );
};

export default NotAuthorized;
