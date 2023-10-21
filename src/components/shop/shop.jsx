// import Button from 'react-bootstrap/Button';

import { useEffect, useState } from "react"
import './shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const[products , setproducts]=useState([]);
    
    
    const getproducts = () =>{
      return fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{setproducts(json)})
    }

    useEffect ( () =>{
        getproducts()
    } )





  return (
    <>
  <h1>products</h1>
  <div className="product-list">


  {products?.map ( (product) => {
    return (
        <div className="product-item">
          <img src={product.image} alt="" />
            <h3>
            {product.title}
            </h3>
            <p>
            {product.category}
            </p>
            {product.price}
            <p>

            {product.rating.rate}
            </p>
            <Link to={`/shop/${product.title}/${product.id}`}>show details</Link>
        </div>
    )
  }

  ) }
  </div>
    </>
  )
}

export default Shop