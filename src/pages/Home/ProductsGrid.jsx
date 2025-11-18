import React from 'react'
import { BASE_URL } from '../../Services/BaseUrl'
import Products from './Products'

export  function ProductsGrid({products,loadCart}) {
 
  return (
    <div>
        <div className="products-grid">
                {products.map((product)=>{
                  return (
                    <Products key={product.id} product={product} loadCart={loadCart} />
                    
            
                    
                  )
      
      
      
                })}
               
      
            
              </div>
      
    </div>
  )
}
