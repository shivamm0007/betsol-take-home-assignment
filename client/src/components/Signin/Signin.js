import React, { useState } from 'react'
import './Signin.css'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

function Signin () {
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let history = useHistory();
   let handleEmail = (e) =>
    {
        setEmail(e.target.value)
    }

   let  handlePassword = (e) => 
    {
        setPassword(e.target.value);
    }

    let handleClick = async () =>
    {
        
        let data = {
            email,
            password
        }
        let auth = await fetch("/api/login",{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }).then((res)=>{
            // for (var pair of res.headers.entries()) {
                localStorage.setItem("token", res.headers.get('authorization'));
                return res.json()
                
        }).then((auth)=>auth.success)
        console.log(auth)
        if(auth)
        {
             history.push("/dashboard");
        }
        else
        {
             alert("Incorrect Email or Password");
        }
    }
    return (<>
        <div className = "sign-in-container"></div>
           <div className = "sign-in-text">Sign in</div>
           <div className = "sign-in-email">EMAIL</div>
           <input required onChange={handleEmail} value={email} type = "email" className = "email-textbox"/>
           <input required onChange={handlePassword} value={password} type = "password" className = "password-textbox"/>
           <div className = "sign-in-password">PASSWORD</div>
           <button onClick={handleClick} className = "sign-in-button">Login</button>
           <Link to = "/signup">
            <a href ="" className = "switch-to-signup">Create an account</a>
            </Link>
   </>
    )
}
export default Signin