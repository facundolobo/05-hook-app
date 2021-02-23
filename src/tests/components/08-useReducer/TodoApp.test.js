import React from 'react';
import { act } from "@testing-library/react";
import { shallow } from "enzyme";

import { mount } from "enzyme"; //debemos usar una libreria mas antigua para q funciones el mount

import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoApp/>', () => {
    const wrapper= shallow(<TodoApp/>)
    test('debe de mostrarce correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })
   
    // test('debe de agregar un TODO ', () => {
    //     const wrapper= mount(<TodoApp />);
        
        
        
        
    //     //cuando necesitamos probar la app en contexto, osea en general
    //     act(()=>{
    //         //nos vinculamos a handleAddTodo
    //         // de todoApp y enviamos un un objeto demoTodos[0]
    //         wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
    //         wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1])
    //     });
    //     expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)')
    //     expect(localStorage.setItem).toBeCalledTimes(2);
       
    // })
    test('Debe de borrar un todo ', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id)
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)')
    })
    
})
