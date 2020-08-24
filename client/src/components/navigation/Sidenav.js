import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/actionsForAuthentication";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Logo from "../../../src/Logo.png";
import "../../sass/Sidenav.scss";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    Toolbar: {
        marginTop: "-64px"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
        border: "1px solid #070707"
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    }
}));

const Sidenav = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const onLogoutClick = e => {
        e.preventDefault();
        props.logoutUser(props.history);
        window.location.href = "/";
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Toolbar className={classes.Toolbar}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon id="hamburger" className="Hamburger_icon" fontSize="large" />
                </IconButton>
            </Toolbar>
            <Drawer
                id="Drawer"
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.drawerHeader}>
                    <img id="logo" className="Logo" src={Logo} alt="Logo" />
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon id="chevron" fontSize="large" />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button component={Link} to="/display">
                        <ListItemIcon>
                            <HomeIcon id="homeIcon" fontSize="large" />
                        </ListItemIcon>
                        <ListItemText id="homeHeader" primary="Home" />
                    </ListItem>
                    <ListItem button onClick={onLogoutClick}>
                        <ListItemIcon>
                            <ExitToAppIcon id="signOutIcon" fontSize="large" />
                        </ListItemIcon>
                        <ListItemText id="signOutHeader" primary="Sign-out" />
                    </ListItem>
                    <Divider />
                </List>
            </Drawer>
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Sidenav));
