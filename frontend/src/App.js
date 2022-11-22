import NavBar from './components/NavBar/NavBar';

import Card from './components/productCard/ProductCard'

import { Route, Routes } from 'react-router-dom';
import Home from './components/screens/Home';
import Cart from './components/screens/Cart';
import ProductScreen from './components/detalles/Detalles';
import Example from './components/screens/CartPrueba';



function App() {
  return (


    <div >

      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product/:slug" element={<ProductScreen />} />
        <Route path='/cart' element={<Example />} />
      </Routes>

    </div>

  );
}

export default App;
