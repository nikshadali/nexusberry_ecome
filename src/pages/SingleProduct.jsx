import { useParams } from "react-router-dom"
import UseFetch from "../api/UseFetch"
import { useCart } from "../hook/CartContext"
import Loader from "../components/Loader"

const SingleProduct = () => {
  const {id} = useParams()
  const {data, loading, error} = UseFetch(`https://fakestoreapi.com/products/${id}`)
  const {cart, setCart} = useCart()

  const handleCart = (id,img, price, title) => {
    const  newCart = [...cart]
    const itemIndex = newCart.findIndex(item => item.id === id)
    if(itemIndex !== -1){
      newCart[itemIndex].qty += 1
      newCart[itemIndex].amt = newCart[itemIndex].qty * newCart[itemIndex].price
      setCart(newCart)
    } else {
      const qty = 1;
      const amt = qty * price
      newCart.push({id,img,price, title, amt, qty})
      setCart(newCart)
    }
    

  console.log("cart => ", cart)

  }

  if(loading){
    return <Loader/>
  }
  if(error){
    return <div>Something going wrong</div>
  }
 
  return (
    <div className="container mt-5">
      <div className="row border py-5 shadow">
        <div className="col-md-6">
          <img src={data.image} alt="" className="img-fluid single-img border" />
        </div>
        <div className="col-md-6">
          <h4>{data.category}</h4>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <h6>Reveiw: {data.rating.count}</h6>
          <h6>Price: ${data.price}</h6>
          <button className="btn btn-primary" onClick={() =>handleCart(data.id, data.image, data.price, data.title)}>Add to Cart</button>
        </div>
      </div>
   
    </div>
  )
}

export default SingleProduct
