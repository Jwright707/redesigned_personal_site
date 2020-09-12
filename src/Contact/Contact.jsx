import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {contactStyles} from "../styles/contactStyles";
import { Form, Field } from "react-final-form"
import {emailResponse} from "../actions/Contact";
import {useDispatch} from "react-redux";

export default function Contact(props){
    const classes = makeStyles(theme => contactStyles(theme))()
    const dispatch = useDispatch();

    const onSubmit = (values) => {
        emailResponse(values, dispatch)
    }

    return (
        <Grid container direction={'row'} style={{flexWrap: 'nowrap'}} className="App">
            <Grid item container xs={6} className={classes.leftSideDashboardContainer}/>
            <Grid item container xs={6} className={classes.rightSideDashboardContainer}/>
            <Grid item container xs={12} style={{position: 'absolute', top: '25%'}} direction={'column'} justify={'center'} alignItems={'center'} alignContent={'center'}>
                <Form
                    onSubmit={onSubmit}
                    render={({handleSubmit, form, values, submitting, pristine}) => (
                        <form onSubmit={handleSubmit}>
                            <Grid item container direction={'column'} justify={'center'} spacing={1}>
                                <Grid item>
                                    <label className={classes.label}> Name </label>
                                </Grid>
                                <Grid item container>
                                    <Field
                                        name="name"
                                        component="input"
                                        type="text"
                                        className={classes.inputAreas}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'column'} justify={'center'}  style={{paddingTop: 25}} spacing={1}>
                                <Grid item>
                                    <label className={classes.label}> Email </label>
                                </Grid>
                                <Grid item container>
                                    <Field
                                        name="email"
                                        component="input"
                                        type="text"
                                        className={classes.inputAreas}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'column'} justify={'center'}  style={{paddingTop: 25}} spacing={1}>
                                <Grid item>
                                    <label className={classes.label}> Message </label>
                                </Grid>
                                <Grid item container>
                                    <Field
                                        name="message"
                                        component="textarea"
                                        type="text"
                                        className={classes.messageArea}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container justify={'center'} style={{paddingTop: 25}}>
                                <button type="submit" className={classes.contactButton} disabled={submitting || pristine}>
                                    Send Message
                                </button>
                            </Grid>
                        </form>
                    )}
                />
            </Grid>
        </Grid>
    )
}