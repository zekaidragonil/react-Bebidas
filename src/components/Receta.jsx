import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Receta = ({receta}) => {
   
    const { setIdrecta }  = useContext(ModalContext)

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">
                    {receta.strDrink}
                </h2>
                <img className="card-img-top" src={receta.strDrinkThumb}  />
                 <div className="card-body">
                    <button
                      className="btn btn-block btn-primary"
                      onClick={e =>{ setIdrecta(receta.idDrink);
                        handleOpen();}}

                      > 
                     Ver Receta
                    </button >
                   
                 </div>
            </div>
        </div>
     );
}
 
export default Receta;