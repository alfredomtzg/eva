import React, {useContext} from 'react';
// Router
import { Link } from 'react-router-dom';
// Material
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button'
import {useStyles} from '../Style'
// Context
import {Context } from '../../utils/Context'
import Fondo from '../../assets/imageGray.png'





export default function Image({printDate, buttonContent, image }) {
  const {setOpenSnackBar,setSeverityValue, } = useContext(Context)
  
  const classes = useStyles();

  return (
    <>
    <Card className={classes.image}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image|| Fondo }
          title="Contemplative Reptile"
        />
        

      </CardActionArea>
      <CardActions className={classes.justifyContent}>
        { (buttonContent === "da click para Comenzar")
        ? <Link to={'/home'} className={classes.menuButton}>
            <Button  variant="outlined" color="secondary" >
              <PhotoCamera /> 
              {buttonContent}
            </Button>
          </Link>
        : <Button   onClick={()=> {
          printDate();
          setSeverityValue('success');
          setOpenSnackBar(true)
        } 
          }  variant="outlined" color="secondary">
          <PhotoCamera />
          {buttonContent}
        </Button>
        }
        
      </CardActions>
    </Card>
    
    </>
  );
}
