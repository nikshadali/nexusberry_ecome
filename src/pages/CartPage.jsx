import React, { useState } from 'react'
import { useCart } from '../hook/CartContext'
import CartCard from '../components/CartCard'

const CartPage = () => {
    const {cart, setCart} = useCart()
    const totalAmt = cart?.reduce((acc, val) => acc + val.amt,0 )

    const incQty = (i) => {
        setCart(prev => prev.map((item, index) => index === i ? {...item, qty: item.qty + 1, amt: (item.price * (item.qty + 1))} : item))
    }
    const decQty = (i) => {
        const qtyArr = [...cart]
        
         if(qtyArr[i].qty < 2){
          qtyArr.splice(i,1)
          setCart(qtyArr)
    
         }else{
    
          qtyArr[i].qty--
          qtyArr[i].amt = qtyArr[i].price * qtyArr[i].qty
          setCart(qtyArr)
         }
    }
    const delCartItem = (i) => {
        setCart(prev => prev.filter(item => item.id !== i))

    }

if(cart.length < 1){
    return (
        <div className="container d-flex align-items-center justify-content-center" style={{height:'40vh'}}>
            <h3>Empty Cart</h3>

        </div>
    )
}


  return (
    <section className="h-100">
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0">Shopping Cart</h3>
          <div>
            
          </div>
        </div>
        {cart.map((item, index) => (
             <CartCard item={item} index={index} key={item.id} incQty={incQty} decQty={decQty} delCartItem={delCartItem}/>
        ))}
      
       
       
      <div class="card">
          <div class="card-body d-flex ">

          <div className="col-md-5 ">
          <h5 className="mb-0"> Total Amount: </h5>
        </div>
        <div className="col-md-5 text-end">
          <h5 className="mb-0">${totalAmt.toFixed(2)}</h5>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default CartPage
