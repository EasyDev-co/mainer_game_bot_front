import "./Market.css";
import { Link } from "react-router-dom";
import { backIcon, timeIcon, cartIcon } from "../../constants/constants";

export const Market = () => {
  return (
    <section className="market">
      <div className="market__container">
        <Link className="market__back-link" to="/main">
          <img
            className="page-back-icon market__back-icon"
            src={backIcon}
            alt="back arrow"
          />
        </Link>
        <div className="market__title-block">
          <div className="page-title-container market__title-container">
            <h1 className="page-title market__title">Market</h1>
          </div>
          <div className="market__title-block-links">
            <Link
              className="market__title-block-link market__sell-link"
              to="/sell"
            >
              <img
                className="market__title-block-link-icon market__sell-icon"
                src={cartIcon}
                alt="cart icon"
              />
            </Link>
            <Link
              className="market__title-block-link market__story-link"
              to="/story"
            >
              <img
                className="market__title-block-link-icon market__story-icon"
                src={timeIcon}
                alt="time arrow"
              />
            </Link>
          </div>
        </div>
        <div className="">
            <div className="">
              <div className="">
                <h3 className=""></h3>
                <p className=""></p>
              </div>
              <div className="">
                <h3 className=""></h3>
                <p className=""></p>
              </div>
              <div className="">
                <h3 className=""></h3>
                <p className=""></p>
              </div>
            </div>
            <div className="">
            <div className="">
                <h3 className=""></h3>
                <p className=""></p>
              </div>
              <div className="">
                <h3 className=""></h3>
                <p className=""></p>
              </div>
              <div className="">
                <h3 className=""></h3>
                <p className=""></p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};
