
import React, {useContext} from 'react'

import Image from '../../components/Image'
import {Context} from '../../utils/Context'


export default function ImageList() {
  const {carruselImage} = useContext(Context)
  return (
    <>
    {carruselImage.map((item, index)=>{
      return(
        <>
        <Image />
        </>
      )
    })}
    </>

  )
}