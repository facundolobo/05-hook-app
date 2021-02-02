import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        
                        <Route exact path="/about" component={AboutScreen} /> {/**el exact obligas a la coincidencia exacta*/}
                        <Route exact path="/login" component={LoginScreen} />

                        <Route exact path="/" component={HomeScreen} /> {/**costumbre dejar la pagina 
                         * mas general abajo */}

                        
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
