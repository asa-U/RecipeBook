import React, { useState } from 'react';
import '../styles/Register.css';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetch('http://localhost:8001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          alert("Successfully registered!")
          console.log(data); 
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  
      setUsername("");
      setPassword("");
    };
  
    return (
      <div className='register--container'>
        <h5>Register</h5>
        <form onSubmit={handleSubmit}>
          <div className='username--container'>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' value={username} onChange={handleUsernameChange} 
            />
          </div>
          <div className='password--container'>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' value={password} onChange={handlePasswordChange} 
            />
          </div>
          <button className="register--button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
  
  export default Register