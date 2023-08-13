import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import "./navBarCss.css"
import { AppContext } from '../context/AppContextProvider'
const NavigationComponent = () => {
    const {moviesState, dispatch,} = useContext(AppContext)

    const activeStyle = ({isActive})=>(
{
        margin:"14px",
        fontWeight : isActive ?"700" :"600",
        color: isActive ?"red" :"white",
        textDecoration: "none",
        // borderBottom : isActive ? " 1px solid red":"",
        padding: "15px"
    }
    )

  return (
    <nav className="nav-header">
<div className="home">
<NavLink to="/" > IMDB </NavLink>
</div>

<div className="search">
<label htmlFor="search">
    <input type="text" name="search" id="search" placeholder='Search' 
    onChange={(event)=> dispatch({type:"search", payload:event.target.value})}/>
</label>
</div>

<div className="links">
<NavLink to="/" style={ activeStyle}>
Movies
</NavLink>
<NavLink to="/wishList" style={ activeStyle}>
Wishlist
</NavLink>
<NavLink to="/starred" style={ activeStyle}>
Starred
</NavLink>  
</div>

        </nav>
  )
}

export default NavigationComponent