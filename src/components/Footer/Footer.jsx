import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { footerMenu } from "../../constants";
import styles from "../../style";
import FooterMenu from "../FooterMenu/FooterMenu";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      href: "#",
      lable: (
        <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center">
          <FaFacebookF size={18} fill="#FFF" />
        </div>
      ),
    },
    {
      href: "#",
      lable: (
        <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center">
          <FaTwitter size={18} fill="#FFF" />
        </div>
      ),
    },
    {
      href: "#",
      lable: (
        <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center">
          <FaLinkedinIn size={18} fill="#FFF" />
        </div>
      ),
    },
  ];

  return (
    <footer className={`${styles.paddingX} pt-9 pb-6 mt-24`}>
      <div className="flex md:flex-row flex-col justify-between ">
        <div className="logo">
          <img
            src="/assets/images/mainLogo.png"
            className="md:w-[70px] w-[60px]"
            alt="logo"
          />
          <p className={`${styles.paragraph} max-w-[350px] mt-6`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            tempus felis vitae sit est quisque.
          </p>
        </div>
        {footerMenu.map((el, index) => {
          return (
            <div className="footerMenu sm:mt-0 mt-8" key={index}>
              <FooterMenu heading={el.heading} menu={el.menu} />
            </div>
          );
        })}

        <div className="FooterMenu sm:mt-0 mt-8">
          <div className="header ">
            <h4 className={`${styles.heading} !text-[20px]`}>Our Location</h4>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
          </div>
          <ul className={`flex flex-row gap-3 mt-4`}>
            {socialLinks.map((el, index) => {
              return (
                <li key={index}>
                  <a href={el.href}>{el.lable}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="copy-Rights mt-9 w-full border-t sm:p-0 p-4">
        <div className=" flex flex-wrap justify-between items-baseline">
          <p className="text-[14px] font-[400]">
            Copyright 2024 flora. All Rights Reserved
          </p>
          <FooterMenu
            row={true}
            menu={[
              { href: "#", lable: "Terms & Conditions" },
              { href: "#", lable: "Privacy Policy" },
            ]}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
