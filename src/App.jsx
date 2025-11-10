import axios from "axios";
import Checkout from "./pages/Checkout";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import OrdersPage from "./pages/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import { BASE_URL } from "./Services/BaseUrl";


function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/cart-items`).then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App;
