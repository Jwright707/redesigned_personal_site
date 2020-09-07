import React, {Fragment, useEffect, useLayoutEffect} from 'react';
import '../App.css';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {dashboardStyles} from "../styles/dashboardStyles";
import {Typography, Zoom} from "@material-ui/core";
import PersonalImage from '../assets/images/imagejpeg_3_01.jpg';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {useDispatch, useSelector} from "react-redux";
import {navyBlue} from "../styles/globalStyles";
import Food_Backpack from '../assets/images/foodbackpack_logo.png';
import Trip_Quest from '../assets/images/lake-between-1337608.jpg';
import Autobiographical from '../assets/images/69518727_2636667863042663_1069526786045378560_n.jpg';
import Tooltip from '@material-ui/core/Tooltip';
import {updateProjectSelected} from "../actions/Dashboard";

export default function Dashboard(props){
    const {history} = props;
    const classes = makeStyles(theme => dashboardStyles(theme))()
    const {topArrow, bottomArrow} = useSelector(state => state.app)
    const {projectList} = useSelector(state => state.dashboard)
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        document.getElementById('arrowDown').animate([
            { opacity: 1 },
            { opacity: 0.1 },
            { opacity: 0 },
            { opacity: 0.1 },
            { opacity: 1}
            ], {
                duration: 2000,
                iterations: Infinity,
             })
        document.getElementById('arrowUp').animate([
            { opacity: 1 },
            { opacity: 0.1 },
            { opacity: 0 },
            { opacity: 0.1 },
            { opacity: 1}
        ], {
            duration: 2000,
            iterations: Infinity,
        })
    }, [])
    useEffect(() => {
        updateProjectSelected('', dispatch)
    }, [])
    return(
        <Fragment>
            <Grid container direction={'row'} style={{flexWrap: 'nowrap'}} className="App">
                <Grid item container xs={6} className={classes.leftSideDashboardContainer}>
                    <Grid item container justify={'center'} alignItems={'flex-end'} xs={12}>
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
                    <Grid item container justify={'center'} alignItems={'flex-end'} xs={12}>
                        <KeyboardArrowDownIcon
                            className={classes.arrowDownIcon}
                            style={{color: bottomArrow ? 'black' : navyBlue}}
                            id={'arrowDown'}
                        />
                    </Grid>
                </Grid>
                <Grid item container alignItems={'flex-start'} justify={'center'} xs={6} className={classes.rightSideDashboardContainer}>
                    <Typography className={classes.rightSideTitle}>
                        JOSHUA WRIGHT
                    </Typography>
                    <img src={PersonalImage} alt={'Joshua Wright'} className={classes.dashboardImage}/>
                </Grid>
            </Grid>
            <Grid item container xs={6} direction={'column'} justify={'flex-start'} alignItems={'center'} className={classes.projectsSectionContainer}>
                <Grid item>
                    <KeyboardArrowDownIcon
                        className={classes.arrowUpIcon}
                        style={{color: topArrow ? 'black' : navyBlue}}
                        id={'arrowUp'}
                    />
                </Grid>
                <Grid item container direction={'column'} justify={'center'} alignItems={'center'}>
                    <Grid item xs={12}>
                        <Typography className={classes.projectsTitle}>
                            Projects
                        </Typography>
                    </Grid>
                    <Grid container>
                        {projectList.map((project, index) => {
                            const mapHelper = {
                                Food_Backpack: Food_Backpack,
                                Trip_Quest: Trip_Quest,
                                Autobiographical: Autobiographical
                            }
                            return (
                                <Grid item key={index} container xs={6} justify={'center'} alignItems={'center'} direction={'column'} className={classes.eachProjectContainer}>
                                    <Grid item xs={12}>
                                        <Typography className={classes.eachProjectTitle}>
                                            {project.replace('_', " ")}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Tooltip TransitionComponent={Zoom} arrow title={"Learn More"}>
                                            <img src={mapHelper[project]}
                                                 className={classes.eachProjectImage}
                                                 alt={project.replace('_', " ")}
                                                 onClick={() => {
                                                     updateProjectSelected(project, dispatch)
                                                     window.scrollTo(0, 0)
                                                     history.push('/projects')
                                                 }}
                                            />
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>

    )
}