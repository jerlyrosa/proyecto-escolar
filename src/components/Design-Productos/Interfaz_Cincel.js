import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgCincel from '../Img/imgCincel.jpg'


class InterfazCincel  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Cincel"
              CardImg={imgCincel}
              SubTitulo="Descripccion"
              Descripccion="El puntero de cantero es un tipo de cincel que es una 
              barra de acero con punta endurecida. Se sujeta con una mano mientras se 
              golpea su extremo con una maceta. Los albañiles lo utilizan para desbastar
               o preparar superficies en las que se van a realizar otros trabajos. "
              Precio="$200"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazCincel;