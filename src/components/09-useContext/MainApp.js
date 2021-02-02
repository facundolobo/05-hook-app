import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserConstex'

export const MainApp = () => {
    
    const [user, setUser] = useState({

    });

    return (
        
            <UserContext.Provider value= {{
                user,
                setUser
            }}> {/**asi pongo a UserContext como componente superior, contextrProvider 
             * me sirve para proveer informacion alo alrgo de 
             * todos sus componentes hijos
              */}

                <AppRouter/>
            </UserContext.Provider>
       
    )
}
