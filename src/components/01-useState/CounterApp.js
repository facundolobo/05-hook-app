import React, { useState } from 'react';
import './counter.css';


export const CounterApp = () => {

    const [state, setState] = useState({ //definimos todo dentro del state
    counter1 : 10,
    counter2 : 20,
    counter3 : 30,
    counter4 : 40
 })
    //const [{ counter1 , counter2 }, setCounter] = useState( {counter1: 10 ,counter2 : 20} ); //recordar declararlo 
    const {counter1,counter2} = state; // extraemos las variables del state para usarlas 

    return (
        <>
          <h1>Counter1 {counter1} </h1>
          <h1>Counter2 {counter2} </h1>
            <hr/>  
          

            <button 
            className="btn btn-primary"
            onClick={() => {
                setState({
                    
                ...state,   //extraer todas las propiedades con "...state" se llama operador "spread"
                counter1 : counter1 +1 //solo modificamos uno  

            })
            }}
            >
              +1 
            </button>  
        </>
    )
}
