import React, { Component } from 'react';
import {Navbar, FormControl,Button,Form,Nav} from 'react-bootstrap';


class Navigation extends Component {
render() {
    
    return (  
          <div className="Navigation">
              
             <Navbar bg="dark" variant="dark">
                 <Navbar.Brand href="#home">Master</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#Home">Inicio</Nav.Link>
                    <Nav.Link href="#features">Piezas</Nav.Link>
                    <Nav.Link href="#pricing">Nosotros</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                </Navbar>
                            
      </div>
      
    );          
  }
}



export default Navigation;