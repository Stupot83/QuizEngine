import React from "react";
import "../sass/Landing.scss";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Logo from "../Logo.png";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    headerGrid: {
        minHeight: "10vh",
        maxHeight: "10vh",
        textAlign: "center"
    },
    logoGrid: {
        minHeight: "50vh",
        maxHeight: "50vh"
    },
    buttonGrid: {
        minHeight: "30vh",
        maxHeight: "30vh"
    }
}));

export default function Landing() {
    const classes = useStyles();

    return (
        <div className={(classes.root, "Page_container")}>
            <Container className="Landing_container">
                <Grid container spacing={3}>
                    <Grid className={classes.headerGrid} item xs={12}>
                        <h1 id="Landing_header" className="Landing_header">
                            Welcome to QuizEngine
                        </h1>
                    </Grid>
                    <Grid className={classes.logoGrid} item xs={12}>
                        <img id="Landing_logo" className="Landing_logo" src={Logo} alt="Logo" />
                    </Grid>
                    <Grid container spacing={3} className="Landing_button_container">
                        <Grid className={classes.buttonGrid} item xs={12} className="Landing_button_box">
                            <Button
                                component={Link}
                                id="Landing_registration_button"
                                className="Landing_button_register"
                                variant="contained"
                                size="large"
                                startIcon={<CreateIcon />}
                                to="/register"
                            >
                                Register
                            </Button>
                            <Button
                                component={Link}
                                id="Landing_login_button"
                                className="Landing_button_login"
                                variant="contained"
                                size="large"
                                startIcon={<LockOpenIcon />}
                                to="/login"
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
