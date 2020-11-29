import React, { useState , useEffect} from 'react'
import Signin from '../Signin/Signin'
import './MainDataBar.css'
import NavBar from './NavBar'



function MainDataBar() {
    const [data , setData] = useState([])
    const [costRunning , setCostRunning] = useState(0)  
    const [costStop , setCostStop] = useState(0)
    const [currency , setCurrency] = useState("$")
    

    useEffect(()=>{
        let token = localStorage.getItem("token")
        let auth = `Bearer ${token}`
        fetch("/api/instances",{
            headers: {
              'authorization': auth
            },
        }).then((res)=>res.json().then((data)=>setData(data.instances)))
    
    },[])
    const handleToggle = () => {
        if(currency === "$")
        {
            setCurrency("₹")
        }
        else
        {
            setCurrency("$")
        }
    }
    return (
        <>
            <NavBar/>
            <div className = "data-bar"></div>
                <div className = "data-bar-innerframe"></div>
                <div className = "data-bar-innerframe-running">{currency} {costRunning} / hr</div>
                <div className = "data-bar-innerframe-stopped">{currency} {costStop} / hr</div>
                    <div className = "data-bar-toggle-curr-frame">
                    <input
                        className="react-switch-checkbox"
                        id={`react-switch-new`}
                        type="checkbox"
                        defaultChecked = {currency}
                        onClick = {handleToggle}
                    />
                    <label
                        className="react-switch-label"
                        htmlFor={`react-switch-new`}
                    >
                    <span className={`react-switch-button`} />
                    </label>
                    
                    <div className = "data-bar-innerframe-currinr">INR</div>
                    <div className = "data-bar-innerframe-currusd">USD</div>
                    </div>

        </>
    )
}
export default MainDataBar