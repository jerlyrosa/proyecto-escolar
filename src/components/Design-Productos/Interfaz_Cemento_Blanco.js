import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgCementoBlanco from '../Img/imgCementoBlanco.jpg'


class InterfazCementoBlanco  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Cemento Blanco"
              CardImg={imgCementoBlanco}
              SubTitulo="Descripccion"
              Descripccion=" Es un tipo de cemento portland de un color gris muy claro 
              (blancura mayor del 85%),​ empleado tanto en piezas prefabricadas como en
               acabados de suelos y albañilería en general. "
              Precio="$20"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazCementoBlanco;