import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../sass/Registration.scss";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            invalidEntries: {},
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };
    };

    render() {
        const { invalidEntries } = this.state;

        return (
            <div className="Registration_container">
                <div className="Registration_header">Register for QuizEngine</div>

                <form
                    className="Registration_form"
                    noValidate
                    onSubmit={this.onSubmit}
                >
                    <div className="Registration_details">
                        <label>
                            <div className="Registration_label">Name</div>
                            <input
                                onChange={this.onChange}
                                value={this.state.name}
                                error={invalidEntries.name}
                                id="name"
                                type="text"
                                autoComplete="off"
                                className="Registration_field"
                            />
                            <div className="Registration_invalid_entry">
                                {invalidEntries.name}
                            </div>
                        </label>
                    </div>

                    <div className="Registration_details">
                        <label>
                            <div className="Registration_label">Email</div>
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={invalidEntries.email}
                                id="email"
                                type="email"
                                autoComplete="off"
                                className="Registration_field"
                            />
                            <div className="Registration_invalid_entry">
                                {invalidEntries.email}
                            </div>
                        </label>
                    </div>

                    <div className="Registration_details">
                        <label>
                            <div className="Registration_label">Password</div>
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={invalidEntries.password}
                                id="password"
                                type="password"
                                autoComplete="off"
                                className="Registration_field"
                            />
                            <div className="Registration_invalid_entry">
                                {invalidEntries.password}
                            </div>
                        </label>
                    </div>

                    <div className="Registration_details">
                        <label>
                            <div className="Registration_label">
                                Confirm Password
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={invalidEntries.password2}
                                id="password2"
                                type="password"
                                autoComplete="off"
                                className="Registration_field"
                            />
                            <div className="Registration_invalid_entry">
                                {invalidEntries.password2}
                            </div>
                        </label>
                    </div>

                    <div className="Registration_button_box">
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            className="Registration_button" 
                            startIcon={<CreateIcon />}
                        >
                            Sign-Up
                        </Button>
                    </div>
                    <div className="Registration_bottom">
                        <p>
                            Already registered for QuizEngine?{" "}
                            <Link to="/login" className="Registration_login_link">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

export default Registration;