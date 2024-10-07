import styles from "../../style";
import "./FooterMenu.css";

const FooterMenu = ({ heading, menu, row }) => {
  return (
    <div className="FooterMenu">
      <div className="header ">
        <h4 className={`${styles.heading} !text-[20px]`}>{heading}</h4>
      </div>
      <ul className={`flex ${row ? "flex-row" : "flex-col"} gap-4 mt-5`}>
        {menu.map((el, index) => {
          return (
            <li className="text-[16px]" key={index}>
              <a href={el.href}>{el.lable}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FooterMenu;
