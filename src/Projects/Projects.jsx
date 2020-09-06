import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useSelector} from "react-redux";

export default function Projects(){
    const state = useSelector(state => state.dashboard)
    console.log(state)
    return(
        <Grid container>
            Project Page
        </Grid>
    )
}