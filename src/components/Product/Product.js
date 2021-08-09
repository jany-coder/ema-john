import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props);
    const {name, img, seller, price, stock, key} = props.product;
    
    return (
        <div className="product">
           <div>
                <img src={img} alt="product" />
           </div>
           <div>
               <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
               <br />
               <p><small>by: {seller}</small></p>
               <p>${price}</p>
               <p>Only {stock} left in stock - Order soon</p>
               {props.showAddToCart && <button className="main-button"
               onClick={() => props.handleAddProduct(props.product)}
               >
                   <span><FontAwesomeIcon icon={faCartPlus} /></span> add to cart
                </button>}
           </div>
           
        </div>
    );
};

export default Product;