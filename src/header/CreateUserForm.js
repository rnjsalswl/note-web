import React from 'react'
import './LoginForm.css'
// import axios, { post } from 'axios'

const CreateUserForm = () =>{
    return (
        <div className="form">
            <h1>회원가입</h1>
            <form action="/CreateUser" method="post">
                <input type="text" name="email" placeholder="email" />
                <input type="text" name="name" placeholder="name" />
                <input type="text" name="gender" placeholder="gender" />
                <input type="password" name="password" placeholder="password" />
                <button type="submit"className="btnLogin">확인</button>
                
            </form>
        </div>
    )
    
}

export default CreateUserForm