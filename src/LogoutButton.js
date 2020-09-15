import React from 'react'
import {withRouter} from 'react-router-dom'
import './header/LoginForm.css'
const LogoutButton = ({logout, history}) =>{
    const handleClick = () =>{
        logout()
        alert("logout Successfully")
        history.push("/")
    }
    return <button className="btnLogin" onClick={handleClick}>Logout</button>
}

export default withRouter(LogoutButton)