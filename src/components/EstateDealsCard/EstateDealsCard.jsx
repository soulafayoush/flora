import Button from "../Button/Button";
import "./EstateDealsCard.css";

const EstateDealsCard = ({ img, category }) => {
  return (
    <div className="EstateDealsCard max-w-[380px] relative">
      <img src={img} alt={category} />
      <div className="btns absolute top-3 left-3">
        <Button
          lable="Featured"
          className="text-[12px] !bg-dimBlack !bg-opacity-40 !backdrop:blur-sm !px-3 !py-1 border border-dimWhite"
        />
        <Button
          lable="3D"
          className="ml-2 text-[12px] !bg-dimBlack !bg-opacity-40 !backdrop:blur-sm !px-3 !py-1 border border-dimWhite"
        />
      </div>
    </div>
  );
};

export default EstateDealsCard;
