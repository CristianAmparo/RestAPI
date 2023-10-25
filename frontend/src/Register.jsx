
import React, { useState } from 'react'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })
    const {name, email, password, password2} = formData

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
    <h1>Register</h1>
    <div>
        <form onSubmit={HandleSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
                type="text" 
                id='name'
                name='name'
                value={name}
                placeholder='Enter your name'
                onChange={HandleChange}
            />
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
            <label htmlFor="password2">Repeat-Password:</label>
            <input 
                type="password" 
                id='password2'
                name='password2'
                value={password2}
                placeholder='Repeat your password'
                onChange={HandleChange}
            />
            <button>Register</button>
        </form>
    </div>
    </>
  )
}

export default Register