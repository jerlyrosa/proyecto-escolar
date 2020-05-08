import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgCarretilla from '../Img/imgCarretilla.jpg'


class InterfazCarretilla  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Carretilla"
              CardImg={imgCarretilla}
              SubTitulo="Descripccion"
              Descripccion="La carretilla de una sola rueda frontal está diseñada para 
              distribuir el peso de la carga entre la rueda y el trabajador, lo que
               permite llevar cargas más pesadas que si tuvieran que ser transportadas 
               totalmente por la persona. Se utiliza comúnmente en la industria de la
                construcción y en jardinería."
              Precio="$2000"
              CardLimitado='Limitado'
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazCarretilla;