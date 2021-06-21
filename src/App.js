import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';

function App() {
  return (
      <div className="App">
        <div class="visibledesktop">this displays for desktop and tablet
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
        <div class="visibledevice">this displays for mobile
          <header className="headerMobile">
            <h1>
              Taheera Ahmed
            </h1>
            <Info/>
          </header>
          <main className= "mainMobile">
            <Navbar/>
          </main>
          <footer className="footerMobile">
          </footer>
        </div>
        
      </div>
  );
}

export default App;
