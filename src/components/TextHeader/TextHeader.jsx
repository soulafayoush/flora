import styles from "../../style";
import "./TextHeader.css";

const TextHeader = ({ heading, paragraph }) => {
  return (
    <div className="TextHeader ">
      <h2 className={`${styles.heading}`}>{heading}</h2>
      <p className={`${styles.paragraph}`}>{paragraph}</p>
    </div>
  );
};

export default TextHeader;
