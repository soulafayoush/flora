import { heroCards } from "../../constants";
import styles, { layout } from "../../style";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className={`flex flex-row  ${styles.paddingY} items-center  relative h-screen bg-secondary`}
    >
      <div className="image-box absolute sm:w-auto w-[190%] bottom-0 right-0 ">
        <img src="/assets/images/hero.png" alt="hero" />
      </div>
      <div className="container z-10">
        <div className={`${styles.paddingX}`}>
          <h1
            className={`${styles.heading} sm:!text-[60px] !text-[35px] max-w-[550px]`}
          >
            Discover a place you will love to live
          </h1>
          <p className={`${styles.paragraph} mt-5 max-w-[450px]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Imperdiet tempus felis vitae sit est quisque.
          </p>
        </div>
        <div
          className={`sm:mx-[4.4rem] mx-0 card-container mt-12 bg-white backdrop-blur-sm sm:w-fit w-full sm:rounded-2xl py-5 sm:px-14 px-5 bg-opacity-80 flex sm:gap-16 gap-6 flex-wrap`}
        >
          {heroCards.map((el, index) => {
            return (
              <div className="card flex gap-5" key={index}>
                <div className="icon-box bg-opacity-5 flex items-center justify-center w-[60px] h-[60px] bg-primary rounded-full ">
                  <img src={el.icon} alt="icon" />
                </div>
                <div className="text-box">
                  <h4 className="text-[16px] font-[500]">{el.heading}</h4>
                  <p className="text-[15px] mt-2 font-[400] opacity-50">
                    {el.para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
