import LoginForm from './components/Login';
import { Routes, Route } from "react-router-dom";
import './App.css';
import SideBar from './components/DashBoard/SideBar';
import NavBar from './components/DashBoard/NavBar';

import MultiForm from './components/DashBoard/CreateSale/MultiForm';
import SaleCard from './components/DashBoard/ViewSale/SaleCard';
import ViewSale from './components/DashBoard/ViewSale/ViewSale';


function App() {
  return (
    <>

      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/card" element={<SaleCard bname='Hammad Hameed' bcnic='61101-6548850-5' pdate='20/20/2022' />} />
        <Route exact path="/vsale" element ={<ViewSale/>} />
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
