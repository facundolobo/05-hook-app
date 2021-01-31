import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './style.css';

const initialState =[{
    id: new Date().getTime(),
    desc: 'Aprender React', 
    done: false  //done = hecho
}]


export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState);

    console.log(todos);

    return (
        <div>
           <h1>TodoApp</h1> 
           <hr/>
           <ul>
               <li>hola</li>
               <li>mundo</li>
               <li>hola de nuevo</li>
           </ul>

        </div>
    )
}
