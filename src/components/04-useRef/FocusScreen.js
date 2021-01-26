import React, { useRef } from 'react'
import "../02-useEffect/effects.css"


export const FocusScreen = () => {
    
    //useRef--------
    const inputRef = useRef(); // useRef puede cambiar a lo q apunta sin necesidad de renderizar de nuevo
     
    //-----------

    //esto cambia el focus al input--------
    const handleClick = () => {
        inputRef.current.select(); //puede ser select o focus 
        console.log(inputRef)
    }
    //--------------------------------------


    return (
        <div>
            
            <h1>Focus Screen</h1>
             <input 
             ref={inputRef} // apuntamos aqui 
             className ="form-control"
             placeholder = "Su nombre"
             />

             <button
                className="btn btn-outline-primary mt-5"
                onClick={handleClick } 
             > 
                Focus </button>


        </div>
    )
}
