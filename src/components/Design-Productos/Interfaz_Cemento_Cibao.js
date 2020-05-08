import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgCementoCibao from '../Img/imgCementoCibao.jpg'


class InterfazCementoCibao  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Cemento Cibao"
              CardImg={imgCementoCibao}
              SubTitulo="Descripccion"
              Descripccion="Es un cemento especial para la producción de concretos 
              estructurales, tales como los destinados para columnas, vigas, losas,
               muros y cimentaciones en todo tipo de edificaciones y obras, así como
                concretos para pavimentos y pisos industriales. "
              Precio="$290"
              CardNuevo='Nuevo'
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazCementoCibao;