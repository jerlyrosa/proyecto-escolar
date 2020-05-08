import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgLlana from '../Img/imgLlana.jpg'


class InterfazLlana  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Llana"
              CardImg={imgLlana}
              SubTitulo="Descripccion"
              Descripccion="Es una herramienta usada en albañilería, formada por una 
              superficie plana, lisa y metálica sujetada por un asa. Según la forma de
               la superficie plana, hay de diversos tipos: dentada, redonda, etcétera. "
              Precio="$300"
              CardLimitado='Limitado'
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazLlana;