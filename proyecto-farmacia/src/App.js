import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div >
      <NavBar />
      <h1 className='text-red-600'>hola</h1>

    <div className="App">
      <header className="App-header">
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
          holaaa
        </a>
      </header>

    </div>
  );
}

export default App;
