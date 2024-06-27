
import { FaAngleLeft,FaAngleRight} from "react-icons/fa6";

const Slider = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/slide-1.png" className="d-block w-100" alt="1"/>
        </div>
        <div className="carousel-item">
          <img src="/images/slide-2.png" className="d-block w-100" alt="2"/>
        </div>
        <div className="carousel-item">
          <img src="/images/slide-3.png" className="d-block w-100" alt=".2"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <FaAngleLeft  color="#000" style={{width:'20px'}}/>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <FaAngleRight  color="#000" style={{width:'20px'}}/>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
