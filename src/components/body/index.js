import React, { Component } from 'react';
import { BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import Productos from '../Productos/index';
import Inicio from '../Inicio/index';
import Nosotros from '../Nosotros/index';
import Login from '../Login/index';
import InterfazArena from '../Design-Productos/Interfaz_Arena';
import InterfazAlambreDulce from '../Design-Productos/Interfaz_Alambre_Dulce';
import InterfazAlucin from '../Design-Productos/Interfaz_Alucin';
import InterfazBlockConcreto  from '../Design-Productos/Interfaz_Block_Concreto';
import InterfazCarretilla from '../Design-Productos/Interfaz_Carretilla';
import InterfazCedazo from '../Design-Productos/Interfaz_Cedazo'
import InterfazCementoBlanco   from '../Design-Productos/Interfaz_Cemento_Blanco';
import InterfazCementoCibao  from '../Design-Productos/Interfaz_Cemento_Cibao';
import InterfazCementoTitan   from '../Design-Productos/Interfaz_Cemento_Titan';
import InterfazCincel  from '../Design-Productos/Interfaz_Cincel';
import InterfazCintaMetrica from '../Design-Productos/Interfaz_Cinta_Metrica';
import InterfazClavoAcero from '../Design-Productos/Interfaz_Clavos_Acero';
import InterfazClavoDulce from '../Design-Productos/Interfaz_Clavos_Dulces';
import InterfazCortadorCeramica from '../Design-Productos/Interfaz_Cortador_Ceramica';
import InterfazCubo  from '../Design-Productos/Interfaz_Cubo';
import InterfazGrapas   from '../Design-Productos/Interfaz_Grapa';
import InterfazGrava  from '../Design-Productos/Interfaz_Gravas';
import InterfazLlana  from '../Design-Productos/Interfaz_Llana';
import InterfazMadera  from '../Design-Productos/Interfaz_Madera'
import InterfazMazo  from '../Design-Productos/Interfaz_Mazo';
import InterfazNivel  from '../Design-Productos/Interfaz_Nivel';
import InterfazPala  from '../Design-Productos/Interfaz_Pala';
import InterfazPaleta   from '../Design-Productos/Interfaz_Paleta';
import InterfazPico  from '../Design-Productos/Interfaz_Pico';
import InterfazSegueta  from '../Design-Productos/Interfaz_Segueta';
import InterfazSerrucho  from '../Design-Productos/Interfaz_Serrucho';
import InterfazSin   from '../Design-Productos/Interfaz_Sin';
import InterfazTuboPrecion from '../Design-Productos/Interfaz_Tubo_Precion';
import InterfazTuboSemiPrecion   from '../Design-Productos/Interfaz_Tubo_Semi_Precion';
import InterfazVarilla   from '../Design-Productos/Interfaz_Varilla';

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
                          <Route  path="/nosotros"  component={Nosotros} />
                          <Route  path="/login" render={() => <Login/>} /> 
                          <Route  path="/ruta_Arena" render={() => <InterfazArena/>} />
                          <Route   path="/ruta_AlambreDulce" render={() =>< InterfazAlambreDulce/>}/>
                          <Route  path="/ruta_CementoCibao" render={() => <InterfazCementoCibao />} />
                          <Route  path="/ruta_Varilla" render={() => <InterfazVarilla/>} />



                          <Route  path="/ruta_Alucin" render={() => <InterfazAlucin/>} />


                          <Route  path="/ruta_BlockConcreto" render={() => <InterfazBlockConcreto/>} />
                          <Route  path="/ruta_Carretilla" render={() => <InterfazCarretilla/>} />
                          <Route  path="/ruta_InterfazCedazo" render={() => <InterfazCedazo/>} />
                          <Route  path="/ruta_InterfazCementoBlanco " render={() => <InterfazCementoBlanco />} />
                 
                          <Route  path="/ruta_CementoTitan" render={() => <InterfazCementoTitan />} />
                          <Route  path="/ruta_Cincel" render={() => <InterfazCincel />} />
                          <Route  path="/ruta_CintaMetrica" render={() => <InterfazCintaMetrica/>} />
                          <Route  path="/ruta_ClavoAcero" render={() => <InterfazClavoAcero/>} />
                          <Route  path="/ruta_ClavoDulce" render={() => <InterfazClavoDulce/>} />
                          <Route  path="/ruta_CortadorCeramica" render={() => <InterfazCortadorCeramica />} />
                          <Route  path="/ruta_Cubo" render={() => <InterfazCubo />} />
                          <Route  path="/ruta_InterfazGrapas" render={() => <InterfazGrapas/>} />
                          <Route  path="/ruta_InterfazGrava" render={() => <InterfazGrava />} />
                          <Route  path="/ruta_Llana" render={() => <InterfazLlana/>} />
                          <Route  path="/ruta_Madera" render={() => <InterfazMadera />} />
                          <Route  path="/ruta_Mazo" render={() => <InterfazMazo />} />
                          <Route  path="/ruta_Nivel" render={() => <InterfazNivel/>} />
                          <Route  path="/ruta_Pala" render={() => <InterfazPala />} />
                          <Route  path="/ruta_Paleta" render={() => <InterfazPaleta/>} />
                          <Route  path="/ruta_Pico" render={() => <InterfazPico />} />
                          <Route  path="/ruta_Segueta" render={() => <InterfazSegueta />} />
                          <Route  path="/ruta_Serrucho" render={() => <InterfazSerrucho/>} />
                          <Route  path="/ruta_Sin" render={() => <InterfazSin />} />
                          <Route  path="/ruta_TuboPrecion" render={() => <InterfazTuboPrecion/>} />
                          <Route  path="/ruta_TuboSemiPrecion" render={() => <InterfazTuboSemiPrecion/>} />
                       

 
                         
                        </Switch> 
              </Router>



          
   

</div>

      );
    }
}

export default Body;