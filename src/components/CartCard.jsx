import React from 'react'

const CartCard = ({item, index, incQty, decQty, delCartItem}) => {
  return (
    <div className="card rounded-3 mb-4">
    <div className="card-body p-4">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img
            src={item.img}
            className="img-fluid rounded-3"
            alt="Cotton T-shirt"
          />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <p className="lead fw-normal mb-2">{item.title}</p>
         
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex  align-items-center">
          <button
            onClick={() => decQty(index)}
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link px-2"
            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
          >
            <i className="fas fa-minus" />
          </button>
            <span>{item.qty}</span>
          <button
           onClick={() => incQty(index)}
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link px-2"
            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
          >
            <i className="fas fa-plus" />
          </button>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h5 className="mb-0">Amount: ${item.amt}</h5>
        </div>
        
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" className="text-danger">
            <i className="fas fa-trash fa-lg" onClick={() =>delCartItem(item.id)} />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartCard
