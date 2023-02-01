import React, { useState } from "react";
import { Segmented } from 'antd';

import SignUpUser from "../components/SignUpUser";
import SignUpHost from "../components/SignUpHost";
import '../styles/SignIn.css';

const SignUp = () => {
    const [viewType, changeViewType] = useState('user');

    const changingViewType = (val) => {
        if(val === 'Sign-up as User'){
            changeViewType('user');
        }else{
            changeViewType('host');
        }
    }

    return(
        <div className="signToggle" >
            <Segmented size={'large'} options={['Sign-up as User', 'Sign-up as Host'] } onChange={(e) => changingViewType(e)} style={{color:'#a6a6a6' ,padding:'15px', backgroundColor:'#ae2012'}}/>
            {
                viewType === 'user' ? <SignUpUser/> : <SignUpHost/>
            }
        </div>
    )
}

export default SignUp;