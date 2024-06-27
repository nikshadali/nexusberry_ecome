import { useParams } from "react-router-dom"
import UseFetch from "../api/UseFetch"
import { useCart } from "../hook/CartContext"
import Loader from "../components/Loader"
import Star  from '../components/Star'

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
        <div className="col-md-5">
          <img src={data.image} alt="" className="img-fluid single-img border" />
        </div>
        <div className="col-md-7">
          <h5 style={{color:'#555'}}>{data.category}</h5>
          <h3>{data.title}</h3>
          <p style={{color:'#0aa0df', fontSize:'28px', fontWeight:'600', display:'inline-block'}}>Price: ${data.price}</p>
         
          <p>{data.description}</p>
          <Star star={data.rating.rate} review={data.rating.count}/>
          
          <button className="btn btn-primary single-page-btn" onClick={() =>handleCart(data.id, data.image, data.price, data.title)}>Add to Cart</button>
        </div>
      </div>
   
    </div>
  )
}

export default SingleProduct
