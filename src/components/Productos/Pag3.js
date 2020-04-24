import React, { Component } from 'react';
import { Container,Alert } from 'reactstrap';
// import Carpinteria from './Compontes-productos/Carpinteria';
// import Construcion from './Compontes-productos/Construcion';
// import Mecanica from './Compontes-productos/Mecanica'
// import Paginacion from '../Paginacion/index';


class Pag3 extends Component {
    render(prosp) {
      
      
      return ( 
       
      <div className="pag2">
            <Container>
                <Alert color="dark" >
                      <h1>
                        Productos
                        </h1>
                      </Alert>
                      </Container>
        <Container>

           <h1>No hay mas elementos</h1>

        </Container>


        
      </div>
    );}
}

export default Pag3;