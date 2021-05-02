import React, {Fragment, useEffect} from 'react';
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
import {fetchProjectData} from "./actions/Content";
import {fetchDashboardData} from "./actions/Dashboard";
import CircularProgress from '@material-ui/core/CircularProgress';

export default function App() {
    const classes = makeStyles(theme => appStyles(theme))()
    const {topArrow, bottomArrow, navbarOpen} = useSelector(state => state.app);
    const {loading} = useSelector(state => state.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchProjectData(dispatch)
        fetchDashboardData(dispatch)
    }, [dispatch])

    useEffect(() => {
        if(window.scrollY === 0){
            bottomArrowUpdate(true, dispatch)
        }else if(window.scrollY === window.innerHeight){
            topArrowUpdate(true, dispatch)
        }
    }, [dispatch])

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    window.onscroll = function () {
        if(window.scrollY === 0){
            bottomArrowUpdate(true, dispatch)
        }else if(
            window.scrollY === window.innerHeight*2
            || window.scrollY === window.innerHeight*3
            || window.scrollY === window.innerHeight*3 - 65
            || window.scrollY === window.innerHeight
        ){
            topArrowUpdate(true, dispatch)
        } else if (!bottomArrow && !topArrow){}
        else {
            bottomArrowUpdate(false, dispatch)
            topArrowUpdate(false, dispatch)
        }
    }
    return (
      <div className={classes.root}>
          {!loading ? (
              <Fragment>
                  <IconButton className={classes.iconContainer} onClick={() => updateNavbar(!navbarOpen, dispatch)}>
                      <MenuIcon className={classes.menuIcon}/>
                  </IconButton>
                  <Navbar history={history}/>
                  <Switch>
                      <Route exact path='/' component={Dashboard} history={history}/>
                      <Route exact path='/projects' component={Projects} history={history}/>
                  </Switch>
                  <LinkIcons/>
              </Fragment>
          ): (
              <div style={{ width: '100px', minHeight: '100vh', marginLeft: 'auto', marginRight: 'auto', paddingTop: '30vw' }}>
                  <CircularProgress size={150}/>
                  {/*<p style={{width: '100%',textAlign: "center", paddingLeft: 15, fontSize: '3vw'}}>*/}
                  {/*    Loading*/}
                  {/*</p>*/}
              </div>
          )}
      </div>
    );
}
