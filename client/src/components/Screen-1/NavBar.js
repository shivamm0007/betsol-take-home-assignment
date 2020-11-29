import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

function NavBar () {
    
    return (<>
        <div className = "nav-bar">
        <div className = "frame-nav-bar"> 
        <div className = "frame-nav-bar-dashboard">Dashboard</div>
        <Link to = "/">
            <div className = "frame-nav-bar-logout">Logout</div>
        </Link>
        </div>
        </div>
       
   </>
    )
}
export default NavBar