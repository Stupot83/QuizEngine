import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../sass/Login.scss";
import Button from "@material-ui/core/Button";
import LockOpenIcon from "@material-ui/icons/LockOpen";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            invalidEntries: {},
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password,
        };
    };

    render() {
        const { invalidEntries } = this.state;

        return (
            <div className="Login_container">
                <div id="Login_header" className="Login_header">Login to QuizEngine</div>

                <form
                    className="Login_form"
                    noValidate
                    onSubmit={this.onSubmit}
                >
                    <div className="Login_details">
                        <label>
                            <div id="Email_header" className="Login_label">Email</div>
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={invalidEntries.email}
                                id="email"
                                type="email"
                                autoComplete="off"
                                className="Login_field"
                            />
                            <div className="Login-invalid_entries">{invalidEntries.email}</div>
                        </label>
                    </div>

                    <div className="Login_details">
                        <label>
                            <div id="Password_header" className="Login_label">Password</div>
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={invalidEntries.password}
                                id="password"
                                type="password"
                                autoComplete="off"
                                className="Login_field"
                            />
                            <div className="Login_invalid_entries">{invalidEntries.password}</div>
                        </label>
                    </div>

                    <div className="Login_button_box">
                        <Button
                            id="Login_button"
                            type="submit"
                            variant="contained"
                            size="large"
                            className="Login_button"
                            startIcon={<LockOpenIcon />}
                        >
                            Login
                        </Button>
                    </div>
                    <div className="Login_bottom">
                        <p id="Redirect_message">
                            Not registered for QuizEngine?{" "}
                            <Link to="/register" id="Registration_link" className="Login_registration_link">Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;