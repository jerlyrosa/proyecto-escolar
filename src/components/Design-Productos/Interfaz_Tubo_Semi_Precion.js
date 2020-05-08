import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgTuboSemiPrecion from '../Img/imgTuboSemiPrecion.jpg'


class InterfazTuboSemiPrecion  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo=" Tubo Semi-Precion"
              CardImg={imgTuboSemiPrecion}
              SubTitulo="Descripccion"
              Descripccion="Las tuberías de presión conducen el agua desde la cámara de
               presión a las turbinas ya que, por causa de la altura del salto, se 
               necesita tal disposición para transformar la energía potencial de posición
                que tiene el agua en la cámara de presión, en energía potencial presión 
               que posee junto a la turbina y al final de la conducción forzada."
              Precio="$50"
              CardOferta="Oferta"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazTuboSemiPrecion;