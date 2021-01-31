import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './style.css';

const initialState =[{
    id: new Date().getTime(),
    desc: 'Aprender React', 
    done: false  //done = hecho
}]


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    console.log(todos);

    const handleSubmit = (e) =>{
        e.preventDefault();//evista le posteo de formulario o reflesh
        console.log('nueva tarea');

        const newTodo ={
            id: new Date().getTime(),
            desc: 'Nueva tarea', 
            done: false  //done = hecho
        };

        const action = {
            type:'add',
            payload: newTodo
        }
        dispatch( action );

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
                            <p className="text-center ">{i +1}. {todo.desc} </p>
                            <button className="btn btn-danger">
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
