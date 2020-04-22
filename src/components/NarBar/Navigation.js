import React, { Component } from 'react';
import {Navbar, FormControl,Button,Form,Nav} from 'react-bootstrap';
// import { BrowserRouter as Router, Route,Link} from 'react-router-dom';



class Navigation extends Component {
render() {
    
    return (  
          <div className="Navigation"  >
            
             <Navbar bg="dark" variant="dark"  >
                 <Navbar.Brand href="/">UNESIS</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href='/'>Inicio</Nav.Link>
                    <Nav.Link  href='/productos'>Productos</Nav.Link>
                    <Nav.Link href='/nosotros'>Nosotros</Nav.Link>
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