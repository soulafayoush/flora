import { HiOutlineLocationMarker } from "react-icons/hi";
import "./TrendingCard.css";

const TrendingCard = ({ img, price, name, location }) => {
  return (
    <div className="TrendingCard w-[380px] p-5 rounded-xl shadow">
      <div className="containe">
        <div className="header">
          <img src={img} alt={name} />
        </div>
        <div className="body mt-4 text-[18px] font-[600]">
          <h6 className="price text-primary">${price}</h6>
          <p className="name text-dimBlack max-w-[180px]">{name}</p>
        </div>
        <div className="footer mt-9">
          <div className="location flex gap-2">
            <HiOutlineLocationMarker size={24} />
            <p className="text-[14px] font-[400]">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
