import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgGrava from '../Img/imgGrava.jpg'


class InterfazGrava  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Gravas"
              CardImg={imgGrava}
              SubTitulo="Descripccion"
              Descripccion="En geología y en construcción, se denomina grava a las rocas 
              formadas por clastos de tamaño comprendido entre 2 y 64 milímetros. Pueden
               ser producidas por el ser humano, en cuyo caso suele denominarse «piedra 
               partida», o resultado de procesos naturales. En este caso, además, suele
                suceder que el desgaste natural producido por el movimiento en los lechos
                 de ríos haya generado formas redondeadas, en cuyo caso se conoce como
                  canto rodado. Existen también casos de gravas naturales que no son 
                 cantos rodados.	 "
              Precio="$500"
              CardOferta="Oferta"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazGrava;