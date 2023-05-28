import React, { useState } from 'react';
import '../styles/LogIn.css';

const LogIn = ({toggleLogIn, getUserName, getUserId, toggleShowLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
    const response = await fetch('http://localhost:8001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      
      const data = await response.json();
      console.log(data)
      
      if (typeof data === 'number') {
        // Successful login
        console.log('Login successful');
    
        toggleLogIn();
        getUserName(username);
        getUserId(data);
        toggleShowLogin();
        alert('Login successful! Welcome ' + username + "!")
      } else {
        console.error(data);
        alert('Login not successful')
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='login--container'>
        <h5>Log In</h5>
        <form onSubmit={handleLogin}>
        <div className='username--container'>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange}
          />
        </div>
        <div className='password--container'>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange}
          />
        </div>  
        <button className="login--button" type="submit">Login</button>
      </form>
    </div>
  )
}

export default LogIn