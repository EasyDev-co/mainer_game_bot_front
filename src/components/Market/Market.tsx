import "./Market.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  backIcon,
  timeIcon,
  cartIcon,
  changeWhiteArrowIcon,
  whiteDownArrow,
} from "../../constants/constants";
import { MarketItems } from "../MarketItems/MarketItems";

export const Market = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Price");

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

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
        <div className="market__info-container">
          <div className="market__first-info-block">
            <div className="market__text-info-block">
              <h3 className="market__info-block-title">Total crystals</h3>
              <p className="market__info-block-val">0</p>
            </div>
            <div className="market__text-info-block">
              <h3 className="market__info-block-title">Placed crystals</h3>
              <p className="market__info-block-val">0</p>
            </div>
            <div className="market__text-info-block">
              <h3 className="market__info-block-title">Total miners</h3>
              <p className="market__info-block-val">0</p>
            </div>
          </div>
          <div className="market__second-info-block">
            <div className="market__text-info-block">
              <h3 className="market__info-block-title">Minimum price</h3>
              <p className="market__info-block-val">0 TON</p>
            </div>
            <div className="market__text-info-block">
              <h3 className="market__info-block-title">
                &gt;5 TON Minimum price
              </h3>
              <p className="market__info-block-val">0 TON</p>
            </div>
            <div className="market__text-info-block">
              <h3 className="market__info-block-title">Daily volume</h3>
              <p className="market__info-block-val">0 TON</p>
            </div>
          </div>
        </div>
        <div className="market__filters-container">
          <div className="market__filters-block market__filters-first-block">
            <button
              className="market__filters-block-item market__filters-block-item-check"
              type="button"
            >
              All
            </button>
            <button className="market__filters-block-item" type="button">
              My
            </button>
            <button className="market__filters-block-item" type="button">
              &gt;5 TON
            </button>
          </div>
          <div className="market__filters-block market__filters-second-block">
            <div
              className="market__filters-menu-container"
              onClick={() => setIsOpen(!isOpen)}
            >
              <button className="market__filters-menu-button">
                {selectedItem}
              </button>
              {isOpen && (
                <div className="market__filters-menu-block">
                  <p
                    className="market__filters-menu-text"
                    onClick={() => handleItemClick("Price")}
                  >
                    Price
                  </p>
                  <p
                    className="market__filters-menu-text"
                    onClick={() => handleItemClick("Total price")}
                  >
                    Total price
                  </p>
                </div>
              )}
              <img
                className="market__filters-menu-arrow"
                src={whiteDownArrow}
                alt="white down arrow icon"
              />
            </div>
            <button className="market__filters-sort-button" type="button">
              <img
                className="market__filters-sort-icon"
                src={changeWhiteArrowIcon}
                alt="filter arrows icon"
              />
            </button>
          </div>
        </div>
        <MarketItems />
      </div>
    </section>
  );
};
