import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgVarilla from '../Img/imgVarilla.jpg'


class InterfazVarilla  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Varilla"
              CardImg={imgVarilla}
              SubTitulo="Descripccion"
              Descripccion="La varilla corrugada es una clase de acero laminado diseñado
               especialmente para construir elementos estructurales de concreto armado.
                Se trata de barras de acero que presentan resaltos o corrugas que mejoran
                 la adherencia con el concreto, y poseen una gran ductilidad, la cual 
                 permite que las barras se puedan cortar y doblar con mayor facilidad. "
              Precio="$200"
              CardNuevo='Nuevo'
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazVarilla;