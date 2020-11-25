import React, {useContext} from 'react';
// Material
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button'
// Context
import {Context } from '../../utils/Context'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

export default function Image({printDate, buttonContent}) {
  const {setOpenSnackBar,setSeverityValue} = useContext(Context)
  const classes = useStyles();

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://fake-img-endpoint.vercel.app/api/preview"
          title="Contemplative Reptile"
        />
        

      </CardActionArea>
      <CardActions>
        <Button   onClick={()=> {
          printDate();
          setSeverityValue('success');
          setOpenSnackBar(true)
        } 
          }  variant="outlined" color="secondary">
          <PhotoCamera />
          {buttonContent}
        </Button>
      </CardActions>
    </Card>
    
    </>
  );
}
