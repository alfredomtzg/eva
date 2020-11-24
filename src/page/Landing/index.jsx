import React, {useState} from 'react'
// Material
import Grid from '@material-ui/core/Grid'
import AppBarMenu from '../../components/AppBarMenu'
import {FormControl, FormLabel, TextField, FormHelperText} from '@material-ui/core'

export default function Landing() {

  const [valueName, setValueName] =useState({name:""});

  const hangleOnChange = (e)=>{
    console.log(e.target.value)

 

  }

  return (
    <Grid container spacing={1}>
     

      <AppBarMenu title="Bienvenido"/>
     
      <Grid  item xs={12} md={6}  >
        <FormControl>
          <FormLabel> Nombre del Paciente</FormLabel>
          <TextField
            id=""
            label=""
            value=""
            onChange={hangleOnChange}
          />

          <FormHelperText>Escriba el nombre completo del paciente</FormHelperText>
        </FormControl>
        
      </Grid>
      
    </Grid>
  )
}
