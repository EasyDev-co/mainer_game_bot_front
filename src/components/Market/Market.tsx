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
import { getInfo } from "../../utils/info";
import { TStatistics } from "../../types/statistics";

interface Item {
  minerals_count: number;
  ton_count: number;
  seller: string;
}

interface Params {
  ordering: string;
  ton_min: string;
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
  const [info, setInfo] = useState<TStatistics>();
  const [orders, setOrders] = useState<{
    count: number | undefined;
    next: string | null;
    previous: string | null;
    results: any[];
  }>();

  const [totalPages, setTotalPages] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeButton, setActiveButton] = useState(1);

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

  const deleteItem = async (card: any) => {
    setselectedCardItem(card);
    console.log(card.id);
    await fetch(`${BASE_URL}/api/v1/market/deals/${card.id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      },
    });
  };


  /*   let params = {
    ordering: "",
    ton_min: ""
  }; */

  const [params, setParams] = useState<Params>({ ordering: "", ton_min: "" });

  console.log(params);
  console.log(orders);
  const getCustomFilter = async (params: Params, url?: string) => {
    const paramsRecord: Record<string, string> = {
      ordering: params.ordering,
      ton_min: params.ton_min,
    };

    const queryString = new URLSearchParams(paramsRecord).toString();
    console.log(queryString);
    return await fetch(`${BASE_URL}/api/v1/market/deals/${url ? url : ""}?${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      },
    });
  };

  const getOrders = async () => {
    await fetch(`${BASE_URL}/api/v1/market/deals/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  };

  const moreThenFive = async () => {
    setParams((prevParams) => ({
      ...prevParams,
      ton_min: "5",
    }));

    const paramsRecord: Record<string, string> = {
      ordering: params.ordering,
      ton_min: "5",
    };

    const queryString = new URLSearchParams(paramsRecord).toString();
    console.log(paramsRecord);
    await fetch(`${BASE_URL}/api/v1/market/deals/?${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  };

  const getMyOrders = async (params?: any) => {
    const queryString = new URLSearchParams(params).toString();
    await fetch(`${BASE_URL}/api/v1/market/deals/my_deals/${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const fetchData = async (params: Params, url?: string) => {
      try {
        const res = await getCustomFilter(params, url);
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.log(err);
      }
    };
    if (selectedFilterItem === "Price" && selectedFilterItemList === "My") {
      const updatedParams = { ordering: "ton_count", ton_min: params.ton_min };
      setParams(updatedParams);
      fetchData(updatedParams, "my_deals/");
    } else if (selectedFilterItem === "Total price" && selectedFilterItemList === "My") {
      const updatedParams = {
        ordering: "price_per_mineral",
        ton_min: params.ton_min,
      };
      setParams(updatedParams);
      fetchData(updatedParams, "my_deals/");
    } else if (selectedFilterItem === "Price" && selectedFilterItemList !== "My") {
      const updatedParams = { ordering: "ton_count", ton_min: params.ton_min };
      setParams(updatedParams);
      fetchData(updatedParams);
    } else if (selectedFilterItem === "Total price" && selectedFilterItemList !== "My") {
      const updatedParams = {
        ordering: "price_per_mineral",
        ton_min: params.ton_min,
      };
      setParams(updatedParams);
      fetchData(updatedParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilterItem]);

  useEffect(() => {
    if (selectedFilterItemList === "All") {
      setParams((prevParams) => ({
        ...prevParams,
        ton_min: "",
      }));
      getOrders();
    } else if (selectedFilterItemList === "My") {
      setParams((prevParams) => ({
        ...prevParams,
        ton_min: "",
      }));
      getMyOrders();
      // getCustomFilter({
      //   ordering: "",
      //   ton_min: "",
      // }, "my_deals/").then((res) => res.json()).then((data) => setOrders(data)).catch((err) => console.log(err));
    } else {
      /* setParams(prevParams => ({
          ...prevParams,
          ton_min: "5"
        })); */
      moreThenFive();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilterItemList]);

  useEffect(() => {

    if (reverseSort && selectedFilterItemList === "My") {
      setParams((prevParams) => ({
        ...prevParams,
        ordering: `${prevParams.ordering.startsWith("-")
          ? prevParams.ordering
          : params.ordering}`,
      }));
      getCustomFilter({
        ...params,
        ordering: `-${params.ordering}`,
      }, "my_deals/").then((res) => res.json()).then((data) => setOrders(data)).catch((err) => console.log(err));
    } else if (!reverseSort && selectedFilterItemList === "My") {
      setParams((prevParams) => ({
        ...prevParams,
        ordering: prevParams.ordering.substring(1),
      }));
      getCustomFilter({
        ...params,
        ordering: `${params.ordering}`,
      }, "my_deals/").then((res) => res.json()).then((data) => setOrders(data)).catch((err) => console.log(err));
    } else if (reverseSort && selectedFilterItemList !== "My") {
      setParams((prevParams) => ({
        ...prevParams,
        ordering: "-" + prevParams.ordering,
      }));
      getCustomFilter(params).then((res) => res.json()).then((data) => setOrders(data)).catch((err) => console.log(err));
    } else {
      setParams((prevParams) => ({
        ...prevParams,
        ordering: prevParams.ordering.startsWith("-")
          ? prevParams.ordering.substring(1)
          : prevParams.ordering,
      }));
      getCustomFilter(params).then((res) => res.json()).then((data) => setOrders(data)).catch((err) => console.log(err));
    }

    // fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reverseSort]);

  useEffect(() => {
    // getMyOrders();
    getOrders();
    // moreThenFive();
    checkUser().then((user) => setUser(user));
    getInfo().then((info) => setInfo(info));
  }, []);


  useEffect(() => {
    let total = [];
    // @ts-ignore
    for (let i = 0; i <= orders?.count / 10; i++) {
      total.push(i + 1);
      console.log(1);
    }
    setTotalPages(total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders]);

  useEffect(() => {
    const paginationFetch = async (url: string) => {
      await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "User-ID": id,
        }
      }).then((res) => res.json()).then((data) => setOrders(data)).catch((err) => console.log(err));
    };

    if (currentPage < activeButton) {
      console.log("Назад");
      const url = orders?.previous;
      if (!url) return;
      paginationFetch(url);
      setActiveButton(currentPage);
    } else if (currentPage > activeButton) {
      const url = orders?.next;
      if (!url) return;
      paginationFetch(url);
      console.log("Вперед");
      setActiveButton(currentPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

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
            <MarketTextInfoListItem
              title="Total crystals"
              val={info?.total_minerals}
            />
            <MarketTextInfoListItem title="Placed crystals" val={info?.placed_minerals} />
            <MarketTextInfoListItem
              title="Total miners"
              val={info?.total_miners}
            />
          </ul>
          <ul className="market__second-info-list">
            <MarketTextInfoListItem title="Minimum price" val={info?.market_minimum_price} />
            <MarketTextInfoListItem title=">5 TON Minimum price" val={info?.market_minimum_price_gt_5} />
            <MarketTextInfoListItem title="Daily volume" val={info?.market_daily_volume} />
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
              onClick={() => {
                setSelectedFilterItemList("All"); /* getOrders();  */
              }}
            >
              All
            </button>
            <button
              className={`market__filters-block-item ${selectedFilterItemList === "My"
                ? "market__filters-block-item-check"
                : ""
                }`}
              type="button"
              onClick={() => {
                setSelectedFilterItemList("My"); /* getMyOrders(); */
              }}
            >
              My
            </button>
            <button
              className={`market__filters-block-item ${selectedFilterItemList === ">5 TON"
                ? "market__filters-block-item-check"
                : ""
                }`}
              type="button"
              onClick={() => {
                setSelectedFilterItemList(">5 TON"); /* moreThenFive(); */
              }}
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
            <button
              className="market__filters-sort-button"
              type="button"
              onClick={() => setReverseSort(!reverseSort)}
            >
              <img
                className="market__filters-sort-icon"
                src={changeWhiteArrowIcon}
                alt="filter arrows icon"
              />
            </button>
          </div>
        </div>
        {selectedFilterItemList && (
          <MarketItemList items={orders} my={selectedFilterItemList === "My"} handleCardSelect={selectedFilterItemList === "My" ? deleteItem : handleCardSelect} />
        )}
        <div className="pagination">
          {totalPages && totalPages.map((page, index) => (
            <button
              className={`pagination__button ${page === currentPage ? "active" : ""}`}
              type="button"
              onClick={() => {
                setCurrentPage(page);
              }}
              key={page}
            >
              {page}
            </button>
          ))}
        </div>
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
