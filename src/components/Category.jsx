import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const Category = ({ categries }) => {
  
  return (
   <div className="container mt-5">
    <div className="row">
        <h4>All Categories</h4>
        {categries.map((item, i) => (
          
          <div className="col-md-3 mt-4" key={i}>
            <Link to={`/category/${item.category}`}>
             <Card className="category-card">
             <Card.Img variant="top" src={item.image} className="category-img" />
             <Card.Body>
               <Card.Text style={{fontSize:'20px', color:'#fff'}}>
                 {item.category}
               </Card.Text>
             </Card.Body>
           </Card>
           </Link>
           </div>
          
        ))}
    </div>
   </div>
  );
};

export default Category;
