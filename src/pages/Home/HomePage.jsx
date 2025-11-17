import axios from 'axios'
import React from "react";
import { useEffect,useState } from 'react';
import {Header} from "../../Components/Header"
import './HomePage.css'
import { BASE_URL } from '../../Services/BaseUrl';
import { ProductsGrid } from './ProductsGrid';






const HomePage = ({ cart }) => {
  const [ products,setProducts]=useState([]);
 
  useEffect(()=>{
    axios.get(`${BASE_URL}/api/products`).
then((response)=> {
   setProducts(response.data);
 
   
   

  })
  
  },[]);


  return (
    <div>
        <title>E commerce project
            
        </title>
    <Header cart={cart}/>

      <div className="home-page">
        <ProductsGrid products={products}/>
 
      </div>
    </div>
  );
};

export default HomePage;
