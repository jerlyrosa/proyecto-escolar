import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgPala from '../Img/imgPala.jpg'


class InterfazPala  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Pala"
              CardImg={imgPala}
              SubTitulo="Descripccion"
              Descripccion="Es una herramienta de mano utilizada para excavar o mover materiales con cohesión 
              relativamente pequeña. Consta, básicamente, de una lámina plana con una ligera 
              curvatura y de un mango de metal o madera con el que se maneja."
              Precio="$500"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazPala;