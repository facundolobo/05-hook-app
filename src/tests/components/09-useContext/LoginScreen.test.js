import { mount, shallow } from 'enzyme';
import React, { useContext } from 'react'
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserConstex';




 describe('Pruebas en <LoginScreen/>', () => {

    const setUser= jest.fn(); //creamos la funcion
        //wrapper //mount
     const wrapper= mount( 

        <UserContext.Provider value={{ //constexto
            setUser
        }}>
           <LoginScreen/>
        </UserContext.Provider> )
     
     


     test('debe verse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();

     })
     test('debe ejecutar el setUser con el argumento esperado ', () => {
         //simular un click con los argumentos esperados
        wrapper.find('button').prop('onClick')()// con esto lo llamo como función
        expect(setUser).toHaveBeenCalledWith({
            id:123,
            name: "Fernando"
        });

     })
     
     
 })
 