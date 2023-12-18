import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Home, Checkout, Result, Product } from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Result />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
