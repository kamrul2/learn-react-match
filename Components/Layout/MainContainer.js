import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LessonOne from '../Lessons/LessonOne'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 500,
  },
}));

export default function MainContainer(){

  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={3} >
      <Paper className={classes.paper}>
      </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper className={classes.paper}>
          <LessonOne />
        </Paper>
      </Grid>
    </Grid>
  );
}