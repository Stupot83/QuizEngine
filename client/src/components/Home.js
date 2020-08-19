import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Topnav from "../components/navigation/Topnav";
import Sidenav from "../components/navigation/Sidenav";

class Home extends Component {
    render() {
        return (
            <div>
                <Topnav />
                <Sidenav />
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
