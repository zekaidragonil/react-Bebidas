
import { useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";
import Receta from "../components/Receta";

const ListaRecetas = () =>{
  const { Recetas } = useContext(RecetasContext);

    
    return(

       <div className="row mt-5">
        {Recetas.map(receta =>(
         <Receta 
         key={receta.idDrink}
         receta={receta} />
        ))}
       </div>
    )
}

export default ListaRecetas;