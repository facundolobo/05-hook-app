const initialState = [{
    id:1,
    todo: 'Comprar pan',
    done: false //stado de la tare, no se realizo 

}]
const  todoReducer = ( state = initialState , action ) => { //enviamos estado y una acción

    if(action?.type === 'agregar'){

        return [...state, action.payLoad];
    }

    return state; 
}

let todos= todoReducer();

//funcion agregar un nuevo todo
const newTodo ={
    id:2,
    todo: 'Comprar leche',
    done: false 
}
//------------------------

//funcion para agregar a la funcion
const agregarTodoAction ={
    type:'agregar',
    payLoad: newTodo
}
//--------------------

todos = todoReducer (todos, agregarTodoAction);

console.log( todos );