import React from 'react';

export default function Authform({ email, setEmail, password, setPassword }) {
  return (
    <div classNam="form">
      <h1>Log In or Sign Up!</h1>
      <div className="form-sign">
        <label>Email:</label>
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-password">
        <label>Password:</label>
        <input
          placeholder="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
}
