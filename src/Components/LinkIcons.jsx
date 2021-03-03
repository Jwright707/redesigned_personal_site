import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";
import {linkIconStyles} from "../styles/linkIconStyles";
import Grid from "@material-ui/core/Grid";

export default function LinkIcons(){
    const classes = makeStyles(theme => linkIconStyles(theme))()

    return(
        <Grid container direction={'column'} spacing={1} alignItems={'flex-end'} className={classes.linkIconsContainer}>
            <Grid item>
                <IconButton href={'https://www.linkedin.com/in/joshua-wright-29089a94/'} target={'_blank'}>
                    <img src={'https://jwright-images.s3-us-west-1.amazonaws.com/linkedin+icon.png'} className={classes.linkIcons} alt={'Linkedin'}/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton href={'https://github.com/Jwright707'} target={'_blank'}>
                    <img src={'https://jwright-images.s3-us-west-1.amazonaws.com/github_icon.png'} style={{borderRadius: 50}} className={classes.linkIcons} alt={'Github'}/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton href={'https://www.facebook.com/josh.wright.961'} target={'_blank'}>
                    <img src={'https://jwright-images.s3-us-west-1.amazonaws.com/social-facebook-2019-circle-512.webp'} className={classes.linkIcons} alt={'Facebook'}/>
                </IconButton>
            </Grid>
        </Grid>
    )
}
