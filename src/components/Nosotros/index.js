import React, { Component } from 'react';
import Jum from '../Design/Jumbotron'
import ListaGrupo from '../Design/ListaGrupo'
import {
  Card,  CardText, CardBody,
  CardHeader,Col, Row, Container
} from 'reactstrap';

class Nosotros extends Component {
    render() { 
      return ( 
       
      <div className="nosotros">
         <Container>
                 <Jum
                    Titulo='Nosostros'
                    Descripcion='Esto es un aplicacion web con el fin de dar publicidad a UNESIS.'
                  />
                  {/* Contenedor especial de tarjeta nueva, no es reutilizable*/}
                 
                     <Row>
                     <Col>         
                      <Card>
                       <CardHeader header inverse color="primary">Mision </CardHeader>
                         <CardBody >
                          <CardText>
                              Lorem Ipsum Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem 
                              Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  
                              Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  
                            </CardText>
                    </CardBody>
                  </Card>
                  </Col> 
                    <Col>         
                      <Card>
                      <CardHeader>Vision</CardHeader>
                         <CardBody>
                          <CardText>
                            Lorem Ipsum Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem 
                            Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  
                            Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  
                            </CardText>
                    </CardBody>
                  </Card>
                  </Col> 
                    <Col>         
                      <Card>
                      <CardHeader>Valores</CardHeader>
                        <CardBody>
                          <CardText> 
                            Lorem Ipsum Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem 
                            Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  
                             Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum    
                        </CardText>
                    </CardBody>
                  </Card>
                  </Col> 
                 
      </Row>

      <ListaGrupo 
       Titulo="Cotactos"
       Item1='Telefono: 8092032716'
       Item2='Gmail: Unesis2020@gmail.com'
       Item3='Direccion: Los hornos, La Vega'
       Item4='Web:http://localhost:3000/'
      
      
      
      />
     
      </Container>
      </div>
    );}
}

export default Nosotros;