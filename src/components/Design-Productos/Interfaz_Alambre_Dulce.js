import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgAlambreDulce from '../Img/imgAlambreDulce.jpg'


class InterfazAlambreDulce  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Alambre Dulce"
              CardImg={imgAlambreDulce}
              SubTitulo="Descripccion"
              Descripccion="Alambre de acero obtenido por trefilación y con tratamiento 
              térmico posterior de recocido para otorgarle la debida ductilidad para su 
              fácil utilización posterior. "
              Precio="$100"
              CardNuevo='Nuevo'
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazAlambreDulce;