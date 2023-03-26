import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input, Button, Alert,Layout ,Form} from 'antd';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../styles/SignIn.css';
const {  Content } = Layout;


function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
      const auth = getAuth();
      setIsError(false);

      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
              const user = userCredential.user;
              console.log('sign in');
              navigate('/');

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
          padding: '0 350px',
          margin: '100px',
          
          
        }}>
          
           <Form style={{maskBorder:'solid', borderRadius:'20px', borderBlockColor:'white', backgroundColor:'#ffff', padding:'15px', marginTop: '150px', width: '395.2px'}}>
           <h2 style={{color:'#ae2012', textAlign: 'center', margin: '20px'}}> Instant Stay</h2>
      <div className='input-feild-email' >
          <Input id={'email'} placeholder={'Username'} value={ email } onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='input-feild-pw'>
          <Input.Password id={'password'} placeholder={'Password'} value={ password }
                          onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='signIn'>
      <Button onClick={handleSubmit} style={{backgroundColor:'#ae2012',color:'white',width:'365px'}}>Sign In</Button>
          <Link to={'/sign-up'}>
          <p className='new-account' style={{padding: '20px', textDecoration: 'none'}}>Don't have an account</p>

          </Link>
      
      </div>
        { isError && <Alert message={ alertMsg } type="error" /> }
        </Form>
        </Content>
       
    </div>
    
    </Layout>
  );
}

export default SignIn;
