import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jum = (props) => {
  return (
    <div>
      <Jumbotron fluid >
        <Container fluid>
          <h1 className="display-3">Bienvenidos</h1>
          <p className="lead">Esto esss un aplicacion web con el fin de dar publicidad a UNESIS.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jum;