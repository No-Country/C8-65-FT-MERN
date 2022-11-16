import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/screens/Home";
import Cart from "./components/screens/Cart";
import Product from "./components/screens/Product/Product";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product">
          <Route path=":product/" element={<Product />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
