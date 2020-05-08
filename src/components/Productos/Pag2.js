import React, { Component } from 'react';
import { Container,Alert } from 'reactstrap';
// import Carpinteria from './Compontes-productos/Carpinteria';
import Construcion from './Compontes-productos/Construcion';
// import Mecanica from './Compontes-productos/Mecanica'
// import Paginacion from '../Paginacion/index';


class Pag2 extends Component {
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
              <Construcion />
        </Container>


        
      </div>
    );}
}

export default Pag2;