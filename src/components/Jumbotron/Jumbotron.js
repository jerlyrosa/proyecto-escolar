import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import  Tarjeta  from '../Card/Card';
import {  Row, Col } from 'reactstrap';

const Jum = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{props.title}</h1>
           <p className="lead">{props.text}</p>
           <Row>
        <Col><Tarjeta 
              // img src='logo.svg'
              cardTitle='Vision' 
              cardText='Desciptcion de la vision' />
              
              </Col>
        <Col><Tarjeta 
              // CardImg='./logo.svg'
              cardTitle='Mision' 
              cardText='Desciptcion de la mision' /></Col>
        <Col><Tarjeta 
              // CardImg='./logo.svg'
              cardTitle='Valores' 
              cardText='Desciptcion de los valores' /></Col>
        
      </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jum;
