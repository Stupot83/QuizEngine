import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/actionsForAuthentication";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "../../sass/Topnav.scss";

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5",
        marginTop: "8px"
    }
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        color: theme.palette.primary.dark,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
            color: "#34D1BF"
        },
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: "#070707"
            }
        }
    }
}))(MenuItem);

const Topnav = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onLogoutClick = e => {
        e.preventDefault();
        props.logoutUser(props.history);
        window.location.href = "/";
    };

    const redirectToHome = e => {
        if (props.auth.isAuthenticated) {
            props.history.push("/display");
            window.location.href = "/display";
        }
    };

    const { email } = props.auth.user;

    return (
        <AppBar position="static" className="Topnav">
            <Toolbar className="Topnav_toolbar">
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid className="Topnav_title_box" item xs={5}>
                        <Typography
                            variant="h6"
                            className="Topnav_title"
                            id="Nav_title"
                            button="true"
                            onClick={redirectToHome}
                        >
                            QuizEngine
                        </Typography>{" "}
                    </Grid>
                    <Grid className="Topnav_profile" item xs={5}>
                        <Button onClick={handleClick} id="accountIcon">
                            <AccountCircle
                                className="Topnav_icon"
                                id="Profile_icon"
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                fontSize="large"
                            />
                        </Button>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <StyledMenuItem button onClick={redirectToHome}>
                                <ListItemIcon>
                                    <HomeIcon fontSize="large" id="homeIcon" />
                                </ListItemIcon>
                                <ListItemText primary="Home" id="homeHeader" />
                            </StyledMenuItem>
                            <StyledMenuItem onClick={onLogoutClick}>
                                <ListItemIcon>
                                    <ExitToAppIcon fontSize="large" id="signOutIcon" />
                                </ListItemIcon>
                                <ListItemText primary="Sign-Out" id="signOutHeader" />
                            </StyledMenuItem>
                        </StyledMenu>
                        <Typography className="Topnav_email" id="emailAddress">
                            {email}
                        </Typography>{" "}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Topnav));
