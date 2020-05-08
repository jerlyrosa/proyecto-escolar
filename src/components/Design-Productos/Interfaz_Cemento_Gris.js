import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  img3 from '../Img/img3.jpg'


class InterfazCementoGris  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Cemento Gris"
              CardImg={img3}
              SubTitulo="Descripccion"
              Descripccion="El cemento es un conglomerante formado a partir de una mezcla
               de caliza y arcilla calcinadas y posteriormente molidas, que tiene la 
               propiedad de endurecerse al contacto con el agua."
              Precio="$20"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazCementoGris;