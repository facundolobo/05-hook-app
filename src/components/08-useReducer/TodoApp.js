import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './style.css';
import { useForm } from '../../hooks/useForm';



const init =() =>{
  
    //si existe el archivo en local store lo regresa, sino []
    return JSON.parse(localStorage.getItem('todos')) || [];;
  
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React', 
    //     done: false  //done = hecho
    // }]
}


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{description}, handleInputChange, reset]=useForm({
        description: ''

    });


    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos]);

    const handleDelete = (todoId)=>{
        //e.preventDefault();//evista le posteo de formulario o reflesh
        console.log(todoId);

        //crear la action
        
        
        
        const action = {
            type:'delete',
            payload: todoId //envia el id de la tarea asociada
        }
        // dispatch
        dispatch( action );
    }   

    //console.log(description);
    const handleToggle=(todoId)=>{
        dispatch({ //forma corta 
            type: 'toggle',
            payload:todoId
        })
    }
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

        const action = {
            type:'add',
            payload: newTodo
        }
        dispatch( action );
        reset(); //borra lo que estaba en el input

    }

    return (
        <div className="row"> 
           <h1>TodoApp ({todos.length})</h1> 
           <hr/>
            {/*primera columna */}
            <div className="col-7">
                <ul className="list-group list-group-flush"  > 
                {
                    todos.map( (todo,i )=> (
                        <li 
                            key={todo.id}
                            className=" list-group-item"
                        > 
                            <p 
                                className={`${todo.done && 'complete'}`}
                                onClick={()=>handleToggle(todo.id)}
                            >
                                {i +1}. {todo.desc} 
                            </p>
                            <button 
                            className="btn btn-danger"
                            onClick={()=>handleDelete(todo.id)} //envia el id de la tarea asociada
                            >
                                Borrar</button> 

                        </li>
                    ))
                }
                </ul>

            </div>
            {/*segunda columna */}
            <div className="col-5">
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
                {/*------------------------------------ */}
            </div>

        </div>
    )
}
