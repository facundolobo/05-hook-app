import React, { useEffect,useState } from 'react'

export const Menssage = () => {

//------------------------------------------

const [coords, setCoords] = useState({x:0 , y: 0}) //instancia de variables
const {x, y} = coords;    

    
    //------------------------------------------    
        useEffect(() => { //solo se activa al escribir 123 en nombre.

            //funcion para devolver las coordenadas x e y 
            const mouseMove = (e) => {
                
                const coords = {x: e.x , y:e.y} //obtiene las coordenadas del mouse
                setCoords(coords) //actualiza las coordenadas del mouse 
        
            }
            
            window.addEventListener('mousemove' , mouseMove ) //agrega un escuchador al movimiento de mouse 

        return () => { //cuando ya se desmonta el efecto  
            
            window.removeEventListener('mousemove', mouseMove ) //remueve el escuchador
        }
        }, []) 
    //------------------------------------------------


    return (
        <div>
            <h3>Eres Genial!</h3>
            <p>
                x: {x} , y{y} 
            </p>
        </div>
    )
}
