import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import LinkTree from './components/LinkTree/LinkTree';

function App() {
  return (
      <div className="App">
        <div class="visibledesktop">
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
        <div class="visibledevice">

          <LinkTree/>
          <div class="footerDevice">
            Liten heads-up: Du ser på mobilversjonen av nettsiden. 
            Dersom du ønsker å se hele nettsiden må du bruke en enhet med større skjerm
            Cool bye :3
          </div>
        </div>
        
      </div>
  );
}

export default App;
