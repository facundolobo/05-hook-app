
import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css'

export const FormWithCustomHook = () => {

    //ahora esta funcion utiliza useForm para actualizar lo q dice el input
    const [formValue, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
      })
      
      const {name,email,password} = formValue; //desestructuramos
 
      //---------efecto nuevo 
      useEffect( ()=>{
          console.log('email cambió')
      }, [email])
      //----------
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValue)
      }

      //

    return (
        <form onSubmit= {handleSubmit}>
            <h1>FormWithCustomHook</h1>  
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

            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="from-control"
                    placeholder="****"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
}
