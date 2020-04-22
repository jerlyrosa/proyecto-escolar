import React, { Component } from 'react';
import Jum from './Design/Jumbotron'
import Tarjeta from './Design/Tarjeta'
import {   Col, Row, Container,Button } from 'reactstrap';
import { Badge } from 'reactstrap';
import './index.css';

// import  img from '../Img/img.png';
// import  img2 from '../Img/img2.jpeg'
import  img3 from '../Img/img3.jpg'

class Inicio extends Component {
    render() {
      
      
      return ( 
       
      <div className="inicio">
          
                <Row >
                  <Col sm={{size: 10, offset:1}}><Jum/></Col>
                </Row>
             
                <Container >
                    <div>
                      <h3>Productos
                      <Badge color="danger">Nuevo</Badge>
                      </h3>
                      </div>
                
                  </Container> 
                 
                  <Container>
                  <Row>
                  <Col xs="6" sm="3">
                    <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 1' 
                      CardSubtitle='$ Precio'
                      CardText='Descripcion breve'
                      Button='Mas Detalles'
                    />
                    </Col>
                  <Col xs="5" sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 2' 
                      CardSubtitle='$ Precio'
                      CardText='Descripcion breve'
                      Button='Mas Detalles'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 3' 
                      CardSubtitle='$ Precio'
                      CardText='Descripcion breve'
                      Button='Mas Detalles'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 3' 
                      CardSubtitle='$ Precioo'
                      CardText='Descripcion breve'
                      Button='Mas Detalles'/>
                  </Col>

                  <Container >
                    <div>
                      <h3>Productos en 
                      <Badge color="success">Ofertas</Badge>
                      </h3>
                      </div>
                  </Container> 

                  <Col xs="6" sm="3">
                    <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 1' 
                      CardSubtitle='$ Precio'
                      CardText='Descripcion breve'
                      Button='Mas Detalles'
                    />
                    </Col>
                    
                  <Col xs="5" sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 2' 
                      CardSubtitle='$ Precio'
                      CardText='Descripcion breve'
                      Button='Mas Detalles'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 3' 
                      CardSubtitle='$ Precio'
                      CardText='Descripcion breve'
                      Button='Mas Detalles'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 3' 
                      CardSubtitle='$ Precioo'
                      CardText='Descripcion breve'
                      Button='Mas Detalles'/>
                  </Col>

              <Container> <div>
                      <h3>Productos  
                      <Badge color="warning">Limitados</Badge>
                      </h3>
                      </div>
                      </Container>
                  <Col xs="6" sm="3">
                    <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 1' 
                      CardSubtitle='$ Precio'
                      CardText='Descripcion breve'
                      Button='Mas Detalles'
                    />
                    </Col>
                    
                  <Col xs="5" sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 2' 
                      CardSubtitle='$ Precio'
                      CardText='Descripcion breve'
                      Button='Mas Detalles'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 3' 
                      CardSubtitle='$ Precio'
                      CardText='Descripcion breve'
                      Button='Mas Detalles'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={img3}
                      CardTitle='Producto 3' 
                      CardSubtitle='$ Precioo'
                      CardText='Descripcion breve'
                      Button='Mas Detalles'/>
                  </Col>

                  
                </Row>
                  </Container>

                  <Button color="primary">Productos</Button>
                </div>
              );}
}

export default Inicio;