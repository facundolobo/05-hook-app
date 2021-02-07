import React from 'react';
import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch }   from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock('../../../hooks/useFetch'); /*lo que hace, cuando usa "useFetch" 
utilizara una implementacion que yo creare abajo */
jest.mock('../../../hooks/useCounter');



describe('Prueba en <MultipleCustomHooks/>', () => {
    
   
    test('debe de mostrarse correctamente ', () => {
        
        useCounter.mockReturnValue({
            counter:10,
            increment: ()=>{}
        });
             
        useFetch.mockReturnValue({ //aqui lo implemento
            data:null,
            loading:true,
            error:null
        })//devolvera eso


        const wrapper = shallow(<MultipleCustomHooks/>)
        expect(wrapper).toMatchSnapshot();
        
    
    })
    
    test('should  debe de mostrar la informacion', () => {

        useCounter.mockReturnValue({
            counter:10,
            increment: ()=>{}
        });
        useFetch.mockReturnValue({ //aqui lo implemento
            data:[{
                author:'Fernando',
                quote:'Hola mundo',

            }],
            loading:false,
            error:null
        })//devolvera eso

        const wrapper = shallow(<MultipleCustomHooks/>)

        //no debe existir eso ya que si devolvio algo 
        expect(wrapper.find('.alert').exists()).toBe(false);
        
        //probamos que si le llego la infomracion de "quote"
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo');

        //probamos que si le llego la infomracion de "author"
        expect(wrapper.find('footer').text().trim()).toBe('Fernando');
        
        //console.log(wrapper.html());//muestra el html por consola



    })
    
})
