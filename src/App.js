import './App.css';
import Button from '@material-ui/core/Button';
import Navbar from './components/Navbar';
import Info from './components/Info';

function App() {
  return (
      <div className="App">
        <header className="header">
          <h1>
            Taheera Ahmed
          </h1>
          <Info/>
        </header>
        <Navbar/>
      </div>
  );
}

export default App;
