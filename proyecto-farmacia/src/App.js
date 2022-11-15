
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/screens/Home';
import Cart from './components/screens/Cart';


function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
