import React, { useState } from 'react';
import { Input, Button, Alert,Layout ,Form,Space } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import '../styles/SignIn.css';
const {  Content } = Layout;

function SignUpHost() {
  const navigate = useNavigate();
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

    try {
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
      navigate('/');

    } catch (error) {
      setIsError(true);
      const errorCode = error.code;
      const errorMessage = error.message;
      setAlertMsg(errorMessage);
    }
  }

  return (
    <div>
      <Layout className="layout">
        <div className="container" >

          <Content style={{
            padding: '0 400px',
            margin: '100px',
          }}>
            <Form style={{ maskBorder: 'solid', borderRadius: '10px', borderBlockColor: 'white', backgroundColor: '#f6fff8', padding: '15px' }}>
              <div className='input-feild-email' >
                <h3>Sign Up as a Host</h3>
                <div className='input-feild' >
                <Space
                    direction="vertical"
                    size="middle"
                    style={{
                      display: 'flex',
                    }}
                  >
                <Input value={hostName} onChange={e => setHostName(e.target.value)} id={'user-name'}
                  placeholder={'Enter your user name'} />
                <Input value={email} onChange={e => setEmail(e.target.value)} id={'email'}
                  placeholder={'Enter your email'} />
                <Input.Password value={password} onChange={e => setPassword(e.target.value)} id={'password'}
                  placeholder={'Enter your password'} />
                <Input.Password value={reEnterPassword} onChange={e => setReEnterPassword(e.target.value)} id={'re-password'}
                  placeholder={'Reenter your password'} />
                <Input value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} id={'mobile-number'}
                  placeholder={'Enter your mobile number'} /></Space></div>

                <Button onClick={handleSignUp} style={{backgroundColor:'#ae2012',color:'white',width:'260px'}}>Sign Up</Button></div>
              <Link to={'/sign-in'}>
                <p className='new-account'>Already have an account</p>
              </Link>
              {isError && <Alert message={alertMsg} type="error" />}
              
            </Form>
          </Content>
          </div> 
     

      </Layout>
    
      </div>  
  );
  }
  
      export default SignUpHost;