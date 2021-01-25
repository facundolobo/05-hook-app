//"use" se utiliza como convencion para los hooks

import React, { useState } from 'react'

export const useCounter = (inicialState = 10 ) => { //si no me envian el estado inicial lo inicializa en 0
    
    const [state, setstate] = useState(inicialState) //declaracion de estados

    const increment = (factor = 1 ) => {
        setstate( state + factor );
    }
    const decrement = (factor = 1) => {
        setstate( state - factor );
    }
    const reset =() =>{
        setstate (inicialState);
    }

    return{  //para extraer la logica de mi contador
        state,
        increment,
        decrement,
        reset
    } 

}
