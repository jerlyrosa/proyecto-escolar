import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgCubo from '../Img/imgCubo.jpg'


class InterfazCubo  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Cubo"
              CardImg={imgCubo}
              SubTitulo="Descripccion"
              Descripccion="Es un producto que se utiliza en tareas de jardinería y 
              náutica por su gran durabilidad y su cómodo manejo. Se fabrica en color
               negro para albañilería, verde para jardinería y blanco para náutica."
              Precio="$250"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazCubo;