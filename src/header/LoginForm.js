import React, { useState } from 'react'
import './LoginForm.css'
import axios from 'axios'
// {authenticated, location}

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const signIn = ({ email, password }) => {
    axios.post('/signin', {
      email: email,
      password: password
    })
      .then(function (response) {
        if (response.data === 'success') {
          window.location.assign('http://localhost:3000/')
          
        } else {
          alert("아이디/비밀번호를 확인해주세요.")
          setEmail("")
          setPassword("")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const handleClick = () => {
    signIn({ email, password })
  }
  return (
    <div className="form">
      <h1>로그인</h1>
      <input value={email} onChange={({ target: { value } }) => setEmail(value)} type="text" placeholder="email" />
      <input value={password} onChange={({ target: { value } }) => setPassword(value)} type="password" placeholder="password" />
      <button onClick={handleClick} className="btnLogin">확인</button>
    </div>
  )
}

export default LoginForm