import { FaShippingFast } from "react-icons/fa";
import { MdSupportAgent,MdPayment } from "react-icons/md";

const Services = () => {
  return (
    <div className='container bg-light mt-5 py-2'>
        <div className="row px-2">
            <div className="col-md-4 " style={{backgroundColor:'#fff'}}>
                <div className="sevice-line">
                <div className="service">
                <FaShippingFast style={{width:'50px',}}/>
                <h5>Free Shipping</h5>
                <p style={{fontSize:'14px'}}>On Order Over $ 0.00</p>
                </div>
                </div>
            </div>
            <div className="col-md-4" style={{backgroundColor:'#fff'}}>
                <div className="sevice-line">
                <div className="service">
                <MdSupportAgent style={{width:'50px',}}/>
                <h5>24*Support</h5>
                <p style={{fontSize:'14px'}}>On Demond Support</p>
                </div>
                </div>
            </div>
            <div className="col-md-4" style={{backgroundColor:'#fff'}}>
                <div className="sevice-line">
                <div className="service " style={{borderRight:'none'}}>
                <MdPayment style={{width:'50px',}}/>
                <h5>Online Payment</h5>
                <p style={{fontSize:'14px'}}>Online Payment Service</p>
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Services
