import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgArena from '../Img/imgArena.jpg'


class InterfazArena  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Arena"
              CardImg={imgArena}
              SubTitulo="Descripccion"
              Descripccion="La arena es un conjunto de fragmentos sueltos de rocas o 
              minerales de pequeño tamaño. En geología se denomina arena al material 
              compuesto de partículas cuyo tamaño varía entre 0,063 y 2 mm. Una partícula
               individual dentro de este rango es llamada grano o clasto de arena. Una 
               roca consolidada y compuesta por estas partículas se denomina arenisca 
               (o psamita) o calcarenita, si los componentes son calcáreos.
                Las partículas por debajo de los 0,063 mm y hasta 0,004 mm se 
                denominan limo, y por arriba de la medida del grano de arena y hasta
                 los 64 mm se denominan grava.	 "
              Precio="$1000"
              CardOferta="Oferta"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazArena ;