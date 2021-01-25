
import React, { useEffect, useState } from 'react';
import { Menssage } from './Menssage';
import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
      })
      
      const {name,email} = formState;

      useEffect(( ) =>{ 
        // console.log('Hey!')
      },[] )   //solo se ejecutara una vez en console

      useEffect(( ) =>{ 
        // console.log('formState cambio')
      },[formState] )//sirve para escuchar cambios especificos de nuestro state en este caso "formState"

      useEffect(( ) =>{ 
        // console.log('email cambio')
      },[email] ) //en este caso "email" recordar que ya lo tenemos desestructurado

      //es una funcion para que el input se escriba en tiempo real
      const handleInputChange=({target}) =>{ //desestructuramos target para obtener los parametros
    
        setFormState({//esto escribira todos los datos q ingrese en el input
            
            ...formState, 
    
            [target.name] : target.value  
        
        })
              
    }
    return (
        <>
            <h1>useEffect</h1>  
            <hr/>

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="from-control"
                    placeholder="tu nombre"
                    autoCapitalize="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>


            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="from-control"
                    placeholder="email@gmail.com"
                    autoCapitalize="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {name === '123' && <Menssage/>}  
        </>
    )
}
