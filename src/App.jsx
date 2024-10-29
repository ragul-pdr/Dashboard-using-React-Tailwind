import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Dashboard from "./Dashboard";
import Products from "./Components/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="login" element={<div>Login</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
