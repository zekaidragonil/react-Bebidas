import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const ModalContext = createContext();


const ModalProvider = (props) => {
const [idrectas , setIdrecta] = useState('');
const [detalle , setDetalles] = useState({});

useEffect(()=>{
 
    const detalles = async () => {
    if(!idrectas){
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrectas}`
        const respuesta = await axios.get(url);
        setDetalles(respuesta.data.drinks[0]);         
    }
   
 } 
 detalles()

},[idrectas])

    return ( 
        <ModalContext.Provider
        value={{
            setIdrecta,
            detalle
        }}
        >
          {props.children}
        </ModalContext.Provider>

     );
}
 
export default ModalProvider