import React, {useState, useContext} from 'react'
// Material
import Grid from '@material-ui/core/Grid'
import AppBarMenu from '../../components/AppBarMenu'
import {FormControl,  TextField, FormHelperText, Typography} from '@material-ui/core'
// Components
import Image from '../../components/Image'
// Style
import './index.css'
// Context
import {Context} from '../../utils/Context'

export default function Landing() {
  const {valueName, setValueName} = useContext(Context)

  

  

  return (
    < >
      <AppBarMenu title="Bienvenido" landing/>
    <Grid container direction="row" justify="center" alignItems="center" spacing={1} className="containerScreen" >
      <Grid  item  sm={6} xs={12}  >
        <FormControl>
          
          <TextField
            autoFocus
            required
            label="Nombre del Paciente" 
            variant="filled" 
            value={valueName}
            onChange={(event)=>{setValueName(event.target.value)}}
          />

          <FormHelperText>Escriba el nombre completo del paciente</FormHelperText>
        </FormControl>
        
      </Grid>
      
      <Grid   item  sm={6} xs={12}  >
        
        <Image  buttonContent="da click para Comenzar" image="https://images.homify.com/c_fill,f_auto,q_0,w_740/v1526483607/p/photo/image/2561426/3.jpg"/>
        
      </Grid>
    </Grid>
    </>

  )
}
