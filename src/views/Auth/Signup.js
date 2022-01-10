import React from 'react';
import { useState } from 'react';
import Authform from '../../components/Auth/Authform';
import { signupUser } from '../../services/users';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submitButton = async (e) => {
    e.preventDefault();
    try {
      const resp = await signupUser(email, password);
      console.log(resp);
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
    }
  };
  return (
    <div>
      <h1> Sign-Up:</h1>
      <Authform
        email={email}
        password={password}
        setEmail={setEmail}
        setpassword={setPassword}
        errorMessage={errorMessage}
        submitButton={submitButton}
      />
    </div>
  );
}
