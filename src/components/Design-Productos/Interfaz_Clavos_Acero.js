import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgClavosAcero from '../Img/imgClavosAcero.jpg'


class InterfazClavoAcero  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Clavo de Acero"
              CardImg={imgClavosAcero}
              SubTitulo="Descripccion"
              Descripccion=" Puntilla o punto es un objeto delgado y alargado con punta
               filosa hecho de un metal duro (por lo general acero), utilizado para 
               sujetar dos o más objetos. Un clavo puede ser clavado sobre el material a
                trabajar utilizando un martillo."
              Precio="$50"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazClavoAcero;