import React, { useContext } from 'react'
import { UserContext } from './UserConstex'

export const LoginScreen = () => {

    //1. Obtener la referencia al userContext
    const {setUser} = useContext(UserContext) //en el use "useContext" buscamos un "UserContext"
    //2. setUser

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button className="btn btn-primary"
            onClick={ ()=> setUser({
                id:123,
                name: "Fernando"
            }) }
            >
                Login
            </button>
        </div>
    )
}
