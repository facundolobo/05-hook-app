import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import {TodoItem} from './TodoItem.js'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

import './style.css';



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

    const handleAddTodo=(newTodo)=>{
        
        dispatch( {
            type:'add',
            payload: newTodo
        } );
    }



    return (
        <div className="row"> 
           <h1>TodoApp ({todos.length})</h1> 
           <hr/>
            
            <div className="col-7">
            
                <TodoList
                todos={todos} 
                handleDelete = {handleDelete} 
                handleToggle={handleToggle} 
                />
            
            </div>
            
            <div className="col-5">
                <TodoAdd
                handleAddTodo={handleAddTodo}
                />
            </div>

            
        </div>    
        
            

    )
}
