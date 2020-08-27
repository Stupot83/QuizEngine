import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuizzes } from "../actions/actionsForQuizzes";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Loading from "./Loading";
import QuizList from "./QuizList";
import Quiz from "./Quiz";
import Questions from "./Questions";
import "../sass/QuizInterface.scss";
import Topnav from "./navigation/Topnav";
import Sidenav from "./navigation/Sidenav";
import NotAuthorized from "./NotAuthorized";

class QuizInterface extends Component {
    componentDidMount() {
        this.props.getQuizzes();
    }

    render() {
        const { quizzes, quizzesLoading } = this.props.quizzes;

        let displayContent;

        if (quizzes === null || quizzesLoading) {
            displayContent = <Loading />;
        } else if (quizzes.length > 0) {
            displayContent = (
                <div className="Interface_content_container">
                    <Switch>
                        <Route exact path="/display" quizzes={quizzes} component={QuizList} />
                        <Route exact path="/questions" quizzes={quizzes} component={Questions} />
                        <Route exact path="/quizzes/:quiz" component={Quiz} />
                        <Route component={NotAuthorized} />
                    </Switch>
                </div>
            );
        } else {
            displayContent = (
                <>
                    <div className="Interface_content_container">
                        <Switch>
                            <Route exact path="/display" quizzes={[]} component={QuizList} />
                            <Route exact path="/questions" component={Questions} />
                            <Route component={NotAuthorized} />
                        </Switch>
                    </div>
                </>
            );
        }

        return (
            <Router>
                <Topnav />
                <Sidenav />
                <div className="Interface_container">{displayContent}</div>
            </Router>
        );
    }
}

QuizInterface.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    quizzes: state.quizzes
});

export default withRouter(connect(mapStateToProps, { getQuizzes })(QuizInterface));
