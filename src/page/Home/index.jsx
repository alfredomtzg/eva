
import React, {useEffect, useState, useContext} from 'react'
// material
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// components
import Image from '../../components/Image'
import ImageList from '../../components/ImageList'
import SnackBar from '../../components/SnackBar'
import AppBarMenu from '../../components/AppBarMenu';
import BackDrop from '../../components/Backdrops'
//Context
import { Context } from '../../utils/Context';

 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  
}));

export default function Home() {
  const {setOpen} = useContext(Context)

  const classes = useStyles();
  const [imageCamara, setImageCamara] = useState("")
 
  const takePictore = async (img) => {

    
    try {
      const response =  await fetch("https://fake-img-endpoint.vercel.app/api/preview")
      console.log(response.url)
      setImageCamara(response.url)
      setOpen(false)
      
    } catch (error) { 
      console.log(error);
    }
  }

  const printDate = ()=> {
    const fecha = new Date();
    console.log(fecha);
  }
  useEffect(() => {
    takePictore()
  }, [])


  return (
    <>
    <AppBarMenu title="Diagnostico"/>
      <div className={classes.root}>
      <Grid container spacing={1}  justify="center" alignItems="center" >
        <Grid item xs={12} sm={6}>
          <ImageList/>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Image printDate={printDate} buttonContent="Save" image={imageCamara} />
        </Grid>
        <BackDrop/>
        <SnackBar/>
      </Grid>
    </div>
    </>
  )
}
