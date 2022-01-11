import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';
import Authform from '../../components/Auth/Authform';
import { signInUser, signupUser } from '../../services/users';
import './Auth.css';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [type, setType] = useState('signin');

  const submitButton = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signupUser(email, password);
      }
      setCurrentUser(resp);
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
    }
  };
  return (
    <div>
      <div className="tabs">
        <h3
          onClick={() => {
            setType('signin');
          }}
          className={classNames({ active: type === 'signin' })}
        >
          Sign In:
        </h3>

        <h3
          onClick={() => {
            setType('signup');
          }}
          className={classNames({ active: type === 'signup' })}
        >
          Sign Up:
        </h3>
      </div>
      <p> Type: {type}</p>
      <Authform
        password={password}
        email={email}
        setPassword={setPassword}
        setEmail={setEmail}
        errorMessage={errorMessage}
        submitButton={submitButton}
      />
    </div>
  );
}
