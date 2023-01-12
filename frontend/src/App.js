import LoginForm from './components/Login';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
