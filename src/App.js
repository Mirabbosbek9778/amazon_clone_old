import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavBar,
  Home,
  ProductPage,
  Checkout,
  Result,
} from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Result />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
