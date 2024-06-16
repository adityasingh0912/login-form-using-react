import React, { useState } from 'react'
import './Loginform.css'
import email_icon from '../assets/email.png'
import pass_icon from '../assets/password.png'
import person_icon from '../assets/person.png'


const Loginform = () => {

const [action,setAction] = useState("Login");

    


  return (
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={person_icon} alt="" />
                <input type="text" placeholder='Name' />
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id' />
            </div>
            <div className="input">
                <img src={pass_icon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {action==="Sign up"? <div></div>:        <div className="forget-password">Lost_password?<span>Click here</span></div>
        }
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
            <div className={action==="Sign up"?"submit gray":"submit"}  onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}
export default Loginform