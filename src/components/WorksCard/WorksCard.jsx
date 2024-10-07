import "./WorksCard.css";

const WorksCard = ({ icon, heading, para, active }) => {
  return (
    <div
      className={`WorksCard w-[380px] h-[255px]  rounded-2xl py-5 px-8 ${
        active && "bg-primary text-white"
      }`}
    >
      <div className="icon-box">
        <img src={icon} alt="icon" />
      </div>
      <div className="text mt-5">
        <h4 className="text-[22px] font-[600]">{heading}</h4>
        <p className="text-[14px] mt-2 font-[400] opacity-50">{para}</p>
      </div>
    </div>
  );
};

export default WorksCard;
