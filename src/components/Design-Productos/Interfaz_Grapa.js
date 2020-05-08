import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgGrapas from '../Img/imgGrapas.jpg'


class InterfazGrapas  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Grampas"
              CardImg={imgGrapas}
              SubTitulo="Descripccion"
              Descripccion="Objeto metálico en forma de U con sus extremos afilados.
               Se usa para unir dos piezas contiguas, como tablas o planchas y también 
               para mantener adheridos a una superficie objetos filiformes. Existen 
               algunas de pequeñas dimensiones que se usan para unir papeles . "
              Precio="$50"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazGrapas;