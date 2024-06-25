import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({item}) => {
    
  return (
    <div className="col-md-4 mt-4">
                    <div className="card com-card" >
  <img src={item.image} className="card-img-top img-size" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.category}</h5>
    <p className="card-text">{item.title}</p>
    <h6>Price: ${item.price}</h6>
    <Link to={`/product/${item.id}`}>
    <button className="btn btn-primary">Order Now</button></Link>
    
  </div>
</div>
</div>
  )
}

export default Card