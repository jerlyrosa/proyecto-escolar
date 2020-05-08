import React, { Component,  } from 'react';
import Jum from '../Design/Jumbotron'
import Tarjeta from '../Design/Tarjeta'

import {   Col, Row, Container,Button } from 'reactstrap';
import { Badge } from 'reactstrap';
import './index.css';

import  imgCortadorCeramica from '../Img/imgCortadorCeramica.jpg';
import  imgVarilla from '../Img/imgVarilla.jpg'
import  imgCementoCibao from '../Img/imgCementoCibao.jpg' 
import  imgAlambreDulce from '../Img/imgAlambreDulce.jpg'
import  imgArena from '../Img/imgArena.jpg'
import  imgMadera from '../Img/imgMadera.jpg'
import  imgGrava from '../Img/imgGrava.jpg'
import  imgPaleta from '../Img/imgPaleta.jpg'
import  imgLlana from '../Img/imgLlana.jpg'
import  imgCarretilla from '../Img/imgCarretilla.jpg'
import  imgSegueta from '../Img/imgSegueta.jpg'
import  imgMazo from '../Img/imgMazo.jpg'




class Inicio extends Component {


     

  render() {
      
      
      return ( 
       
      <div className="inicio">
          
                <Row >
                  <Col >
                    <Jum
                    Titulo='Bienvenidos a UNESIS'
                    Descripcion='Esto es un aplicacion web con el fin de dar publicidad 
                    nuestra empresa  UNESIS.'
                  />
                
                  
                  </Col>
                </Row>
             
                <Container  style={{marginTop:'50px'}} >
                    <div>
                      <h3>Productos
                      <Badge color="danger">Nuevo</Badge>
                      </h3>
                      </div>
                
                  </Container> 
                 
                  <Container >
                  <Row>
                  <Col xs="6" sm="3">
                    <Tarjeta  
                      CardImg={imgCortadorCeramica}
                      CardTitle='Cortador Ceramica' 
                      CardSubtitle='$3000'
                      CardNuevo='Nuevo'
                      CardText='Un cortador cerámico no es más que  mampostería ...'
                      Button='Mas Detalles'
                      ButtonTitulo='Titulo'
                      Url='/ruta_CortadorCeramica'
                    />
                    </Col>
                   
                  <Col xs="5" sm="3">
                  <Tarjeta  
                      CardImg={imgAlambreDulce}
                      CardTitle='Alambre Dulce' 
                      CardSubtitle='$100 '
                      CardNuevo='Nuevo'
                      CardText='Alambre de acero obtenido por trefilación...'
                      Button='Mas Detalles'
                      Url='/ruta_AlambreDulce'
                      />
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgCementoCibao}
                      CardTitle='Cemento Cibao' 
                      CardSubtitle='$ 290'
                      CardNuevo='Nuevo'
                      CardText='Es un cemento especial para la producción'
                      Button='Mas Detalles'
                      Url='/ruta_CementoCibao'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgVarilla}
                      CardTitle='Varilla' 
                      CardSubtitle='$ 200'
                      CardNuevo='Nuevo'
                      CardText='La varilla corrugada es una clase de acero'
                      Button='Mas Detalles'
                      Url='/ruta_Varilla'/>
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
                      CardImg={imgArena}
                      CardTitle='Arena' 
                      CardSubtitle='$ 1000'
                      CardText='La arena es un conjunto de fragmentos sueltos...'
                      CardOferta="Oferta"
                      Button='Mas Detalles'
                      Url='/ruta_Arena'
                    />
                    </Col>
                    
                  <Col xs="5" sm="3">
                  <Tarjeta  
                      CardImg={imgGrava}
                      CardTitle='Gravas' 
                      CardOferta="Oferta"
                      CardSubtitle='$ 500'
                      CardText='En geología y en construcción, se deno...'
                      Button='Mas Detalles'
                      Url='ruta_Gravas'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgMadera}
                      CardTitle='Madera' 
                      CardSubtitle='$ 350'
                      CardOferta="Oferta"
                      CardText='Está constituida por el conjunto de tejido...'
                      Button='Mas Detalles'
                      Url='ruta_Madera'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgPaleta}
                      CardTitle='Paleta' 
                      CardSubtitle='$ 400'
                      CardOferta="Oferta"
                      CardText='La paleta de albañil, también conocida...'
                      Button='Mas Detalles'
                      Url='ruta_Paleta'/>
                  </Col>

              <Container> <div>
                      <h3>Productos  
                      <Badge color="warning" >Limitados</Badge>
                      </h3>
                      </div>
                      </Container>
                  <Col xs="6" sm="3">
                    <Tarjeta  
                      CardImg={imgLlana}
                      CardTitle='Llana' 
                      CardSubtitle='$ 300'
                      CardLimitado='Limitado'
                      CardText='Es una herramienta usada en albañilería...'
                      Button='Mas Detalles'
                      Url='ruta_Llana'
                    />
                    </Col>
                    
                  <Col xs="5" sm="3">
                  <Tarjeta  
                      CardImg={imgCarretilla}
                      CardTitle='Carretilla' 
                      CardSubtitle='$ 2000'
                      CardLimitado='Limitado'
                      CardText='La carretilla de una sola rueda frontal...'
                      Button='Mas Detalles'
                      Url='/ruta_Carretilla'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgSegueta}
                      CardTitle='Segueta' 
                      CardSubtitle='$ 50'
                      CardLimitado='Limitado'
                      CardText='Se denomina segueta o sierra manual...'
                      Button='Mas Detalles'
                      Url='ruta_Segueta'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgMazo}
                      CardTitle='Mazo' 
                      CardSubtitle='$ 250'
                      CardLimitado='Limitado'
                      CardText='Un mazo o combo es una herramienta de...'
                      Button='Mas Detalles'
                      Url='ruta_Mazo'

                      
                      />
                  </Col>

                  
                </Row>
                  </Container>
                  

                  
                 
                
                    <Button color="primary"variant="outline-info" href='/productos'>Productos</Button>
               
                  
                </div>
              );}
}

export default Inicio;

