import Checkout from "./pages/Checkout"
import HomePage from "./pages/HomePage"
import { Routes,Route } from "react-router-dom"
import OrdersPage from "./pages/OrdersPage"
import TrackingPage from "./pages/TrackingPage"

function App(){


  return(
    <>
    <Routes>
      <Route index element={<HomePage/>}/> 
      <Route path="checkout" element={<Checkout/>}/>
      <Route path="orders" element={<OrdersPage/>}/>
      <Route path="tracking" element={<TrackingPage/>}/>


  
</Routes> 

    
    
</>
  )
}

export default App
