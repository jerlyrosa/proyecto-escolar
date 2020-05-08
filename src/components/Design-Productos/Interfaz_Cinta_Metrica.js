import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgCintaMetrica from '../Img/imgCintaMetrica.jpg'


class InterfazCintaMetrica  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Cinta Metrica"
              CardImg={imgCintaMetrica}
              SubTitulo="Descripccion"
              Descripccion=" Instrumento de medida que consiste en una cinta flexible
               graduada y se puede enrollar, haciendo que el transporte sea más fácil.
                También se puede medir líneas y superficies curvas. Las cintas se fabrican
                 de diferentes materiales y diferentes longitudes."
              Precio="$250"
              CardOferta="Oferta"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazCintaMetrica;