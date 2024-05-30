import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import Home from './Home';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const validateForm = () => {
    if (id.trim() === '') {
      toast.warn('ID is required');
      return false;
    }
    if (password.trim() === '') {
      toast.warn('Password is required');
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (!validateForm()) {
      return;
    }

    const validId = 'abc@gmail.com';
    const validPassword = 'abc123';

    if (id === validId && password === validPassword) {
      toast.success('Login successful!');
      setTimeout(() => {
        setIsAuthenticated(true);
      }, 2000);
    } else {
      toast.warn('Incorrect ID or password!');
    }
  };

  if (isAuthenticated) {
    return <Home/>;
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="ID=abc@gmail.com"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password=abc123"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <ToastContainer />
    </div>
  );
};

export default Login;
