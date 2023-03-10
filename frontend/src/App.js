import LoginForm from './components/Login';
import { Routes, Route } from "react-router-dom";
import './App.css';
import SideBar from './components/DashBoard/SideBar';
import NavBar from './components/DashBoard/NavBar';

import MultiForm from './components/DashBoard/CreateSale/MultiForm';


function App() {
  return (
    <>

      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/dashboard" element={
          <>
            <MultiForm/>
            {/* <NavBar />
            <SideBar/> */}
            
            
          </>} />
      </Routes>
    </>
  );
}

export default App;
