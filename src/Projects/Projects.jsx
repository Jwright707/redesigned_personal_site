import React, {useEffect, useLayoutEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import {navyBlue} from "../styles/globalStyles";
import Food_Backpack from "../assets/images/foodbackpack_logo.png";
import Trip_Quest from "../assets/images/lake-between-1337608.jpg";
import Autobiographical from "../assets/images/69518727_2636667863042663_1069526786045378560_n.jpg";
import {makeStyles} from "@material-ui/core/styles";
import {projectStyles} from "../styles/projectStyles";
import {Food_Backpack_Text, Trip_Quest_Text, Autobiographical_Text} from "../Helper/projectTextHelper";
import Food_Backpack_Structure from "../assets/images/FoodBackpack.png";


const objectHelper = {
    Food_Backpack: Food_Backpack_Text,
    Trip_Quest: Trip_Quest_Text,
    Autobiographical: Autobiographical_Text,
}

const mapHelper = {
    Food_Backpack: Food_Backpack,
    Trip_Quest: Trip_Quest,
    Autobiographical: Autobiographical
}

export default function Projects(props){
    const {projectedSelected, projectList} = useSelector(state => state.dashboard)
    const {topArrow, bottomArrow} = useSelector(state => state.app)
    const classes = makeStyles(theme => projectStyles(theme))()
    const selectedProject = objectHelper[`${projectedSelected}`] || objectHelper[projectList[0]]
    const tabFormat = selectedProject?.title
        ?.toLowerCase()
        ?.split(' ')
        ?.map(character => character?.charAt(0)?.toUpperCase()+character?.slice(1))
        ?.join(' ')

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
      document.title = `${tabFormat} | Joshua Wright`
    })
    return(
        <Grid container>
            <Grid container direction={'row'} style={{flexWrap: 'nowrap'}} className="App">
                <Grid item container xs={6} className={classes.leftSideDashboardContainer}>
                    <Grid container justify={'center'} alignItems={'flex-end'}>
                        <Typography className={classes.leftSideDescription}>
                            {selectedProject.projectDescription}
                        </Typography>
                    </Grid>
                    <Grid container direction={'column'} justify={'flex-end'} alignItems={'center'}>
                        <Grid item style={{zIndex: 2}}>
                            <a href={`${selectedProject.websiteURL}`}
                               target={'_blank'}
                               className={classes.leftSideDescription}
                               style={{whiteSpace: "nowrap", textDecoration: 'none', color: 'black'}}
                               rel="noopener noreferrer"
                            >
                                Visit Website
                            </a>
                        </Grid>
                        <Grid item>
                            <KeyboardArrowDownIcon
                                className={classes.arrowDownIcon}
                                style={{color: bottomArrow ? 'black' : navyBlue}}
                                id={'arrowDown'}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container alignItems={'flex-start'} justify={'center'} xs={6} className={classes.rightSideDashboardContainer}>
                    <Typography className={classes.rightSideTitle}>
                        {selectedProject.title}
                    </Typography>
                    <img src={mapHelper[projectedSelected]} alt={`${projectedSelected.replace('_', ' ')}`} className={classes.dashboardImage}/>
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
                <Grid item container direction={'column'} justify={'flex-start'} alignItems={'flex-start'} style={{paddingLeft: 50}}>
                        <Grid item container justify={'center'} alignItems={'flex-start'} xs={12}>
                            <Typography className={classes.leftSideDescription2}>
                                <b>Developer Role: </b> {selectedProject.developerRole}
                            </Typography>
                        </Grid>
                        <Grid item container justify={'center'} alignItems={'flex-start'} xs={12} style={{paddingTop:40}}>
                            <Typography className={classes.leftSideDescription2}>
                                <b>Structure Overview: </b> {selectedProject.structureOverview}
                            </Typography>
                            {projectedSelected === 'Food_Backpack' && (
                                <a className={classes.viewStructure}
                                   href={`${Food_Backpack_Structure}`}
                                   download="Food Backpack Structure"
                                >
                                    <b>View Structure</b>
                                </a>
                            )}
                        </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}