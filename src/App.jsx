import axios from "axios";
import Checkout from "./pages/CheckOut/Checkout";
import HomePage from "./pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import OrdersPage from "./pages/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import { BASE_URL } from "./Services/BaseUrl";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  const [cart, setCart] = useState([]);
  
    const loadCart= async ()=>{
     const response = await axios.get(`${BASE_URL}/api/cart-items?expand=product`);
     console.log(response);
     
      setCart(response.data);

    };

  useEffect(() => {


    loadCart();
  },
    []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path="checkout" element={<Checkout cart={cart} loadCart={loadCart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking" element={<TrackingPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>

      </Routes>
    </>
  );
}

export default App;
