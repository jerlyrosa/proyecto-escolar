import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jum = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Bienvenidos</h1>
          <p className="lead">Este un sitio web disenado para mostrar...</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jum;
