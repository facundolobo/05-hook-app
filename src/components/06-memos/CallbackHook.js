import React, { useCallback, useEffect, useState } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrements } from './ShowIncrements';


export const CallbackHook = () => {
    
    const [counter, setCounter] = useState(10);

    // const increment = () =>{
    // setCounter( counter + 1 )
    // }

    //Funcion increment con callback 
    
    /**esta funcion  */
    const increment = useCallback( (num)=> {
        setCounter( c => c + num ); //cambiamos "counter + 1 "
    },[setCounter]) 
    //-----

    useEffect (()=>{
        //??
    },[increment])


    return (
        <div>
            <h1>UseCallBack Hook: {counter}</h1>
            <hr/>

            <ShowIncrements increment={increment}/>

        </div>

    )
}
