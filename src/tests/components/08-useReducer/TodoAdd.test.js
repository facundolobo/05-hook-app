import { shallow } from 'enzyme';
import React from 'react'; //imr
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';
describe('Prueba en <TodoAdd/>', () => {
    
    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />)

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('No debe de llamar handleAddTodo', () => {
        const formSubmit= wrapper.find('form').prop('onSubmit'); //vinculamos al onSubmit del formulario
        formSubmit({ preventDefault(){} });//llamamos a la funcion enviando un evento sin nada 
        
        expect(handleAddTodo).toHaveBeenCalledTimes(0); //fue llamado 0 veces? porque no se activa si no tiene argumentos
    })

    test('debe de llamar la funcion handleAddTodo ', () => {
        //con un argumento //called
        const value='Aprender React'
        wrapper.find('input').simulate('change',{
            target:{ 
                value, //propiedad
                name:'description' //valor
            }
        })
        
        
        const formSubmit= wrapper.find('form').prop('onSubmit'); //vinculamos al onSubmit del formulario
        formSubmit({ preventDefault(){} });//llamamos a la funcion enviando un evento sin nada
        
        expect(handleAddTodo).toHaveBeenCalledTimes(1); //se llama 1 vez
        
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); //sea llamado con un objeto
        
        expect(handleAddTodo).toHaveBeenCalledWith({
            desc: value, //es la variable que enviamos
            done: false, //como esta en default
            id: expect.any(Number) //no importa que numero sea, pero debe ser un numero
        });
        expect(wrapper.find('input').prop('value')).toBe(''); //para saber si se activo el reset()
        //reset() borra el campo
    })
    
    
})
