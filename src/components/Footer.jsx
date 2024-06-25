import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
  <footer className="row row-cols-5 py-5 mt-5 border-top border-light">
  <div className="col ps-5">
    <Link to='/'>
    <p className="fs-4 text-white">Ecommerce</p>
    </Link>
    
  </div>

  <div className="col">

  </div>

  <div className="col">
    <h5 className='text-white'>Section</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Home</Link></li>
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Features</Link></li>
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Pricing</Link></li>
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">FAQs</Link></li>
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About</Link></li>
    </ul>
  </div>

  <div className="col">
    <h5 className='text-white'>Section</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Home</Link></li>
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Features</Link></li>
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Pricing</Link></li>
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">FAQs</Link></li>
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About</Link></li>
    </ul>
  </div>

  <div className="col">
    <h5 className='text-white'>Section</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Home</Link></li>
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Features</Link></li>
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Pricing</Link></li>
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">FAQs</Link></li>
      <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About</Link></li>
    </ul>
  </div>
</footer>

  )
}

export default Footer
