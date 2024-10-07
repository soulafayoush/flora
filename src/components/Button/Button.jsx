import "./Button.css";

const Button = ({ onClick, lable, className }) => {
  return (
    <button
      onClick={onClick}
      className={` bg-primary font-[400] text-sm text-dimWhite px-12 py-3 rounded-md ${className}`}
    >
      {lable}
    </button>
  );
};

export default Button;
