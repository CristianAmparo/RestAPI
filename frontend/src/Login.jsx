import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Register() {
const navigate = useNavigate();
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const {email, password} = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password2, ...formDataWithoutPassword2 } = formData;

    axios.post('http://localhost:5000/api/users/login', formDataWithoutPassword2)
      .then((response) => {
        console.log(response);
        setSuccess('Login Successfully');
        setError('');
        navigate("/")
        localStorage.setItem('myData', JSON.stringify(response.data));
        
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      });

      if (!error) {
      }
  };


  return (
    <>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
        {success !== '' && <h1>{success}</h1>}
        {error !== '' && <h1>{error}</h1>}
      </div>
    </>
  );
}

export default Register;
