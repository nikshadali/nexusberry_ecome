import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hook/CartContext'
import UseFetch from '../api/UseFetch'
import Loader from './Loader'
import Topmenu from './Topmenu'


const Header = () => {
  const {data} = UseFetch('https://fakestoreapi.com/products')
  
  const categries = [...new Set(data.map(item => item.category))]
  const {cart} = useCart()
  return (
    <>
    <Topmenu cart={cart} />
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
     
    <div className="container logo">
      <Link className="navbar-brand" to="/">
       ECOMMERCE
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/'>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/products'>
              Products
            </Link>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
         
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            {categries.map(item => (
              <Link className="nav-link active" aria-current="page" to={`/category/${item}`}>
             {item}
            </Link>
            ))}
            
          </li>
          </ul>
        </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Header
