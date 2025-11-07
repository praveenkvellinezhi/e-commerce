import Checkout from "./pages/Checkout"
import HomePage from "./pages/HomePage"
import { Routes,Route } from "react-router-dom"

function App(){


  return(
    <>
    <Routes>
      <Route index element={<HomePage/>}/> 
      <Route path="checkout" element={<Checkout/>}/>


  
</Routes> 

    
    
</>
  )
}

export default App
