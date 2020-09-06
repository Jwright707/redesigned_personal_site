import React, {useEffect, useLayoutEffect, useState} from 'react';
import history from "./history";
import Dashboard from "./Dashboard/Dashboard";
import {makeStyles} from "@material-ui/core/styles";
import {appStyles} from "./styles/appStyles";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import LinkIcons from "./Components/LinkIcons";
import {useDispatch, useSelector} from "react-redux";
import {bottomArrowUpdate, topArrowUpdate} from "./actions/App";
import Projects from "./Projects/Projects";
import Navbar from "./Components/Navbar";

export default function App() {
    const classes = makeStyles(theme => appStyles(theme))()
    const {topArrow, bottomArrow} = useSelector(state => state.app);
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        if(window.scrollY === 0){
            bottomArrowUpdate(true, dispatch)
        }else if(window.scrollY === window.innerHeight){
            topArrowUpdate(true, dispatch)
        }
    }, [])

    window.onscroll = function (e) {
        if(window.scrollY === 0){
            bottomArrowUpdate(true, dispatch)
        }else if(window.scrollY === window.innerHeight){
            topArrowUpdate(true, dispatch)
        } else if (!bottomArrow && !topArrow){}
        else {
            bottomArrowUpdate(false, dispatch)
            topArrowUpdate(false, dispatch)
        }
    }
    return (
      <Router history={history}>
          <div className={classes.root}>
              <IconButton className={classes.iconContainer} onClick={() => setOpen(!open)}>
                  <MenuIcon className={classes.menuIcon}/>
              </IconButton>
              {open && <Navbar open={open} setOpen={setOpen}/>}
              <Switch>
                  <Route exact path='/' component={Dashboard} history={history}/>
                  <Route exact path='/projects' component={Projects} history={history}/>
              </Switch>
              <LinkIcons/>
          </div>
      </Router>
    );
}
