import React, {Fragment} from 'react';
import IconButton from "@material-ui/core/IconButton";
import LinkedinIcon from '../assets/images/linkedin icon.png'
import {makeStyles} from "@material-ui/core/styles";
import {linkIconStyles} from "../styles/linkIconStyles";
import Grid from "@material-ui/core/Grid";
import GithubIcon from '../assets/images/github_icon.png'
import FacebookIcon from '../assets/images/social-facebook-2019-circle-512.webp'

export default function LinkIcons(){
    const classes = makeStyles(theme => linkIconStyles(theme))()

    return(
        <Grid container direction={'column'} spacing={1} alignItems={'flex-end'} className={classes.linkIconsContainer}>
            <Grid item>
                <IconButton href={'https://www.linkedin.com/in/joshua-wright-29089a94/'} target={'_blank'}>
                    <img src={LinkedinIcon} className={classes.linkIcons}/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton href={'https://github.com/Jwright707'} target={'_blank'}>
                    <img src={GithubIcon} style={{borderRadius: 50}} className={classes.linkIcons}/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton href={'https://www.facebook.com/josh.wright.961'} target={'_blank'}>
                    <img src={FacebookIcon} className={classes.linkIcons}/>
                </IconButton>
            </Grid>
        </Grid>
    )
}
