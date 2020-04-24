import React, { Component } from 'react';
import { Container,Alert } from 'reactstrap';
import Carpinteria from './Compontes-productos/Carpinteria';
import Construcion from './Compontes-productos/Construcion';
import Mecanica from './Compontes-productos/Mecanica'
// import Paginacion from '../Paginacion/index';


class Pag1 extends Component {
    render(prosp) {
      
      
      return ( 
       
      <div className="pag">
            <Container>
                <Alert color="dark" >
                      <h1>
                        Productos
                        </h1>
                      </Alert>
                      </Container>
        <Container>

              <Carpinteria />
              <Construcion />
              <Mecanica />

        </Container>


        
      </div>
    );}
}

export default Pag1;