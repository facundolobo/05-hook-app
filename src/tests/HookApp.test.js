import { shallow } from "enzyme"
import { HooksApp } from "../HooksApp"


describe('Preubas de <HookApp /> ', () => {
    test('Debe mostrarse correctamente  ', () => {
        
        const wrapper = shallow(<HooksApp/>);
        expect(wrapper).toMatchSnapshot();
    })
    
})
