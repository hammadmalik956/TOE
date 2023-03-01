import LoginForm from './components/Login';
import { Routes, Route } from "react-router-dom";
import './App.css';
import SideBar from './components/DashBoard/SideBar';


function App() {
  return (
    <>
      
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/dashboard" element={<SideBar />} />
      </Routes>
    </>
  );
}

export default App;
