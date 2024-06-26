import { FaRegStar,FaStar,FaStarHalfAlt } from "react-icons/fa";


const Star = ({star, review}) => {
    const ratingStar = Array.from({length: 5}, ( _, index) => {
        let num = index + 0.5;

        return (
            <span>
            { star >= index + 1 ? (
                <FaStar />
            ) : star >= num ? (
                <FaStarHalfAlt />
            ) : (
                <FaRegStar />
            ) }
            </span>
        )
    }) 

    
  return (
    <div className="icon-style">
     {ratingStar}<span className="reiw">( review:{review})</span>
    </div>
  )
}

export default Star
