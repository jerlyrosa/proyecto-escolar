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
                          Brindar a nuestro cliente los mejores servicios; 
                          amplios portafolios de productos con las mejores marcas, 
                          excelente calidad y precios competitivos, con un equipo humano 
                          preparado para dar sus mejores servicios a nuestra comunidad y entorno.  
                            </CardText>
                    </CardBody>
                  </Card>
                  </Col> 
                    <Col>         
                      <Card>
                      <CardHeader>Vision</CardHeader>
                         <CardBody>
                          <CardText>
                          Buscamos como una empresa líder superar las expectativas
                           de nuestros clientes proyectándonos como una compañía competitiva 
                           que sea de aporte para el crecimiento económico y social de nuestra 
                           empresa.


                            </CardText>
                    </CardBody>
                  </Card>
                  </Col> 
                    <Col>         
                      <Card>
                      <CardHeader>Valores</CardHeader>
                        <CardBody>
                          <CardText> 
                          <Col>• Responsabilidad </Col>
                          <Col>• Honestidad</Col>
                          <Col>• Respeto</Col>
                          <Col>• Trabajo en equipo</Col>
                          <Col>• Pasión</Col>
                          <Col>• Amor </Col>
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