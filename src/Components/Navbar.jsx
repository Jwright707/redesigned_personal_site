import React, {useEffect, useState} from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import {josefinSlab, navyBlue} from "../styles/globalStyles";
import Collapse from "@material-ui/core/Collapse";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {updateProjectSelected} from "../actions/Dashboard";
import {useDispatch, useSelector} from "react-redux";
import {updateNavbar} from "../actions/App";
import {Link} from "react-router-dom";

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                padding: 20,
                width: '25%',
                background: navyBlue,
            },
        },
        MuiTypography: {
            displayBlock: {
                fontFamily: `${josefinSlab} !important`,
                fontSize: `1.2rem !important`
            }
        }
    },
});


export default function Navbar(){
    const {navbarOpen} = useSelector(state => state.app)
    const {projectList, projectedSelected} = useSelector(state => state.dashboard)
    const [openProjects, setOpenProjects] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        updateNavbar(false, dispatch)
    }, [projectedSelected])
    return(
        <ThemeProvider theme={theme}>
            <Drawer anchor={"left"}
                    open={navbarOpen}
                    onClose={() => updateNavbar(!navbarOpen, dispatch)}
            >
                <CloseIcon style={{cursor: 'pointer'}} onClick={() => updateNavbar(!navbarOpen, dispatch)}/>
                <List style={{width: '100%'}}>
                    <Link to={'/'} style={{textDecoration:'none', color: 'black'}}>
                        <ListItem button key={'About Me'} onClick={() => {
                            updateNavbar(false, dispatch)
                            setOpenProjects(false)
                            window.scrollTo(0, 0);
                        }}>
                            <ListItemText primary={'About Me'}/>
                        </ListItem>
                    </Link>
                    <ListItem button key={'Projects'} onClick={() => setOpenProjects(!openProjects)}>
                        <ListItemText primary={'Projects'}/>
                        {openProjects ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openProjects} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {projectList.map((project, index) => (
                                <Link to={"/projects"} key={index} style={{textDecoration:'none', color: 'black'}}>
                                    <ListItem button onClick={() => {
                                        updateProjectSelected(project, dispatch)
                                        window.scrollTo(0, 0);
                                    }}>
                                        <ListItemText style={{whiteSpace: 'nowrap'}} primary={`- ${project.replace('_', ' ')}`} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Collapse>
                    {/*<Link to={'/contact'} style={{textDecoration:'none', color: 'black'}}>*/}
                    {/*    <ListItem button key={'Contact Me'} onClick={() => {*/}
                    {/*        updateNavbar(false, dispatch)*/}
                    {/*        setOpenProjects(false)*/}
                    {/*        window.scrollTo(0, 0);*/}
                    {/*    }}>*/}
                    {/*        <ListItemText primary={'Contact Me'}/>*/}
                    {/*    </ListItem>*/}
                    {/*</Link>*/}
                </List>
            </Drawer>
        </ThemeProvider>

    )
}