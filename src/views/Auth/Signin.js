import React from 'react';
import { signInUser } from '../../services/users';
import { useState } from 'react';
import Authform from '../../components/Auth/Authform';
import Header from '../../components/Header/Header';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submitButton = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInUser(email, password);
      console.log(resp);
    } catch {
      setErrorMessage('Something went wrong. Please try again');
    }
  };
  return (
    <div>
      <h1> Sign In User:</h1>
      <Header />
      <Authform
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        errorMessage={errorMessage}
        submitButton={submitButton}
      />
    </div>
  );
}
