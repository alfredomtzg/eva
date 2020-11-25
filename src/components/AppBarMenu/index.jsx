import React from 'react';
// Material
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Logo from '../../assets/logo/eva_logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color:' #fff',
  },
  menuButton: {
    marginRight: theme.spacing(1),
    textDecoration: 'none',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppBarMenu({title}) {
  const classes = useStyles();

  return (
    // container
    <Grid container spacing={1}>

      <Grid item xs={12} >
        <div className={classes.root}>

          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <img src={Logo} alt="Logo eva" width="100px" />
              </IconButton>

              <Typography variant="h6" className={classes.title}>
                {title}
              </Typography>

              <Link to={'/'} className={classes.menuButton}>
                <Button >
                  <CancelIcon />
                </Button>
              </Link>
              
            </Toolbar>
          </AppBar>
        </div>
      </Grid>
    </Grid>
  );
}
