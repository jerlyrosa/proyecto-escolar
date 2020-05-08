import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgCortadorCeramica from '../Img/imgCortadorCeramica.jpg';


class InterfazCortadorCeramica extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Cortador Ceramica  "
              CardImg={imgCortadorCeramica}
              SubTitulo="Descripccion"
              Descripccion="Un cortador cerámico no es más que una sierra para mampostería 
              que permite cortar limpiamente ladrillos, azulejos, baldosas, etc. El corte 
              se realiza sin astillar el material y a la medida que sea precisa. "
              Precio="$3000"
              CardNuevo='Nuevo'
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazCortadorCeramica ;