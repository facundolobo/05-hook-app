import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

import "../02-useEffect/effects.css" 

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);//variable de estado para mostrar 
    
    

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>
            
            {show && <MultipleCustomHooks /* si es true lo muestra */ /> }
        
        <button 
        className="btn btn-primary mt-5"
        onClick={() => {
            setShow(!show) //cambiamos el valor de show
        }}
        >
        Show Hide
        </button>
        </div>
    )
}
