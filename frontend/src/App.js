import LoginForm from './components/Login/Index';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
