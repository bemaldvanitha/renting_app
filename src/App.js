import AddPropertyScreen from "./screeens/AddPropertyScreen";
import { } from './firebase/index';
import CusHeader from "./components/Header";
import HomeList from "./screeens/Home";

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>

      <CusHeader />

      <Routes>
        <Route path='/' element={<HomeList />} />
        <Route path='/property/:id' element={<AddPropertyScreen />} />


      </Routes>

      <AddPropertyScreen />

    </div>
  );
}

export default App;
