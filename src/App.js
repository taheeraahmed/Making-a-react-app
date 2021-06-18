import './App.css';
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
        <main className= "main">
          <Navbar/>
        </main>
        <footer className="footer">
          
        </footer>
      </div>
  );
}

export default App;
