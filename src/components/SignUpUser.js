import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';

function SignUpUser() {
  const firebase = useFirebase();
  const [userName, setUserName] = useState('');
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
      mobileNumber: mobileNumber
    })
  }

  return (
    <div>
      <h3>Sign Up as a User</h3>
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="re-enter password"
        value={reEnterPassword}
        onChange={e => setReEnterPassword(e.target.value)}
      />
      <input
        type="tel"
        placeholder="mobile number"
        value={mobileNumber}
        onChange={e => setMobileNumber(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}


export default SignUpUser;