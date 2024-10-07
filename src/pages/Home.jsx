import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import TextHeader from "../components/TextHeader/TextHeader";
import TrendingCard from "../components/TrendingCard/TrendingCard";
import WorksCard from "../components/WorksCard/WorksCard";
import { estateDeals, trendingCard, worksCards } from "../constants";
import styles, { layout } from "../style";
import EstateDealsCard from "../components/EstateDealsCard/EstateDealsCard";

const Home = () => {
  const [estateDealsCategoryActive, setEstateDealsCategoryActive] = useState(0);
  return (
    <>
      <NavBar />
      <Hero />
      {/* How it Works */}
      <section className={`${layout.section}`}>
        <TextHeader
          heading="How it Works"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
        />
        <div className={`${layout.cardContainer} gap-8 mt-14`}>
          {worksCards.map((el, index) => {
            return (
              <WorksCard
                key={index}
                active={index === 1 ? true : false}
                icon={el.icon}
                heading={el.heading}
                para={el.para}
              />
            );
          })}
        </div>
      </section>

      {/* Find Dream Home */}
      <section className="relative">
        <img
          src="/public/assets/images/kitchen.png"
          className=" w-full h-[380px] object-cover"
          alt="kitchen"
        />

        <div
          className={`text-box w-full h-[380px] bg-black bg-opacity-50 absolute top-0 left-0 ${styles.flexCenter} flex-col text-center`}
        >
          <h1
            className={`${styles.heading} text-white sm:!text-[70px] !text-[30px]`}
          >
            Find Dream Home
          </h1>
          <p
            className={`${styles.paragraph} sm:!text-[30px] max-w-[600px] !text-[15px] sm:mt-14 mt-4 !opacity-100 text-white`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing eli
          </p>
        </div>
      </section>

      {/* Most Trending */}
      <section className={`${layout.section}`}>
        <TextHeader
          heading="Most Trending"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
        />
        <div className={`mt-14 ${layout.cardContainer} gap-6 cards-container`}>
          {trendingCard.map((el, index) => {
            return (
              <TrendingCard
                key={index}
                img={el.img}
                price={el.price}
                name={el.name}
                location={el.location}
              />
            );
          })}
        </div>
      </section>

      {/* Best Real Estate Deals */}
      <section className={`${layout.section}`}>
        <TextHeader
          heading="Best Real Estate Deals"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
        />

        <div className="category mt-14">
          <ul className="flex gap-11 2xl:justify-center justify-start md:overflow-auto overflow-scroll">
            {[...estateDeals.category].map((el, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    estateDealsCategoryActive === index
                      ? "border-b border-primary text-primary"
                      : ""
                  } text-[18px] text-nowrap  font-[400] py-4 cursor-pointer text-dimBlack`}
                  onClick={() => {
                    setEstateDealsCategoryActive(index);
                  }}
                >
                  <span>{el.lable}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mainCards mt-10">
          <ul className="flex flex-wrap justify-center sm:gap-8 gap-5">
            {[...estateDeals.mainCards].map((el, index) => {
              return (
                <EstateDealsCard
                  key={index}
                  img={el.img}
                  category={el.category}
                />
              );
            })}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
