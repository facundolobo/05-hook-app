import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserConstex';
describe('Prueba en <AppRouter/>', () => {
    
const user =  {
    id:1,
    name:'Fernando'
}
    //ERROR MOUNT
    const wrapper=mount(
        <UserContext.Provider value={{
            user
        }}>
          <AppRouter/>
        </UserContext.Provider>); 
    


    test(' Debe de mosptrarce correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    })
    
})
