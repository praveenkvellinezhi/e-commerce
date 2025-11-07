import HomePage from "./pages/HomePage"
import { Routes,Route } from "react-router-dom"

function App(){


  return(
    <>
    <Routes>
      <Route index element={<HomePage/>}/> 
      <Route path="checkout" element={ <div>Test checkout</div> }/>


  
</Routes> 

    
    
</>
  )
}

export default App
