import React, { useState } from 'react';
import { Input, Button, Alert } from 'antd';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
      const auth = getAuth();
      setIsError(false);

      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
              const user = userCredential.user;
              console.log('sign in')

      }).catch((error) => {
          setIsError(true);
          const errorCode = error.code;
          const errorMessage = error.message;
          setAlertMsg(errorMessage);
      });
  };

  return (
    <div>
      <div>
          <Input id={'email'} placeholder={'enter your email'} value={ email } onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
          <Input.Password id={'password'} placeholder={'enter your password'} value={ password }
                          onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <Button onClick={handleSubmit}>Sign In</Button>
        { isError && <Alert message={ alertMsg } type="error" /> }
    </div>
  );
}

export default SignIn;
