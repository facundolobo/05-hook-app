import { useCounter } from "../../hooks/useCounter"
import { renderHook,act } from "@testing-library/react-hooks"; //agregar manualmente

describe('Puebas en useCounter', () => {
    test('debe de retornar valores por defecto', () => {
        const {result} = renderHook(()=> useCounter());

        expect(result.current.counter).toBe(10); //se agrega el "current" para saber el estadoa ctual

        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');

    })
    test('debe de tener el counter en 100', () => {
        const {result} = renderHook(()=> useCounter(100));

        expect(result.current.counter).toBe(100); //se agrega el "current" para saber el estadoa ctual

        
    })
    test('Debe de incrementar el coutner en 1', () => {
        //para ejecuar una accion en un hook debemos importar "act"
        const {result} = renderHook(()=> useCounter(100));
        const {increment} = result.current;
        
        act(()=>{
            increment();
        });
        const {counter}= result.current;
        expect(counter).toBe(101)
    })
    test('Debe de decrementar el coutner en 1', () => {
        const {result} = renderHook(()=> useCounter(100));
        const {decrement} = result.current;
        
        act(()=>{
            decrement();
        });
        const {counter}= result.current;
        expect(counter).toBe(99)
    })
    test('Debe de incrementar el coutner en 1 y reseteralo', () => {
        const {result} = renderHook(()=> useCounter(100));
        const {increment,reset} = result.current;
        
        act(()=>{
            increment();
            reset();
        });
        const {counter}= result.current;
        expect(counter).toBe(100)
    })
    
    
})
