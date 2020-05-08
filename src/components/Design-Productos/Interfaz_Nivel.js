import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgNivel from '../Img/imgNivel.jpg'


class InterfazNivel  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Nivel"
              CardImg={imgNivel}
              SubTitulo="Descripccion"
              Descripccion="Un nivel es un instrumento de medición que se utiliza para 
              determinar la horizontalidad o verticalidad de un elemento. Existen 
              distintos tipos y son utilizados por agrimensores, carpinteros, albañiles,
               herreros, trabajadores del aluminio, Fotógrafos y otros. "
              Precio="$450"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazNivel;