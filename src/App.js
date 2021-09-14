import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Navegacion from './component/Navegacion'

function App() {
  const styles = {
    bg: {
      backgroundColor: '#506D84',
      width: '100%',
      height:'100vh',
    }
      
  };
  
  
  return (
    <div style={styles.bg}>
      <Navegacion />
      <Home  />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
