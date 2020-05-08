import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
import  imgCedazo from '../Img/imgCedazo.jpg'


class InterfazCedazo  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Cedazo"
              CardImg={imgCedazo}
              SubTitulo="Descripccion"
              Descripccion="El cedazo harinero se compone de un aro ancho y delgado de 
              madera y de un fondo agujereado de diferente material según la operación
               y la especie de grano a cribar. El fondo del cedazo es de cerda o de seda
                más o menos tupido según la harina que se quiere sacar. Cuando se cierne
                la harina dos veces, la primera operación se hace con un cedazo claro de
                 cerda por lo común, que se llama cedazo de despajar. Con éste, se separa
                  el salvado más grueso y el cedazo tupido separa el más menudo y la 
                  harina gruesa a que se da el nombre de rollón. "
              Precio="$450"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazCedazo;