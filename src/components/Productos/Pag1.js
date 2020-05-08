import React, { Component } from 'react';
import { Container,Alert } from 'reactstrap';
import Carpinteria from './Compontes-productos/Carpinteria';
// import Paginacion from '../Paginacion/index';


class Pag1 extends Component {
    render(prosp) {
      
      
      return ( 
       
      <div className="pag">
            <Container>
                <Alert color="primary" >
                      <h1>
                        Productos
                        </h1>
                      </Alert>
                      </Container>
        <Container>

              <Carpinteria />

        </Container>


        
      </div>
    );}
}

export default Pag1;