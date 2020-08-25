import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import QuizInterface from "./QuizInterface";
import "../sass/Home.scss";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <QuizInterface />
            </div>
        );
    }
}

Home.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Home));
