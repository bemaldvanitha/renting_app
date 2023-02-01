import React, { useState } from 'react';
import { Input, Button, Alert,Layout ,Form} from 'antd';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../styles/SignIn.css';
const {  Content } = Layout;


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
    <Layout className="layout">
    <div className="container" >
     
      <Content style={{
          padding: '0 400px',
          margin: '100px',
        }}>
           <Form style={{maskBorder:'solid', borderRadius:'10px', borderBlockColor:'white', backgroundColor:'#f6fff8', padding:'15px'}}>
      <div className='input-feild-email' >
          <Input id={'email'} placeholder={'enter your email'} value={ email } onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='input-feild-pw'>
          <Input.Password id={'password'} placeholder={'enter your password'} value={ password }
                          onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='signIn'>
      <Button onClick={handleSubmit} style={{backgroundColor:'#ae2012',color:'white',width:'260px'}}>Sign In</Button>
      <p className='new-account'>Create New Account</p>
      
      </div>
        { isError && <Alert message={ alertMsg } type="error" /> }
        </Form>
        </Content>
       
    </div>
    
    </Layout>
  );
}

export default SignIn;
