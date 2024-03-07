import React, {  useState, useContext, useEffect } from "react";
import { CategoriaContext } from "../context/CategoriaContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () =>{ 
    const [busqueda, setGuardar] = useState({
        nombre: '',
        categoria: '' 
  });  

 const {categorias } =  useContext(CategoriaContext);   
 const {setBusqueda, setConsultar } =  useContext(RecetasContext);   


  const obtenerDatos = e =>{

    setGuardar({
        ...busqueda,
      [e.target.name ] : e.target.value

    })
  }


    return(
       <>
       <form className="col-12" onSubmit={ e => {
         e.preventDefault();
        setBusqueda(busqueda)
        setConsultar(true);
        }}>
        <fieldset className="text-center">
            <legend>Busca bebidas por Categoria o Ingrediente</legend>
        </fieldset>
        <div className="row">
            <div className="col-md-4  mt-4">
                <input type="text"
                 className="form-control"
                 name="nombre"
                 placeholder="Buscar pro ingrediente"
                 onChange={obtenerDatos}
                />
            </div>
            <div className="col-md-4  mt-4">
                <select 
                 className="form-control"
                 name="categoria"
                 onChange={obtenerDatos}
                >
                <option value="">--seleciona--</option>
                 {categorias.map(item=>(
                    <option 
                     key={item.strCategory}
                    value={item.strCategory}>{item.strCategory}</option>
                 ))}     
                </select>
            </div>
            <div className="col-md-4  mt-4">
                <input type="submit"
                className="btn btn-block btn-primary"
                 value="Buscar Recetas"
                />
            </div>
        </div>
       </form>

       </> 
       
    )
}

export default  Formulario;