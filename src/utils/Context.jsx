import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  

  const [image, setImage] = useState("")
  const [carruselImage, setCarruselImage]= useState([
    {
      image: "https://fake-img-endpoint.vercel.app/api/preview",
      date: "Sun Nov 22 2020 14:39:27 ",
      risk: "low",
    },
    {
      image: "https://fake-img-endpoint.vercel.app/api/preview",
      date: "Sun Nov 22 2020 14:39:27 ",
      risk: "low",
    },
    {
      image: "https://fake-img-endpoint.vercel.app/api/preview",
      date: "Sun Nov 22 2020 14:39:27 ",
      risk: "low",
    },
  ])
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