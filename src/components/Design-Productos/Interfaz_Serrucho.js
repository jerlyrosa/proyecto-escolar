import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgSerrucho from '../Img/imgSerrucho.jpg'


class InterfazSerrucho  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Serrucho"
              CardImg={imgSerrucho}
              SubTitulo="Descripccion"
              Descripccion="es una herramienta manual utilizada para practicar cortes,
               sobre todo en madera. ​ Además es un tipo de sierra de hoja dentada y 
               trapezoidal que por el extremo más ancho va unida a un solo mango de madera 
               o de plástico. Básicamente se divide en mango y arma (la parte metálica con
                 que se realiza el corte). "
              Precio="$250"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazSerrucho;