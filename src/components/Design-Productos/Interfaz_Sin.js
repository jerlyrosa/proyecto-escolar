import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgSin from '../Img/imgSin.jpg'


class InterfazSin  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Sin"
              CardImg={imgSin}
              SubTitulo="Descripccion"
              Descripccion="El Cinc es un Metal de color gris azulado, brillante, y de
               fractura cristalina en forma de hojas hexagonales. Pequeñas cantidades de 
               Hierro le comunican estructura fibrosa, y de Cobre, Aluminio y Cadmio,
                estructura granulada. "
              Precio="$250"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazSin;