import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebase/index';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';

function SignUpUser() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSignUp = async () => {
      const auth = getAuth();

        if (password !== reEnterPassword) {
          alert("Passwords do not match!");
          return;
        }

        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const docRef = await addDoc(collection(db, "users"), {
                userName: userName,
                email: email,
                uid: user.uid,
                mobileNumber: mobileNumber,
                type: 'user',
                timestamp: serverTimestamp()
            });

            console.log('user created');

        }catch (error){
            const errorCode = error.code;
            const errorMessage = error.message;

        }
  }

  return (
    <div>
      <h3>Sign Up as a User</h3>
        <Input value={userName} onChange={e => setUserName(e.target.value)} id={'user-name'}
               placeholder={'Enter your user name'}/>
        <Input value={email} onChange={e => setEmail(e.target.value)} id={'email'}
               placeholder={'Enter your email'}/>
        <Input.Password value={password} onChange={e => setPassword(e.target.value)} id={'password'}
               placeholder={'Enter your password'}/>
        <Input.Password value={reEnterPassword} onChange={e => setReEnterPassword(e.target.value)} id={'re-password'}
               placeholder={'Reenter your password'}/>
      <Input value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} id={'mobile-number'}
             placeholder={'Enter your mobile number'}/>
      <Button onClick={handleSignUp}>Sign Up</Button>
    </div>
  );
}


export default SignUpUser;