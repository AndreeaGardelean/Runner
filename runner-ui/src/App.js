import './App.css';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import StartBar from './components/StartBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <StartBar />
      <NavBar />
    </div>
  );
}

export default App;
