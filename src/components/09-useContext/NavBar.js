import React from 'react'


import { Link,NavLink } from "react-router-dom"; //importar para utilizarlos 
//la diferencia entre estos es q navLink es que peude establecer una clase si el URL 
//coincide con el Path
export const NavBar = () => {
    return (  //codigo cipoado de https://getbootstrap.com/docs/5.0/components/navbar/   renombre className y los link
     
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  
    <Link className="navbar-brand" to="/">useContext</Link>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink exact activeClassName="active" className="nav-link" to="/" >Home</NavLink> {/*activeClassName 
        para que se vea como seleccionado */}
        <NavLink exact activeClassName="active" className="nav-link" to="/login" >Login</NavLink>
        <NavLink exact activeClassName="active" className="nav-link" to="/about" >About</NavLink>
      </div>
    </div>
 
</nav>
    )
}
