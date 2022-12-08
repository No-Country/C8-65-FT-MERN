import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/screens/Home";
import Example from "./components/screens/CartScreen";
import Product from "./components/screens/Product";
import SigIn from "./components/screens/Signin";
import SignUp from "./components/screens/SignUp";
import { QueryClient, QueryClientProvider } from "react-query";
import Pasarella from "./components/screens/Pasarella";
import MetodoDePago from "./components/screens/MetodoDePago";
import Orden from "./components/screens/Orden";
import OrderScreen from "./components/screens/OrderScreen";
import OrderHistoryScreen from "./components/screens/OrdenHistory";
import ProfileScreen from "./components/screens/ProfileScreen";
import Contact from "./components/screens/Contact";
import Favorite from "./components/screens/Favorite";
import Productos from "./components/screens/AllProducts";
import { useState } from "react";


import Footer2 from "./components/Footer2/Footer2";



const queryClient = new QueryClient();
function App() {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <NavBar toggleDarkMode={toggleDarkMode} />

      <div >
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home toggleDarkMode={toggleDarkMode}  />} />
            <Route path="/cart" element={<Example />} />
            <Route path="/product">
              <Route path=":product/" element={<Product />}></Route>
            </Route>
            <Route path="/signin" element={<SigIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/shipping" element={<Pasarella />} />
            <Route path="/payment" element={<MetodoDePago />} />
            <Route path="/placeorder" element={<Orden />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/orderhistory" element={<OrderHistoryScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Favorite" element={<Favorite />} />
            <Route path="/products" element={<Productos />} />

          </Routes>
        </QueryClientProvider>
      </div>
      <Footer2 />
    </div>
  );
}

export default App;
