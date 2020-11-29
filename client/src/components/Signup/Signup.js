import React from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'

const handleClick = () => {
    
}

function Signup () {
    return (<>
        <div className = "sign-up-container">  </div>
           <div className = "sign-up-text">Sign up</div>
           <div className = "sign-up-email">EMAIL</div>
           <input type = "text" className = "email-textbox"/>
           <input type = "password" className = "password-textbox"/>
           <div className = "sign-up-password">PASSWORD</div>
           <button className = "sign-up-button" onClick = {handleClick}>Create an account</button>
           <Link to = "/">
            <a href ="" className = "switch-to-login">Have an account already? Login here</a>
            </Link>
            
       </>
    )
}
export default Signup