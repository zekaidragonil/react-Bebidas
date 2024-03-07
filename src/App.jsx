
import React, { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import CategoriasProvider from "./context/CategoriaContext"
import RecetasProvider from "./context/RecetasContext"
import ListaRecetas from "./components/ListaRecetas"
import ModalProvider from './context/ModalContext'

function App() {
 
  return (
    <>
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
       
      <Header /> 
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <ListaRecetas />
        </div>
      </div>
      </ModalProvider>
      </RecetasProvider>
      </CategoriasProvider>
     </>
  )
}

export default App
