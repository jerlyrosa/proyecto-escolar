import React, { Component } from 'react';
import { Container,Badge, Col, Row  } from 'reactstrap';
import Tarjeta from '../../Design/Tarjeta';
import imgSerrucho from '../../Img/imgSerrucho.jpg'
import imgCintaMetrica from '../../Img/imgCintaMetrica.jpg'
import imgCedazo from '../../Img/imgCedazo.jpg'
import imgBlockConcreto from '../../Img/imgBlockConcreto.jpg'
import imgTuvoPrecion from '../../Img/imgTuvoPrecion.jpg'
import imgPala from '../../Img/imgPala.jpg'
import imgCementoBlanco from '../../Img/imgCementoBlanco.jpg'
import ImgSin from '../../Img/imgSin.jpg'







class Construcion extends Component {
    render() {
      
      
      return ( 
       
      <div className="nosotros">
        
        <Container  >
                    <div>
                    <Badge color="primary" style={{ padding:' 10px 50px 10px 50px ', margin:'50px'}}>
                      <h3>
                      Materiales De Construcion
                      </h3>
                      </Badge>
                      </div>
                
                  </Container> 
                  

                  <Container >
                  <Row>
                  <Col xs="6" sm="3">
                    <Tarjeta  
                      CardImg={imgSerrucho}
                      CardTitle='Cerrucho' 
                      CardSubtitle='$400'
                      CardText='El cemento es un conglomerante formado a...'
                      Button='Mas Detalles'
                      Url='/ruta_Serrucho'
                    />
                    </Col>

                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgBlockConcreto}
                      CardTitle='Block Concreto' 
                      CardSubtitle='$ 500'
                      CardText='en la construcción de vivienda de interés...'
                      Button='Mas Detalles'
                      Url='/ruta_BlockConcreto'/>
                  </Col> 
                   <Col sm="3">
                  <Tarjeta  
                      CardImg={imgCintaMetrica}
                      CardTitle='Cinta Metrica' 
                      CardSubtitle='$ 250'
                      CardOferta="Oferta"
                      CardText='Instrumento de medida que consiste en...'
                      Button='Mas Detalles'
                      Url='/ruta_CintaMetrica'/>
                      
                  </Col>
                  
                  <Col xs="6" sm="3">
                    <Tarjeta  
                      CardImg={imgCedazo}
                      CardTitle='Cedazo' 
                      CardSubtitle='$450'
                      CardText='El cedazo harinero se compone de un...'
                      Button='Mas Detalles'
                      Url='/ruta_Cedazo'
                    />
                    </Col>
                 
                    <Col xs="5" sm="3">
                  <Tarjeta  
                      CardImg={imgTuvoPrecion}
                      CardTitle='Tuvo de Precion' 
                      CardSubtitle='$50'
                      CardText='Las tuberías de presión conducen el...'
                      Button='Mas Detalles'
                      Url='/ruta_TuvoPrecion'/>
                  </Col>
                 
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgPala}
                      CardTitle='Pala' 
                      CardSubtitle='$ 500'
                      CardText='Es una herramienta de mano utilizada...'
                      Button='Mas Detalles'
                      Url='/ruta_Pala'
                      
                      />
                  </Col>
                     
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgCementoBlanco}
                      CardTitle='Cemento Blanco' 
                      CardSubtitle='$ 50'
                      CardText='Es un tipo de cemento portland de un color...'
                      Button='Mas Detalles'
                      Url='/ruta_CementoBlanco'/>
                      
                  </Col>
                  
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={ImgSin}
                      CardTitle='Cinc' 
                      CardSubtitle='$ 250'
                      CardText='El Cinc es un Metal de color gris azulado...'
                      Button='Mas Detalles'
                      Url='/ruta_Sin'/>
                      
                  </Col>
                  </Row>
                  </Container>
 
            

        

      </div>
    );}
}

export default Construcion;