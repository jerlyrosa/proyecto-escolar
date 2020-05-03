import React, { Component } from 'react';
import { BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import Productos from '../Productos/index';
import Inicio from '../Inicio/index';
import Nosotros from '../Nosotros/index';
 import InterfazProducto from '../Design-Productos/index';
import { createBrowserHistory } from "history";

const historial = createBrowserHistory();

class Body extends Component {
    render() {
      
      return ( 
       
      <div className="body">
              <Router history={historial}>
                {/* <Switch>
                   <Route  path="/" exactcomponent={Inicio} />
                    <Route  path="/productos"exact component={Productos} />
                    // 
                    </Switch>  */}

                      <Switch>
                          <Route exact path="/" render={() => <Inicio />} />
                          <Route path="/productos" render={() => <Productos/>} />
                          <Route  path="/nosotros" exact component={Nosotros} />
                          {/* <Route exct path="/nostros" render={() => <Nosotros/>} />  */}
                          <Route component={InterfazProducto } />
                        </Switch> 
              </Router>

      
          
   

</div>

      );
    }
}

export default Body;