import React, { Component } from 'react';
import { Container,Col } from 'reactstrap';
import { BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import Paginacion from '../Paginacion/index';
import Pag1 from './Pag1';
import Pag2 from './Pag2';
import Pag3 from './Pag3';
import { createBrowserHistory } from "history";

const historial = createBrowserHistory();

class Productos extends Component {
    render() {
      
      
      return ( 
       
      <div className="no">
        

        <Router history={historial}>
                      <Switch>
                          <Route  exact path="/productos" render={() => <Pag1 />} />
                          <Route   path="/productos/pag2" render={() => <Pag2 />}  />
                          <Route   exct path="/productos" render={() => <Pag3 />} /> 
                        </Switch>  
              </Router>


               <Container >
                  <Col sm="12" md={{ size: 6, offset: 3 }}><Paginacion /></Col>
              </Container>
        

      </div>
    );}
}

export default Productos;