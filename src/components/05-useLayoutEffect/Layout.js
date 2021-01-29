import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

import "./Layout.css" //importamos el css

export const Layout = () => {
    const {counter,increment} = useCounter(1) //usamos el contador ya creado

    const { data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` ); //enviamos el link para que devuelva los datos de imagen
    
    const { quote } = !!data && data[0] // si existe la data, extrae la posicion 0 de la data 
    
    const pTag = useRef();//creamos una referencia

    const [boxZise, setBoxZise] = useState()

    useLayoutEffect(()=>{
    
        setBoxZise( pTag.current.getBoundingClientRect() ); //esta funcion devuelde el anchor "width" 
    
    },[quote]) //cada vez q "quote" cambia la caja cambia de tamaño
    

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>

                <blockquote className="blockquote text-right">
                    
                    <p ref={pTag} className="mb-0" >{quote}</p>
                                       
                </blockquote>

            <button 
            className="btn btn-primary"
            onClick={increment}
            > 
                siguiente quote
            </button>

            <pre>
                {JSON.stringify(boxZise, null , 3)}
                {/* El método JSON.stringify() convierte un objeto o valor de JavaScript
                 en una cadena de texto JSON, opcionalmente reemplaza valores si se indica 
                 una función de reemplazo, o si se especifican las propiedades mediante un
                  array de reemplazo.*/}
            </pre>
        </div>
    )
}
