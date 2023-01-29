import React from "react";
import AddPropertyScreen from "./screeens/AddPropertyScreen";
import SignUpUser from "./components/SignUpUser";
import SignUpHost from "./components/SignUpHost";
import SignIn from "./components/SignIn";
import {  } from './firebase/index';

import CusHeader from "./components/Header";

function App() {
  return (
    <div>
        <CusHeader/>
      <SignUpHost/>
    </div>
  );
}

export default App;
