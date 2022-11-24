import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "designing",
      title: "Designing",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfoilo</h1>
      <ul>
        {list.map((item, key) => {
          return (
            <PortfolioList
              key={key}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://mir-s3-cdn-cf.behance.net/user/276/30b44759695445.586b7a138be61.png"
            alt="portfolio"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://mir-s3-cdn-cf.behance.net/user/276/30b44759695445.586b7a138be61.png"
            alt="portfolio"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://mir-s3-cdn-cf.behance.net/user/276/30b44759695445.586b7a138be61.png"
            alt="portfolio"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://mir-s3-cdn-cf.behance.net/user/276/30b44759695445.586b7a138be61.png"
            alt="portfolio"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://mir-s3-cdn-cf.behance.net/user/276/30b44759695445.586b7a138be61.png"
            alt="portfolio"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://mir-s3-cdn-cf.behance.net/user/276/30b44759695445.586b7a138be61.png"
            alt="portfolio"
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
