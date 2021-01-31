import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    //estado del formulario
    const [{description}, handleInputChange, reset]=useForm({
        description: ''

    });


    const handleSubmit = (e) =>{

        e.preventDefault();//evista le posteo de formulario o reflesh

        //funcion si no escribio nada no lo guarda
        if(description.trim().length <=1){
            return;
        }


        const newTodo ={
            id: new Date().getTime(),
            desc: description, 
            done: false  //done = hecho
        };

        handleAddTodo( newTodo );
        reset(); //borra lo que estaba en el input

    }



    return (
        <>
            <h4>
                    agregar TODO
                </h4>
                <hr/>

                {/* formulario apra agregar una tarea */}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="aprender..."
                        autoComplete="off"

                        value={description}
                        onChange={handleInputChange}
                    />
                    <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                    >
                        Agregar
                    </button>
                </form>
        </>
    )
}
