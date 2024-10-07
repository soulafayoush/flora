import { useState } from "react";
import { navLinks } from "../../constants";
import "./NavBar.css";
import styles from "../../style";
import Button from "../Button/Button";

const NavBar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} bg-secondary sm:py-4 py-8 z-50 w-full fixed top-0 left-0 flex justify-between items-center navbar`}
    >
      <div className="logo md:w-[70px] w-[45px]">
        <a href="/">
          <img src="/assets/images/mainLogo.png" alt="logo" />
        </a>
      </div>
      <div className="menu-container">
        <ul className="list-none md:flex hidden font-[500] gap-8 justify-end items-center flex-1">
          {navLinks.map((el, index) => (
            <li key={index} className={`cursor-pointer text-[16px]`}>
              <a href={el.path}>{el.lable}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={
              toggle ? "/assets/images/close.svg" : "/assets/images/menu.svg"
            }
            alt="menu"
            className="toggle w-[24px] h-[24px] object-contain"
            onClick={() => {
              settoggle((prev) => !prev);
            }}
          />
        </div>
      </div>
      <li className="list-none md:block hidden">
        <Button lable="Login" />
      </li>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } bg-dimWhite absolute top-24 right-0 w-full z-50 rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col gap-8 text-center justify-center flex-1">
          {navLinks.map((el, index) => (
            <li
              key={index}
              className={`cursor-pointer text-start border-y py-6 pl-5 border-black text-[24px]`}
            >
              <a href={el.path}>{el.lable}</a>
            </li>
          ))}
          <li className="pb-10">
            <Button lable="Login" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
