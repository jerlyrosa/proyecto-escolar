import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgCementoTitan from '../Img/imgCementoTitan.jpg'


class InterfazCementoTitan  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Cemento Titan"
              CardImg={imgCementoTitan}
              SubTitulo="Descripccion"
              Descripccion="Es un cemento Portland Tipo elaborado con caliza y arcilla 
              cuidadosamente seleccionadas por su pureza y bajo contenido de óxido de 
              hierro "
              Precio="$320"
              CardOferta="Oferta"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazCementoTitan;