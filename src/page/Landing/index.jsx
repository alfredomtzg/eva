import React, {useState, useContext} from 'react'
// Material
import Grid from '@material-ui/core/Grid'
import AppBarMenu from '../../components/AppBarMenu'
import {FormControl, FormLabel, TextField, FormHelperText} from '@material-ui/core'
// Style
import './index.css'
// Context
import {Context} from '../../utils/Context'

export default function Landing() {
  const {valueName, setValueName} = useContext(Context)

  

  

  return (
    < >
      <AppBarMenu title="Bienvenido"/>
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
        foto {valueName}
        
      </Grid>
    </Grid>
    </>

  )
}
