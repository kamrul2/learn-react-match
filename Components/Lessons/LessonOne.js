import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function LessonOne() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="input number" variant="outlined"/>
      <Typography variant="h6" className={classes.title}>
            +
       </Typography>
       <TextField id="outlined-basic" label="input number" variant="outlined" />
       <br/>
      <Button variant="contained" color="primary">
        Secondary
      </Button>
      <br/>
       <TextField id="outlined-basic" label="Total" variant="outlined" />
    </form>
  );
}