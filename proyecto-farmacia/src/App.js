

import NavBar from './components/NavBar/NavBar';

import Card from './components/productCard/ProductCard'

import { Route, Routes } from 'react-router-dom';
import Home from './components/screens/Home';
import Cart from './components/screens/Cart';



function App() {
  return (

    <h1 className='text-10xl font-bold text-blue-600 bg-pink-800'>Hola mundo</h1>

    <div className="App">

      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </div>

  );
}

export default App;
