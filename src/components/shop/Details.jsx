import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './shop.css'


const Details = () => {

  const params=useParams();
  const [product, setproduct] = useState({});

  const getSingleproduct = () => {
    return fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then(res=>res.json())
    .then(json=>setproduct(json))
  } 

  useEffect(() => {
    getSingleproduct();
  }, []);

  return ( 
 <div className="product-wrapper">

    <div className="img-wrapper">
      <img  src={product.image} alt="" />
      
    </div>
    <div className="details">
     
     <h3>{product.category}</h3>
     <h6>{product.title}</h6>
     <h6>{product.description}</h6>
     <h5>{product.price}</h5>
    </div>
</div>

  )
 }

export default Details;
