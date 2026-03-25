import './App.css';
import  Navbar from './Components/Navbar';
import  Hello from './Components/Hello';
import  Hi from './Components/Hi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path ="/hi" element={<Hi />} />
      </Routes>
    </Router>
  );
}

export default App;
