import React from 'react'
//importacion de librerias necesarias para context
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
//importaciond e componentes
import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <NavBar/> {/**siempre lo mostrara ya q esta afuera del Switch */}
                    
                    <div className="container">
                    <Switch> {/**depende la url cambiara de componente */}
                        
                        <Route exact path="/about" component={AboutScreen} /> {/**el exact obligas a la coincidencia exacta*/}
                        <Route exact path="/login" component={LoginScreen} />

                        <Route exact path="/" component={HomeScreen} /> {/**costumbre dejar la pagina 
                         * mas general abajo */}
                         <Redirect to="/"/>
                        <Route component={HomeScreen}/> {/*si no encuentra la direccion redirecciona aqui */}
                        
                    </Switch>

                    </div>
                </div>
            </Router>
        </div>
    )
}
