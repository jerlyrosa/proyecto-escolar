import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgClavosDulce from '../Img/imgClavosDulce.jpg'


class InterfazClavoDulce  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Clavo Dulce"
              CardImg={imgClavosDulce}
              SubTitulo="Descripccion"
              Descripccion="Son clavos con cabeza estriada, gruesos y de gran solidez.
               Lo tenemos disponible en diferentes calibres. "
              Precio="$50"
              CardOferta="Oferta"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazClavoDulce;