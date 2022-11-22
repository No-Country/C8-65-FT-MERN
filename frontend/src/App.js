import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/screens/Home";
import Cart from "./components/screens/Cart";
import Product from "./components/screens/Product/Product";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <NavBar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product">
            <Route path=":product/" element={<Product />}></Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
