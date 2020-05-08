import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgSegueta from '../Img/imgSegueta.jpg'


class InterfazSegueta  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Segueta"
              CardImg={imgSegueta}
              SubTitulo="Descripccion"
              Descripccion="Se denomina segueta o sierra manual a una herramienta manual
               de corte que está compuesta de dos elementos diferenciados. De una parte
                está el arco o soporte donde se fija mediante tornillos tensores la hoja 
                de segueta y la otra parte es la hoja de segueta que proporciona el corte. "
              Precio="$50"
              CardLimitado='Limitado'
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazSegueta;