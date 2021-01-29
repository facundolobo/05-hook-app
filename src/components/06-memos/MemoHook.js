import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';


import "../05-useLayoutEffect/Layout.css";


export const MemoHook = () => {

    const {counter,increment} =useCounter(500);
    const [show, setShow] = useState(true);



    // Use memo para que no tenga que realizar de nuevo el 
    // proceso pesado al cambiar otra variable q no utiliza

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]); /*ejecutara 
    "procesoPesado" de la carpeta helpers sí "counter cambia" */


    //----------------------
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small> { counter } </small> </h3>  
            <hr/>

            <p> {memoProcesoPesado} {/* invocacion de la funcion For */}</p>
            
            <button 
                className="btn btn-primary "
                onClick={increment}
            >+1 </button>


            <button className="btn btn-outline-primary ml-3"
            onClick={() => {
                setShow(!show)
            }}
            >
                show/hide{JSON.stringify( show )}

            </button>


        </div>
    )
}
