import axios from "axios";
import React, { createContext,  useEffect, useState } from "react";

export const CategoriaContext = createContext();

// provider es donde se encuentran las funciones y state

const CategoriasProvider = (props) => {
    const  url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    const [ categorias, setCategoria ] = useState([]);


  useEffect(()=>{
  
    const Categoria = async () =>{
     const response = await axios.get(url);
     setCategoria(response.data.drinks)
      
  } 
  Categoria();

 },[])


    return(
        <CategoriaContext.Provider
         value={{
            categorias

         }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )

}

export default CategoriasProvider
