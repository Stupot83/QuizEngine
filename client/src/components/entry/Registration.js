import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerNewUser } from "../../actions/actionsForAuthentication";
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
            invalidEntries: {}
        };
    }

    componentDidMount() {
        // Redirect User to home page if already authenticated
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.invalidEntries) {
            this.setState({
                invalidEntries: nextProps.invalidEntries
            });
        }
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
            password2: this.state.password2
        };

        this.props.registerNewUser(newUser, this.props.history);
    };

    render() {
        const { invalidEntries } = this.state;

        return (
            <div className="Registration_container">
                <div id="Registration_header" className="Registration_header">
                    Register for QuizEngine
                </div>

                <form className="Registration_form" noValidate onSubmit={this.onSubmit}>
                    <div className="Registration_details">
                        <label>
                            <div id="Name_field" className="Registration_label">
                                Name
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.state.name}
                                error={invalidEntries.name}
                                id="name"
                                type="text"
                                autoComplete="off"
                                className="Registration_field"
                            />
                            <div className="Registration_invalid_entry">{invalidEntries.name}</div>
                        </label>
                    </div>

                    <div className="Registration_details">
                        <label>
                            <div id="Email_field" className="Registration_label">
                                Email
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={invalidEntries.email}
                                id="email"
                                type="email"
                                autoComplete="off"
                                className="Registration_field"
                            />
                            <div className="Registration_invalid_entry">{invalidEntries.email}</div>
                        </label>
                    </div>

                    <div className="Registration_details">
                        <label>
                            <div id="Password_field" className="Registration_label">
                                Password
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={invalidEntries.password}
                                id="password"
                                type="password"
                                autoComplete="off"
                                className="Registration_field"
                            />
                            <div className="Registration_invalid_entry">{invalidEntries.password}</div>
                        </label>
                    </div>

                    <div className="Registration_details">
                        <label>
                            <div id="Confirm_password_field" className="Registration_label">
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
                            <div className="Registration_invalid_entry">{invalidEntries.password2}</div>
                        </label>
                    </div>

                    <div className="Registration_button_box">
                        <Button
                            id="Registration_button"
                            type="submit"
                            variant="contained"
                            size="large"
                            className="Registration_button"
                            startIcon={<CreateIcon />}
                        >
                            Register
                        </Button>
                    </div>
                    <div className="Registration_bottom">
                        <p id="Redirect_message">
                            Already registered for QuizEngine?{" "}
                            <Link to="/login" id="Login_link" className="Registration_login_link">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

Registration.propTypes = {
    registerNewUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    invalidEntries: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    invalidEntries: state.invalidEntries
});

export default connect(mapStateToProps, { registerNewUser })(withRouter(Registration));
