import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

  const [image, setImage] = useState("")
  const [carruselImage, setCarruselImage]= useState([])
 // return Value
  return (
    <Context.Provider
      value={{
        carruselImage, 
        setCarruselImage,
        image, 
        setImage
      }}
    >
      {children}
    </Context.Provider>
  );
};