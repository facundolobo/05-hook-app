import React, { useContext } from 'react'
import { UserContext } from './UserConstex'

export const AboutScreen = () => {
    const {user,setUser} = useContext(UserContext) //en el use "useContext" buscamos un "UserContext"
    
    
    const handleClick= ()=>{//borra los datos de login
        setUser({});
        
    }
    return (
        <div>
            <h1>AboutScreen</h1>
            <hr/>
            <pre>
                {JSON.stringify(user,null,3)}
            </pre>
            <button
            className="btn btn-warning"
            onClick={handleClick}
            >
                LogOut
            </button>
            
        </div>
    )
}
