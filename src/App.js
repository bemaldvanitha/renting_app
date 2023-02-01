import React from "react";
import { Routes, Route } from 'react-router-dom';

import HomeList from "./screeens/Home";
import AddPropertyScreen from "./screeens/AddPropertyScreen";
import DetailsScreen from "./screeens/DetailsScreen";
import SignIn from "./components/SignIn";
import SignUp from "./screeens/SignUp";

import CusHeader from "./components/Header";

function App() {
  return (
    <div>
        <CusHeader/>
        <Routes>
            <Route path={'/'} element={<HomeList/>}/>
            <Route path={'/add-property'} element={<AddPropertyScreen/>}/>
            <Route path={'/detail/:id'} element={<DetailsScreen/>}/>
            <Route path={'/sign-in'} element={<SignIn/>}/>
            <Route path={'/sign-up'} element={<SignUp/>}/>
        </Routes>
    </div>
  );
}

export default App;
