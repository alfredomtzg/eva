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
  // SnackBar
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [severityValue, setSeverityValue] = useState("success");
  const [snackBarMessage, setSnackBarMessage]= useState('image taken successfully')

  // SnackBar handleClose
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar(false);
  };

  // data paciente
  const [valueName, setValueName] =useState("");

 // return Value
  return (
    <Context.Provider
      value={{
        carruselImage, 
        setCarruselImage,
        image, 
        setImage,
        openSnackBar,
        setOpenSnackBar,
        severityValue, 
        setSeverityValue,
        handleCloseAlert,
        snackBarMessage, 
        setSnackBarMessage,
        valueName, 
        setValueName
      }}
    >
      {children}
    </Context.Provider>
  );
};