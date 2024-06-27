import React from "react";
import UseFetch from "../api/UseFetch";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const CategoryPage = () => {
  const { cate } = useParams();
  const { data, loading, error } = UseFetch(
    "https://fakestoreapi.com/products"
  );

  if (loading) {
    return <Loader/>
  }
  if (error) {
    return <ErrorMessage errorMess='Something going wrong'/>;
  }
  const catArr = data.filter((item) => item.category === cate);
  let cateCapi = cate.charAt(0).toUpperCase() + cate.slice(1).toLowerCase()

  return (
    <div className="container mt-5">
      <div className="row">
        <h4 className="title">{cateCapi}</h4>
        {catArr.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
