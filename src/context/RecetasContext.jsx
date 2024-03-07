import axios from "axios";
import React, { createContext, useState, useEffect } from "react";


export const RecetasContext = createContext();

const RecetasProvider = (props) =>{
   const [Recetas, setRecetas] = useState([]);  
   const [busqueda, setBusqueda] = useState({
      nombre: '',
      categoria: '' 
});  
const { nombre, categoria } = busqueda;
const [ consultar, setConsultar ] = useState(false);


useEffect(()=>{
    if(consultar){
    const obtnerFiltro = async () =>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}
     &c=${categoria}`;
    const response = await axios.get(url);
    setRecetas(response.data.drinks)
      }
  obtnerFiltro()
    }

 },[busqueda])

    
    return(
       <RecetasContext.Provider
        value={{
            setBusqueda,
            setConsultar,
            Recetas
            
        }}
       >
         {props.children}
       </RecetasContext.Provider>

    )
}
export default RecetasProvider