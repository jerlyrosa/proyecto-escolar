import React, { Component } from 'react';
import { Container,Badge, Col, Row  } from 'reactstrap';
import Tarjeta from '../../Design/Tarjeta';
import img3 from '../../Img/img3.jpg'



class Carpinteria extends Component {
    render() {
        return (
            <div className="nosotros">

<Container>
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
                      CardImg={img3}
                      CardTitle='Cemento' 
                      CardSubtitle='$400'
                      CardText='El cemento es un conglomerante formado a...'
                      Button='Mas Detalles'
                    />
                    </Col>
                   
                    <Col xs="5" sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Cemento blanco' 
                      CardSubtitle='$500'
                      CardText='El cemento blanco es un tipo de cemento...'
                      Button='Mas Detalles'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 3' 
                      CardSubtitle='$ Precio'
                      CardText='Descripcion breve del producto del producto'
                      Button='Mas Detalles'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 3' 
                      CardSubtitle='$ Precioo'
                      CardText='Descripcion breve del producto'
                      Button='Mas Detalles'/>
                      
                  </Col>
                  <Col xs="6" sm="3">
                    <Tarjeta  
                      CardImg={img3}
                      CardTitle='Cemento' 
                      CardSubtitle='$400'
                      CardText='El cemento es un conglomerante formado a...'
                      Button='Mas Detalles'
                    />
                    </Col>
                   
                    <Col xs="5" sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Cemento blanco' 
                      CardSubtitle='$500'
                      CardText='El cemento blanco es un tipo de cemento...'
                      Button='Mas Detalles'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 3' 
                      CardSubtitle='$ Precio'
                      CardText='Descripcion breve del producto del producto'
                      Button='Mas Detalles'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 3' 
                      CardSubtitle='$ Precioo'
                      CardText='Descripcion breve del producto'
                      Button='Mas Detalles'/>
                      
                  </Col>
                  
                  </Row>
                    </Container>
        
      </div>





            
          );}
      }
      
      export default Carpinteria;