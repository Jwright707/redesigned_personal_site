import React, {Fragment} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import {navbarStyles} from "../styles/navbarStyles";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import {IconButton} from "@material-ui/core";
import {josefinSlab, navyBlue} from "../styles/globalStyles";

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                padding: 20,
                width: '25%',
                background: navyBlue,
            },
        },
    },
});

export default function Navbar(props){
    const {open, setOpen} = props;
    const classes = makeStyles(theme => navbarStyles(theme))
    console.log(props)
    return(
        <ThemeProvider theme={theme}>
            <Drawer anchor={"left"}
                    open={open}
                    onClose={() => setOpen(!open)}
            >
                <CloseIcon style={{cursor: 'pointer'}} onClick={() => setOpen(!open)}/>
                <List>
                    {['About Me', 'Projects', 'Contact Me'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </ThemeProvider>

    )
}