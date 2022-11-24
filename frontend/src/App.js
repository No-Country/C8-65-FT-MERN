import NavBar from './components/NavBar/NavBar';

import Card from './components/productCard/ProductCard'

import { Route, Routes } from 'react-router-dom';
import Home from './components/screens/Home';
import Cart from './components/screens/Cart';
import ProductScreen from './components/detalles/Detalles';
import Example from './components/screens/CartPrueba';
import Product from './components/screens/Product/Product';
import SigIn from './components/screens/Signin';
import SignUp from './components/screens/SignUp';
import Pasarella from './components/screens/Pasarella';



function App() {
  return (


    <div >

      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product/:slug" element={<ProductScreen />} />
        <Route path='/cart' element={<Example />} />
        <Route path='/signin' element={<SigIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/shipping' element={<Pasarella />} />
      </Routes>

    </div>

  );
}

export default App;
