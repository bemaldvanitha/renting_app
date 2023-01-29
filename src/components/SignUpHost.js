import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';

function SignUpHost() {
    const firebase = useFirebase();
    const [hostName, setHostName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
  
    const handleSignUp = () => {
      if (password !== reEnterPassword) {
        alert("Passwords do not match!");
        return;
      }
      firebase.createUser({ email, password }, {
        email: email,
        hostname: hostname,
        mobileNumber: mobileNumber
      })
    }
  
    return (
      <div>
        <h3>Sign Up as a Host</h3>
        <input
          type="text"
          placeholder="Host Name"
          value={hostName}
          onChange={e => setHostName(e.target.value)}
        />
        <input
          type="mail"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
             <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Re-enter Password"
          value={reEnterPassword}
          onChange={e => setReEnterPassword(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={e => setMobileNumber(e.target.value)}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    );
  }

  export default SignUpHost;