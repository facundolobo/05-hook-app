import React, { useContext } from 'react'
import { UserContext } from './UserConstex'


export const HomeScreen = () => {

    const {user} = useContext(UserContext) //en el use "useContext" buscamos un "UserContext"

    console.log(user);
    return (
        <div>
            
            <h1>HomeScreen</h1>
            <hr/> 

            <pre >
                {JSON.stringify(user,null,3)}
            </pre>
        </div>
    )
}
