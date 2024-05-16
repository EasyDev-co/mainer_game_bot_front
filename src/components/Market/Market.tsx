import "./Market.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  timeIcon,
  cartIcon,
  changeWhiteArrowIcon,
  whiteDownArrow,
  id,
} from "../../constants/constants";
import { MarketItemList } from "../Market/MarketItemList/MarketItemList";
import { PopupMarket } from "../Popups/PopupMarket/PopupMarket";
import { BackArrowLink } from "../BackArrowLink/BackArrowLink";
import { TitlePage } from "../TitlePage/TitlePage";
import { MarketTextInfoListItem } from "./MarketTextInfoListItem/MarketTextInfoListItem";
import { TUser } from "../../types/user";
import { checkUser } from "../../utils/getUser";
import { BASE_URL } from "../../constants/links";

interface Item {
  minerals_count: number;
  ton_count: number;
  seller: string;
}

export const Market = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilterItem, setSelectedFilterItem] = useState("Price");
  const [reverseSort, setReverseSort] = useState(false);
  //стейт для открытия и закрытия попапа market
  const [isMarketPopupState, setIsMarketPopupState] = useState(false);
  const [selectedCardItem, setselectedCardItem] = useState<Item | null>(null);
  const [selectedFilterItemList, setSelectedFilterItemList] = useState("All");
  const [user, setUser] = useState<TUser>();
  const [orders, setOrders] = useState();
  const [myOrders, setMyOrders] = useState();
  const [bigOrders, setBigOrders] = useState();

  const handleItemClick = (item: any) => {
    setSelectedFilterItem(item);
    setIsFilterOpen(false);
  };

  //функция открытия и закрытия попапа market
  const handleMarketPopupState = () => {
    setIsMarketPopupState(!isMarketPopupState);
  };

  const handleCardSelect = (card: any) => {
    console.log(card);
    setselectedCardItem(card);
    handleMarketPopupState();
  };
  let params = {
    ordering: "price_per_mineral",
    ton_min: ""
  };

  const getCustomFilter = async () => {
    return await fetch(`${BASE_URL}/api/v1/market/deals/?${new URLSearchParams(params).toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      }
    });
  };

  useEffect(() => {
    if (selectedFilterItem === "Price") {
      params.ordering = "price_per_mineral";
      params.ton_min = `${params.ton_min}`;
      console.log(params);
      getCustomFilter().then((res) => res.json()).then((data) => setOrders(data)).catch((err) => console.log(err));
    } else {
      params.ordering = "ton_count";
      params.ton_min = `${params.ton_min}`;
      console.log(params);
      getCustomFilter().then((res) => res.json()).then((data) => setOrders(data)).catch((err) => console.log(err));
    }
  }, [selectedFilterItem]);

  useEffect(() => {
    if (selectedFilterItemList === "All") {
      getOrders();
    } else if (selectedFilterItemList === "My") {
      getMyOrders();
    } else {
      params.ton_min = "5";
      moreThenFive();
    }
  }, [selectedFilterItemList]);

  useEffect(() => {
    if (reverseSort) {
      params.ordering = `-${params.ordering}`;
      getCustomFilter().then((res) => res.json()).then((data) => setOrders(data)).catch((err) => console.log(err));
    } else {
      params.ordering = `${params.ordering}`;
      getCustomFilter().then((res) => res.json()).then((data) => setOrders(data)).catch((err) => console.log(err));
    }
  }, [reverseSort]);


  const moreThenFive = async () => {
    await fetch(`${BASE_URL}/api/v1/market/deals/?${new URLSearchParams(params).toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      }
    }).then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  };
  const getMyOrders = async () => {
    await fetch(`${BASE_URL}/api/v1/market/deals/my_delas/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      }
    }).then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  };
  const getOrders = async () => {
    await fetch(`${BASE_URL}/api/v1/market/deals/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      }
    }).then((res) => res.json())
      .then((data) => setOrders(data));
  };

  useEffect(() => {
    // getMyOrders();
    getOrders();
    // moreThenFive();
    checkUser().then((user) => setUser(user));
  }, []);

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
            <MarketTextInfoListItem title="Total crystals" val={user?.minerals_balance} />
            <MarketTextInfoListItem title="Placed crystals" val="0" />
            <MarketTextInfoListItem title="Total miners" val={user?.miners_count} />
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
              className={`market__filters-block-item ${selectedFilterItemList === "All"
                ? "market__filters-block-item-check"
                : ""
                }`}
              type="button"
              onClick={() => setSelectedFilterItemList("All")}
            >
              All
            </button>
            <button
              className={`market__filters-block-item ${selectedFilterItemList === "My"
                ? "market__filters-block-item-check"
                : ""
                }`}
              type="button"
              onClick={() => { setSelectedFilterItemList("My"); getMyOrders(); }}
            >
              My
            </button>
            <button
              className={`market__filters-block-item ${selectedFilterItemList === ">5 TON"
                ? "market__filters-block-item-check"
                : ""
                }`}
              type="button"
              onClick={() => { setSelectedFilterItemList(">5 TON"); moreThenFive(); }}
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
            <button className="market__filters-sort-button" type="button" onClick={() => setReverseSort(!reverseSort)}>
              <img
                className="market__filters-sort-icon"
                src={changeWhiteArrowIcon}
                alt="filter arrows icon"
              />
            </button>
          </div>
        </div>
        {selectedFilterItemList && (
          <MarketItemList
            items={orders}
            handleCardSelect={handleCardSelect}
          />
        )}
      </div>
      {isMarketPopupState && selectedCardItem && (
        <PopupMarket
          crystal={user?.minerals_balance}
          ton={user?.ton_balance}
          handleMarketPopupState={handleMarketPopupState}
          selectedCardItem={selectedCardItem}
          selectedCardItemSeller={selectedCardItem.seller}
          selectedCardItemCrystals={selectedCardItem.minerals_count}
          selectedCardItemPrice={selectedCardItem.ton_count}
        />
      )}
    </section>
  );
};
