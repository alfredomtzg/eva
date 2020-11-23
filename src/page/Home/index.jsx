
import React from 'react'
// material
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// components
import Image from '../../components/Image'
import ImageList from '../../components/ImageList'

// 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));

export default function Home() {

  const classes = useStyles();
 
  const takePictore = async (img) => {
    
    try {
      const response =  await fetch("https://fake-img-endpoint.vercel.app/api/preview")
      console.log(response.url)
      
    } catch (error) { 
      console.log(error);
    }
  }

  const printDate = ()=> {
    const fecha = new Date();
    
    console.log(fecha);
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <ImageList/>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Image printDate={printDate}/>
        </Grid>
        
      </Grid>
    </div>
  )
}
