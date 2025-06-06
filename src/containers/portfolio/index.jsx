import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ProjectImageOne from "./Meme.avif"; // Replace with actual image
import ProjectImageTwo from "./Netflix.jpg"; // Replace with actual image
import "./styles.scss";

const portfolioData = [
  {
    name: "Meme Generator",
    image: ProjectImageTwo,
    link: "https://github.com/IshantSingh27/Meme-Generator", // replace with actual link
  },
  {
    name: "Netflix Clone",
    image: ProjectImageOne,
    link: "https://github.com/IshantSingh27/Netflix-Front-Page-Clone", // replace with actual link
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <div className="portfolio__content__cards">
          {portfolioData.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                <div>
                  <button onClick={() => window.open(item.link, "_blank")}>
                    Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
