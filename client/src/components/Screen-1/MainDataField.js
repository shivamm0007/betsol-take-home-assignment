import React, { useEffect , useState} from 'react'
import MainDataBar from './MainDataBar'
import './MainDataBar.css'
import NavBar from './NavBar'
import './MainDataField.css'


function MainDataField () {
    const [data , setData] = useState([])  
    let [status , setStatus] = useState("")
    const [costRunning , setCostRunning] = useState(0.2)  
    const [costStop , setCostStop] = useState(6.12)
    const [currency , setCurrency] = useState("$")
    
    useEffect(()=>{
        let token = localStorage.getItem("token")
        let auth = `Bearer ${token}`
        fetch("/api/instances",{
            headers: {
              'authorization': auth
            },
        }).then((res)=>res.json().then((data)=>setData(data.instances.slice(0,7))))
    },[])

    const handleStatus = (costValue) => {
      setStatus(status === "running" ? "stopped" : "running")
    }
    
    return (
        <>
       <NavBar/>
            <div className = "data-bar"></div>
                <div className = "data-bar-innerframe"></div>
                <div className = "data-bar-innerframe-running">{currency} 
                {currency === "$" ? Math.round(costRunning*100)/100 : Math.round(costRunning*66.67*100)/100} / hr
                </div>
                <div className = "data-bar-innerframe-running-text">Running Instances</div>
                <div className = "data-bar-innerframe-stopped">{currency} 
                {currency === "$" ? Math.round(costStop*100)/100 : Math.round(costStop*66.67*100)/100} / hr
                </div>
                <div className = "data-bar-innerframe-stopped-text">Stopped Instances</div>
                    <div className = "data-bar-toggle-curr-frame">
                    <input
                        className="react-switch-checkbox"
                        id={`react-switch-new`}
                        type="checkbox"
                        defaultChecked = {currency}
                        onClick = {handleToggle => setCurrency(currency === "$" ? "₹" : "$" )}
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




        <div className = "data-field-container">
        <div className = "data-field-text">Instances</div>
            <table className = "table-main-container">
                <thead className = "data-field-tablehead">
                    <th className = "table-head-id">ID</th>
                    <th className = "table-head-instance">Instance Name</th>
                    <th className = "table-head-cost">Cost Per Hour</th>
                    <th className = "table-head-status">Status</th>
                    <th className = "table-head-action">Action</th>
                </thead>
                <tbody className = "table-body-container">
                  {data.map((item) => {
                          {status = item.status}
                          console.log(status)
                    return (
                        <tr key = {item.id} >
                          <td className = "table-body-data-id">{item.id}</td>
                          <td className = "table-body-data-name">{item.name}</td>
                          <td className = "table-body-data-cost">{currency} 
                          {currency === "$" ? Math.round(item.costPerHour*100)/100 : Math.round(item.costPerHour*66.67*100)/100}</td>
                          <td 
                          className = {status === "running" ? "table-body-data-status-green" : "table-body-data-status-red"}>
                          {status}</td>
                          <td 
                          className = {status === "running" ? "table-body-data-action-red" : "table-body-data-action-green"} 
                          onClick = {handleStatus}>
                          {status === "running" ? "stop" : "start"}
                          </td>
                          
                        </tr>
                        
                      )
                      
                  })}
                    
                </tbody>
            </table>
            </div>
        </>
    )
}
export default MainDataField




