import React, { useState } from 'react';
import {Input, Button, Alert} from 'antd';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../firebase";

function SignUpHost() {
    const [hostName, setHostName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [alertMsg, setAlertMsg] = useState('');
    const [isError, setIsError] = useState(false);
  
    const handleSignUp = async () => {
        const auth = getAuth();
        setIsError(false);

        if (password !== reEnterPassword) {
            alert("Passwords do not match!");
            return;
          }

        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const docRef = await addDoc(collection(db, "users"), {
                userName: hostName,
                email: email,
                uid: user.uid,
                mobileNumber: mobileNumber,
                type: 'host',
                timestamp: serverTimestamp()
            });

            console.log('user created');

        }catch (error){
            setIsError(true);
            const errorCode = error.code;
            const errorMessage = error.message;
            setAlertMsg(errorMessage);
        }
    }
  
    return (
      <div>
          <h3>Sign Up as a Host</h3>
          <Input value={hostName} onChange={e => setHostName(e.target.value)} id={'user-name'}
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
          { isError && <Alert message={ alertMsg } type="error" /> }
      </div>
    );
  }

  export default SignUpHost;