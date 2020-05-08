import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgMadera from '../Img/imgMadera.jpg'


class InterfazMadera  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Madera"
              CardImg={imgMadera}
              SubTitulo="Descripccion"
              Descripccion="Está constituida por el conjunto de tejido que forman la masa
               de los troncos de los árboles, desprovistos de su corteza. Es el material 
               de construcción más ligero, resistente y fácil de trabajar, utilizado por 
               el hombre desde los primeros tiempos."
              Precio="$350"
              CardOferta="Oferta"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazMadera;