import React from 'react';
import history from "./history";
import Dashboard from "./Dashboard/Dashboard";
import {makeStyles} from "@material-ui/core/styles";
import {appStyles} from "./styles/appStyles";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import LinkIcons from "./Components/LinkIcons";

export default function App() {
    const classes = makeStyles(theme => appStyles(theme))()
    return (
      <Router history={history}>
          <div className={classes.root}>
              <IconButton className={classes.iconContainer}>
                  <MenuIcon className={classes.menuIcon}/>
              </IconButton>
              <Switch>
                  <Route exact path='/' component={Dashboard} history={history}/>
              </Switch>
              <LinkIcons/>
          </div>
      </Router>
    );
}
