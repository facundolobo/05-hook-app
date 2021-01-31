export const todoReducer = (state = [] , action)=>{

    switch (action.type) {
        case 'add':
            
            return  [...state,action.payload];

        case 'delete':
            return state.filter( todo => todo.id !== action.payload);  //compara con el id del payload enviado
 
        case 'toggle': //forma abreviada
            return state.map(todo => 
                (todo.id === action.payload)
                    ? {...todo,done:!todo.done}
                    :todo
            );

        case 'toggle-old':
            return state.map(todo => { //recorre todos los elementos como un for
                if(todo.id === action.payload){
                    return {...todo,done:!todo.done} //cambiamos el valore
                }else{
                    return todo; //devemos devolverlo igual sino regresara un undefine
                }

            })


            default:
            return state;
    }
}