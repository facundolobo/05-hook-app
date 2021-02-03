import { useForm } from "../../hooks/useForm";
import { renderHook,act } from "@testing-library/react-hooks"; //agregar manualmente


describe('Pruebas en useFrom', () => {
    //valores iniciales para useForm
    const initialForm = {
        name: 'fernando',
        email: 'fernando@gmail.com'
    }


    test('Debe de regresar un formulario por defecto', () => {
        

        const {result} = renderHook(()=> useForm(initialForm));

        // console.log(formularioVacio.current);
        const [value, handleInputChange, reset] = result.current;//extraigo las funciones 
        
        //pruebo las funciones
        expect(value).toEqual(initialForm); //comprobamos si se cargo bien

        expect(typeof handleInputChange).toBe('function');//es una funcion

        expect(typeof reset).toBe('function');//es una funcion

    });

    test('Debe de cambiar el valor del formulario', () => {
        const {result} = renderHook(()=> useForm(initialForm));
        const [value, handleInputChange, reset] = result.current;//extraigo las funciones 
        
        act(()=>{
            handleInputChange({
                target:{
                    name: 'name', //atributo q cambiaremos
                    value: 'Melissa'}}) //valor que colocamos
        });

        const [formValues] =result.current;
      

        expect(formValues).toEqual({...initialForm, name:'Melissa'}) //pruebo si cambio el name y las otras propiedades no cambiaron


    });

    test('Debe de re-establecer el formulario con RESET', () => {
        const {result} = renderHook(()=> useForm(initialForm));
        const [value, handleInputChange, reset] = result.current;//extraigo las funciones 
        
        act(()=>{
            handleInputChange({
                target:{
                    name: 'name', //atributo q cambiaremos
                    value: 'Melissa'}}) //valor que colocamos

            reset();
        });

        const [formValues] =result.current;
      
        
        expect(formValues).toEqual(initialForm) //pruebo si cambio el name y las otras propiedades no cambiaron
       
    });
        
})
