import React, { Component } from "react";

import Multimedia from '../Design/Multimedia'
// import  img from '../Img/img3.jpg'


class InterfazAlucin  extends Component {
    render() { 
      return (     
          <div className="interfazProducto">

            <Multimedia
              Titulo="Alucin"
              // CardImg={img3}
              SubTitulo="Descripccion"
              Descripccion="es una aleación de aluminio y zinc. Esta fusión de metales es
               utilizada con frecuencia como capa de recubrimiento anticorrosivo para 
               láminas de acero que son destinadas a cubrir el exterior de los techos. 
               La composición se patentó por primera vez por una firma norteamericana 
               llamada Bethlehem Steel a principios de los años 1960. "
              Precio="$500"
              Button=' Ver Mas Productos'
              Url='/productos'
            />
            </div>
      );}
    }


export default InterfazAlucin;