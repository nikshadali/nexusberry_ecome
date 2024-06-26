import { FaTruck,FaShoppingCart} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Topmenu = ({cart}) => {
  return (
    <div className="container-fluid top-menu">
      <div className="container" style={{ height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div
            className="col-md-6 d-flex align-items-center top-menu-brand "
            style={{ height: "100%" }}
          >
            ECOMMERC
          </div>
          <div
            className="col-md-6 d-flex align-items-center justify-content-between"
            style={{ height: "100%" }}
          >
            <div className="top-menu-left">
              <span className="top-menu-circle">
                <FaTruck color="#0aa0df" style={{ width: "30px" }} />
              </span>
              <span>
                <p style={{fontSize:'10px', color:'#666'}}>Order status</p>
                <p style={{color:'#fff', fontWeight:'600'}}>Track Oder</p>
                </span>
            </div>
            <div className="top-menu-center">
            <span className="top-menu-circle">
                <FiPhoneCall color="#0aa0df" style={{ width: "25px" }} />
              </span>
              <span>
                <p style={{fontSize:'10px', color:'#666'}}>Call us Now</p>
                <p style={{color:'#fff',fontWeight:'600'}}>0123-45-6789</p>
                </span>
            </div>
            <div className="top-menu-right">
           
            <span className="top-menu-circle">
            <Link to='./cart'>
                <FaShoppingCart color="#0aa0df" style={{ width: "25px" }} />
                </Link>
              </span>
              <span>
                <Link to='./cart'>
                <p style={{fontSize:'10px', color:'#666'}} >Check out</p>
                <p style={{color:'#fff',fontWeight:'600'}}>{cart.length}</p>
                </Link>
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topmenu;
