import React from 'react';
// material
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',

  },
}));

export default function Loading() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}
