import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgMazo from '../Img/imgMazo.jpg'


class InterfazMazo extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Mazo"
              CardImg={imgMazo}
              SubTitulo="Descripccion"
              Descripccion="Un mazo o combo es una herramienta de mano que sirve para
               golpear o percutir; tiene la forma de un martillo, pero es de mayor tamaño
                y peso. Mientras que el martillo cumple su principal papel dentro de la 
                carpintería, el mazo lo desempeña en la industria de la: construcción o
                 en la albañilería."
              Precio="$250"
              CardLimitado='Limitado'
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazMazo;