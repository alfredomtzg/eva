import React, { useContext } from 'react';
// material
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
// Context
import {Context} from '../../utils/Context'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));


const SnackBar = () =>{
const {openSnackBar, severityValue,handleCloseAlert} = useContext(Context);
  const classes = useStyles();


  

  

  return (
    <div className={classes.root}>
      <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={severityValue}>
          This is a success message!
        </Alert>
      </Snackbar>
  </div>
  );
}

export default SnackBar;