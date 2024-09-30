import './App.css';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Races from './pages/Races';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/races" element={<Races />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
