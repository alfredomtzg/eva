
import React, {useContext} from 'react'

import Image from '../../components/Image'
import ImageList from '../../components/ImageList'
import {Context} from '../../utils/Context'

export default function Home() {
   const {carruselImage} = useContext(Context)
 
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
    <>
      <Image printDate={printDate}/>
      <ImageList/>
      
    </>
  )
}
