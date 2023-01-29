import React, { useState } from 'react';
import { Input } from 'antd';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
              const user = userCredential.user;
              console.log('sign in')

      }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log('error')

      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
          <Input id={'email'} placeholder={'enter your email'} value={ email } onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
          <Input.Password id={'password'} placeholder={'enter your password'} value={ password }
                          onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;
