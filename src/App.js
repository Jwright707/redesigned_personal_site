import React, {useEffect} from 'react';
import history from "./history";
import Dashboard from "./Dashboard/Dashboard";
import {makeStyles} from "@material-ui/core/styles";
import {appStyles} from "./styles/appStyles";
import {Route, Switch} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import LinkIcons from "./Components/LinkIcons";
import {useDispatch, useSelector} from "react-redux";
import {bottomArrowUpdate, topArrowUpdate, updateNavbar} from "./actions/App";
import Projects from "./Projects/Projects";
import Navbar from "./Components/Navbar";
import Contact from "./Contact/Contact";
import {ToastContainer} from "react-toastify";
import {fetchProjectData} from "./actions/Content";
import {fetchDashboardData} from "./actions/Dashboard";

export default function App() {
    const classes = makeStyles(theme => appStyles(theme))()
    const {topArrow, bottomArrow, navbarOpen} = useSelector(state => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProjectData(dispatch)
        fetchDashboardData(dispatch)
    }, [])
    useEffect(() => {
        if(window.scrollY === 0){
            bottomArrowUpdate(true, dispatch)
        }else if(window.scrollY === window.innerHeight){
            topArrowUpdate(true, dispatch)
        }
    }, [])

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    window.onscroll = function (e) {
        if(window.scrollY === 0){
            bottomArrowUpdate(true, dispatch)
        }else if(window.scrollY === window.innerHeight*2 || window.scrollY === window.innerHeight){
            topArrowUpdate(true, dispatch)
        } else if (!bottomArrow && !topArrow){}
        else {
            bottomArrowUpdate(false, dispatch)
            topArrowUpdate(false, dispatch)
        }
    }
    return (
      <div className={classes.root}>
          <IconButton className={classes.iconContainer} onClick={() => updateNavbar(!navbarOpen, dispatch)}>
              <MenuIcon className={classes.menuIcon}/>
          </IconButton>
          <Navbar history={history}/>
          <Switch>
              <Route exact path='/' component={Dashboard} history={history}/>
              <Route exact path='/projects' component={Projects} history={history}/>
              <Route exact path='/contact' component={Contact} history={history}/>
          </Switch>
          <LinkIcons/>
      </div>
    );
}
