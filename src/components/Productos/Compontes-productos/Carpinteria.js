import React, { Component } from 'react';
import { Container, Col, Row  } from 'reactstrap';
import Tarjeta from '../../Design/Tarjeta';


import  imgCortadorCeramica from '../../Img/imgCortadorCeramica.jpg';
import  imgVarilla from '../../Img/imgVarilla.jpg'
import  imgCementoCibao from '../../Img/imgCementoCibao.jpg' 
import  imgAlambreDulce from '../../Img/imgAlambreDulce.jpg'
import  imgArena from '../../Img/imgArena.jpg'
import  imgMadera from '../../Img/imgMadera.jpg'
import  imgGrava from '../../Img/imgGrava.jpg'
import  imgPaleta from '../..//Img/imgPaleta.jpg'
import  imgLlana from '../../Img/imgLlana.jpg'
import  imgCarretilla from '../../Img/imgCarretilla.jpg'
import  imgSegueta from '../../Img/imgSegueta.jpg'
import  imgMazo from '../../Img/imgMazo.jpg'
import  imgNivel from '../../Img/imgNivel.jpg'
import  imgGrapas from '../../Img/imgGrapas.jpg'
import  imgCementoTitan from '../../Img/imgCementoTitan.jpg'
import  imgClavosAcero from '../../Img/imgClavosAcero.jpg'
import  imgCubo from '../../Img/imgCubo.jpg'
import  imgClavosDulce from '../../Img/imgClavosDulce.jpg'
import  imgCincel from '../../Img/imgCincel.jpg'
import  imgTuboSemiPrecion from '../../Img/imgTuboSemiPrecion.jpg'


class Carpinteria extends Component {
    render() {
        return (
            <div className="nosotros">

                  
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


                  <Col xs="6" sm="3">
                    <Tarjeta  
                      CardImg={imgArena}
                      CardTitle='Arena' 
                      CardSubtitle='$ 1000'
                      CardOferta="Oferta"
                      CardText='La arena es un conjunto de fragmentos sueltos...'
                      Button='Mas Detalles'
                      Url='/ruta_Arena'
                    />
                    </Col>
                    
                  <Col xs="5" sm="3">
                  <Tarjeta  
                      CardImg={imgGrava}
                      CardTitle='Gravas' 
                      CardSubtitle='$ 500'
                      CardText='En geología y en construcción, se deno...'
                      Button='Mas Detalles'
                      Url='/ruta_Grava'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgMadera}
                      CardTitle='Madera' 
                      CardSubtitle='$ 350'
                      CardText='Está constituida por el conjunto de tejido...'
                      Button='Mas Detalles'
                      Url='/ruta_Madera'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgPaleta}
                      CardTitle='Paleta' 
                      CardSubtitle='$ 400'
                      CardText='La paleta de albañil, también conocida...'
                      Button='Mas Detalles'
                      Url='/ruta_Paleta'/>
                  </Col>


                  <Col xs="6" sm="3">
                    <Tarjeta  
                      CardImg={imgLlana}
                      CardTitle='Llana' 
                      CardSubtitle='$ 300'
                      CardLimitado='Limitado'
                      CardText='Es una herramienta usada en albañilería...'
                      Button='Mas Detalles'
                      Url='/ruta_Llana'
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
                      Url='/ruta_Segueta'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgMazo}
                      CardTitle='Mazo' 
                      CardSubtitle='$ 250'
                      CardLimitado='Limitado'
                      CardText='Un mazo o combo es una herramienta de...'
                      Button='Mas Detalles'
                      Url='/ruta_Mazo'
                      />
                  </Col>
                  <Col xs="6" sm="3">
                    <Tarjeta  
                      CardImg={imgNivel}
                      CardTitle='Nivel' 
                      CardSubtitle='$ 450'
                      CardText='Un nivel es un instrumento de medición...'
                      Button='Mas Detalles'
                      Url='/ruta_Nivel'
                    />
                    </Col>
                    
                  <Col xs="5" sm="3">
                  <Tarjeta  
                      CardImg={imgGrapas}
                      CardTitle='Grapas' 
                      CardSubtitle='$ 50'
                      CardText='Objeto metálico en forma de U con sus ...'
                      Button='Mas Detalles'
                      Url='/ruta_Grapas'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgCementoTitan}
                      CardTitle='Cemento Titan' 
                      CardSubtitle='$ 320'
                      CardOferta="Oferta"
                      CardText='Es un cemento Portland Tipo elaborado con...'
                      Button='Mas Detalles'
                      Url='/ruta_CementoTitan'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgClavosAcero}
                      CardTitle='Clavos De Acero' 
                      CardSubtitle='$ 50'
                      CardText='Puntilla o punto es un objeto delgado...'
                      Button='Mas Detalles'
                      Url='/ruta_ClavosAcero'

                      
                      />
                  </Col>
                  <Col xs="6" sm="3">
                    <Tarjeta  
                      CardImg={imgCubo}
                      CardTitle='Cubo' 
                      CardSubtitle='$ 250'
                      CardText='Es un producto que se utiliza en tareas...'
                      Button='Mas Detalles'
                      Url='/ruta_Cubo'
                    />
                    </Col>
                    
                  <Col xs="5" sm="3">
                  <Tarjeta  
                      CardImg={imgClavosDulce}
                      CardTitle='Clavos Dulce' 
                      CardSubtitle='$ 50'
                      CardOferta="Oferta"
                      CardText='Es un producto que se utiliza en tareas...'
                      Button='Mas Detalles'
                      Url='/ruta_ClavosDulce'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgCincel}
                      CardTitle='Cincel' 
                      CardSubtitle='$ 200'
                      CardText='El puntero de cantero es un tipo de cincel ...'
                      Button='Mas Detalles'
                      Url='/ruta_Cincel'/>
                  </Col>
                  <Col sm="3">
                  <Tarjeta  
                      CardImg={imgTuboSemiPrecion}
                      CardTitle='Tubos de Seni Precion' 
                      CardSubtitle='$ 50'
                      CardText='Las tuberías de presión conducen el...'
                      Button='Mas Detalles'
                      CardOferta="Oferta"
                      Url='/ruta_TuboSemiPrecion'

                      
                      />
                  </Col>

                  
                </Row>
                  </Container>

 
            

        

      </div>
    );}
}

export default Carpinteria;