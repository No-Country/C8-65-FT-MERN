import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/screens/Home";
import Cart from "./components/screens/Cart";
import ProductScreen from "./components/detalles/Detalles";
import Example from "./components/screens/CartPrueba";
import Product from "./components/screens/Product";
import SigIn from "./components/screens/Signin";
import SignUp from "./components/screens/SignUp";
import { QueryClient, QueryClientProvider } from "react-query";
import Pasarella from "./components/screens/Pasarella";
import Contact from "./components/screens/Contact";
const queryClient = new QueryClient();
function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Example />} />
          <Route path="/product">
            <Route path=":product/" element={<Product />}></Route>
          </Route>
          <Route path="/signin" element={<SigIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shipping" element={<Pasarella />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
