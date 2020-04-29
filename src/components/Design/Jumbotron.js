import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jum = (props) => {
  return (
    <div>
      <Jumbotron fluid >
        <Container fluid>
          <h1 className="display-3">{props.Titulo}</h1>
          <p className="lead">{props.Descripcion}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jum;