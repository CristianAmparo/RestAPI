import { useState } from 'react'
import React from 'react'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',

    })
    const {email, password} = formData

    const HandleChange = (e) => {
       setFormData((prev)=>({
        ...prev, [e.target.name]: e.target.value
       }))
    }
    const HandleSubmit = (e)=> {
        e.preventDefault()

    }
    console.log(formData)
  return (
    <>
    <h1>Login</h1>
    <div>
        <form onSubmit={HandleSubmit}>
            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                id='email'
                name='email'
                value={email}
                placeholder='Enter your email'
                onChange={HandleChange}
            />
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id='password'
                name='password'
                value={password}
                placeholder='Enter your password'
                onChange={HandleChange}
            />
            
            <button>Login</button>
        </form>
    </div>
    </>
  )
}

export default Login