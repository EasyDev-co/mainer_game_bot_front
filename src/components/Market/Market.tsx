import "./Market.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  timeIcon,
  cartIcon,
  changeWhiteArrowIcon,
  whiteDownArrow,
} from "../../constants/constants";
import { items } from "../../constants/data";
import { MarketItemList } from "../Market/MarketItemList/MarketItemList";
import { PopupMarket } from "../Popups/PopupMarket/PopupMarket";
import { BackArrowLink } from "../BackArrowLink/BackArrowLink";
import { TitlePage } from "../TitlePage/TitlePage";
import { MarketTextInfoListItem } from "./MarketTextInfoListItem/MarketTextInfoListItem";

interface Item {
  crystals: number;
  price: number;
  unitPrice: string;
  seller: string;
}

export const Market = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilterItem, setSelectedFilterItem] = useState("Price");
  //стейт для открытия и закрытия попапа market
  const [isMarketPopupState, setIsMarketPopupState] = useState(false);
  const [selectedCardItem, setselectedCardItem] = useState<Item | null>(null);
  const [selectedFilterItemList, setSelectedFilterItemList] = useState("All");

  const handleItemClick = (item: any) => {
    setSelectedFilterItem(item);
    setIsFilterOpen(false);
  };

  //функция открытия и закрытия попапа market
  const handleMarketPopupState = () => {
    setIsMarketPopupState(!isMarketPopupState);
  };

  const handleCardSelect = (card: Item) => {
    setselectedCardItem(card);
    handleMarketPopupState();
  };

  return (
    <section className="market">
      <div className="market__container">
        <BackArrowLink link="/main" />
        <div className="market__title-block">
          <TitlePage
            additionalStyles=" market__title-container"
            title="Market"
          />
          <div className="market__title-block-links">
            <Link
              className="market__title-block-link market__sell-link"
              to="/market-sell"
            >
              <img
                className="market__title-block-link-icon market__sell-icon"
                src={cartIcon}
                alt="cart icon"
              />
            </Link>
            <Link
              className="market__title-block-link market__story-link"
              to="/market-story"
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
          <ul className="market__first-info-list">
            <MarketTextInfoListItem title="Total crystals" val="0" />
            <MarketTextInfoListItem title="Placed crystals" val="0" />
            <MarketTextInfoListItem title="Total miners" val="0" />
          </ul>
          <ul className="market__second-info-list">
            <MarketTextInfoListItem title="Minimum price" val="0 TON" />
            <MarketTextInfoListItem title=">5 TON Minimum price" val="0 TON" />
            <MarketTextInfoListItem title="Daily volume" val="0 TON" />
          </ul>
        </div>
        <div className="market__filters-container">
          <div className="market__filters-block market__filters-first-block">
            <button
              className={`market__filters-block-item ${
                selectedFilterItemList === "All"
                  ? "market__filters-block-item-check"
                  : ""
              }`}
              type="button"
              onClick={() => setSelectedFilterItemList("All")}
            >
              All
            </button>
            <button
              className={`market__filters-block-item ${
                selectedFilterItemList === "My"
                  ? "market__filters-block-item-check"
                  : ""
              }`}
              type="button"
              onClick={() => setSelectedFilterItemList("My")}
            >
              My
            </button>
            <button
              className={`market__filters-block-item ${
                selectedFilterItemList === ">5 TON"
                  ? "market__filters-block-item-check"
                  : ""
              }`}
              type="button"
              onClick={() => setSelectedFilterItemList(">5 TON")}
            >
              &gt;5 TON
            </button>
          </div>
          <div className="market__filters-block market__filters-second-block">
            <div
              className="market__filters-menu-container"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <button className="market__filters-menu-button">
                {selectedFilterItem}
              </button>
              {isFilterOpen && (
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
        {selectedFilterItemList === "All" && (
          <MarketItemList items={items} handleCardSelect={handleCardSelect} />
        )}
      </div>
      {isMarketPopupState && selectedCardItem && (
        <PopupMarket
          handleMarketPopupState={handleMarketPopupState}
          selectedCardItem={selectedCardItem}
        />
      )}
    </section>
  );
};
