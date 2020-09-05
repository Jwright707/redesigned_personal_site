import React from 'react';
import '../App.css';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {dashboardStyles} from "../styles/dashboardStyles";
import {Typography} from "@material-ui/core";
import PersonalImage from '../assets/images/imagejpeg_3_01.jpg';

export default function Dashboard(){
    const classes = makeStyles(theme => dashboardStyles(theme))()

    return(
        <Grid container direction={'row'} style={{flexWrap: 'nowrap'}} className="App">
            <Grid item container xs={6} justify={'center'} alignItems={'center'} className={classes.leftSideDashboardContainer}>
                <Typography className={classes.leftSideDescription}>
                    My name is Joshua Wright and I am a full-time student
                    at the University of California, Davis. I am working
                    towards a Bachelor of Science in Computer Science
                    and a minor in Economics. My main focus and inspiration
                    for my studies is web development and full-stack development.
                    I am very passionate about Software Development, and I strive to better
                    myself as a developer by constantly learning and programming in
                    my free time.
                </Typography>
            </Grid>
            <Grid item container alignItems={'flex-start'} justify={'center'} xs={6} className={classes.rightSideDashboardContainer}>
                <Typography className={classes.rightSideTitle}>
                    JOSHUA WRIGHT
                </Typography>
                <img src={PersonalImage} className={classes.dashboardImage}/>
            </Grid>
        </Grid>
    )
}