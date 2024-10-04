import './App.css';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Races from './pages/Races';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { useState } from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [logged, setLogged] = useState(localStorage.length > 0 ? true : false);

  return (
    <div className="App">
      <Router>
        <TopBar logged={logged} setLogged={setLogged} />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/races" element={<Races />} />
          <Route path="/signup" element={<SignUp setLogged ={setLogged} />} />
          <Route path="/signin" element={<SignIn setLogged={setLogged} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
