import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const backendUrl = 'http://localhost:8000'; // ✅ Change if backend runs elsewhere

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(`${backendUrl}/auth/login`, { email, password });
      alert('Login Success'); // Replace with token handling
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleMicrosoftLogin = () => {
    window.location.href = `${backendUrl}/auth/ms-login`;
  };

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto', padding: '20px', border: '1px solid #ddd' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label><br />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label><br />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <hr />
      <button onClick={handleMicrosoftLogin} style={{ background: '#0078D4', color: '#fff', padding: '8px', border: 'none' }}>
        Sign in with Microsoft
      </button>
    </div>
  );
};

export default LoginPage;
