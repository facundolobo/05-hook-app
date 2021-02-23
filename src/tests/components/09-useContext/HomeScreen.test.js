
import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserConstex';


const user={
    name:'Fernando',
    email:'Fernandogmail.com'
}
describe('Pruebas en <HomeScreen/>', () => {

    //NO ESTA FUNCIONANDO EL MOUNT
    // const wrapper=mount( 
    //     // con el shallow solo renderisaba el primer componente, pero con el mount r
    //     // enderisa todo, me sirve para el toMatchSnapshot
    // <UserContext.Provider> value={{
    //     user
    //     }}
    //     <HomeScreen/> //devemos crear un constexto porque usa un variable global que es el user
    // </UserContext.Provider>
    // );

    test('Debe de mostrarse correctamente ', () => {

        // expect(wrapper).toMatchSnapshot();
    
    })
    
})
