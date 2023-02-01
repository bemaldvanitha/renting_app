import React from "react";

import SignUpUser from "../components/SignUpUser";
import SignUpHost from "../components/SignUpHost";

const SignUp = () => {
    return(
        <div>
            <SignUpHost/>
            <SignUpUser/>
        </div>
    )
}

export default SignUp;