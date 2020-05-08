import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgPaleta from '../Img/imgPaleta.jpg'


class InterfazPaleta  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Paleta"
              CardImg={imgPaleta}
              SubTitulo="Descripccion"
              Descripccion="La paleta de albañil, también conocida como palustre o cuchara
               de albañil, es una herramienta usada en albañilería formada por una lámina 
               metálica de forma triangular, sujetada por un mango de madera que se emplea 
               para aplicar y manejar el mortero y la argamasa. ​​ Si es pequeña, se suele 
               denominar paletín.  "
              Precio="$400"
              CardOferta="Oferta"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazPaleta;