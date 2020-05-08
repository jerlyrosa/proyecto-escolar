import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgBlockConcreto from '../Img/imgBlockConcreto.jpg'


class InterfazBlockHueco  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Block Hueco"
              CardImg={imgBlockConcreto}
              SubTitulo="Descripccion"
              Descripccion="En la construcción de vivienda de interés social y de vivienda 
              comercial con muros de carga a base de block de concreto aparente para 
              fachadas y block común para interiores reforzados interiormente."
              Precio="$500"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazBlockHueco;