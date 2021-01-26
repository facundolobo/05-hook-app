import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

import "../02-useEffect/effects.css" //importamos el css

export const MultipleCustomHooks = () => {
    const {counter,increment} = useCounter(1) //usamos el contador ya creado

    const { loading ,data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` ); //enviamos el link para que devuelva los datos de imagen
    
    const { author ,quote } = !!data && data[0] // si existe la data, extrae la posicion 0 de la data 
    
    //console.log(author ,quote); 

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                loading ? (
                <div className="alert alert-info text-center">
                    loading...
                </div>

                ):(
                <blockquote className="blockquote text-right">
                    <p className="mb-0" >{quote}</p>
                    <p>

                    </p>
                    <footer className="blockquote-footer"> {author} </footer>
                </blockquote>

                )
            }
            <button 
            className="btn btn-primary"
            onClick={increment}> 
                siguiente quote
            </button>
        </div>
    )
}