import React from "react";
import { Link } from "react-router-dom";
import Star from "./Star";
const Card = ({ item }) => {
  
  return (
    <div className="col-md-3 mt-4">
      <Link to={`/product/${item.id}`}>
      <div className="card com-card">
        <img src={item.image} className="card-img-top img-size" alt="..." />
        <div className="card-body">
          <p className="card-text">{item.category}</p>
          <h6 className="card-title">{item.title}</h6>
          <h6 className="price">Price: ${item.price}</h6>
          <Star star={item.rating.rate} review={item.rating.count}/>
            <button className="btn btn-primary">Order Now</button>
          
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
