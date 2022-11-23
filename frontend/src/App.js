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


import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (


    <div >

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product">
          <Route path=":product/" element={<Product />}></Route>
        </Route>
        <Route path='/signin' element={<SigIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>

  );
}

export default App;
