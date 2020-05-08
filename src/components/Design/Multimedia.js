import React from 'react';
import { Container, Row, Col,CardImg,Badge, Button,Media } from 'reactstrap';

const Multimedia = (props) => {
  return (
    <Container  style={{ marginBottom:'55px', marginTop:'25px'}}>
      <Row>
       <Col><h1>{props.Titulo}</h1></Col>
      </Row>
      <Container style={{  marginTop:'40px'}}>
      <Row>
        <Col xs="6"> <CardImg top width="100%" src={props.CardImg} alt="Card image cap" /></Col>
        <Col xs="6">      <Media body>
        <Media heading>
        {props.SubTitulo}
        </Media>
        
        {props.Descripccion}
      </Media>
   <h2>
      <Badge color="primary" pill style={{ marginBottom:'5px', marginTop:'55px'}}>{props.Precio}</Badge>
      <Badge color="success" pill>{props.CardOferta}</Badge>
      <Badge color="danger" pill>{props.CardNuevo}</Badge>
      <Badge color="warning" pill>{props.CardLimitado}</Badge></h2>
     </Col>

      </Row>
      <Button href={props.Url}color="primary" id="toggler" style={{ marginBottom: '1rem',marginTop:'40px' }}>
            {props.Button}
         </Button>
      </Container>

    </Container>
  );
}

export default Multimedia;