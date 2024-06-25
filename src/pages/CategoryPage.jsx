import React from "react";
import UseFetch from "../api/UseFetch";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Loader from "../components/Loader";

const CategoryPage = () => {
  const { cate } = useParams();
  const { data, loading, error } = UseFetch(
    "https://fakestoreapi.com/products"
  );

  if (loading) {
    return <Loader/>
  }
  if (error) {
    return <div>Something going wrong</div>;
  }
  const catArr = data.filter((item) => item.category === cate);

  return (
    <div className="container mt-5">
      <div className="row">
        <h4>{cate}</h4>
        {catArr.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
