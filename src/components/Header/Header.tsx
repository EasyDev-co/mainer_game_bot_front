import { useState } from "react";
import "./Header.css";
import {
  diamondIcon,
  hackIcon,
  plusIcon,
  walletIcon,
  tonWhiteIcon,
} from "../../constants/constants";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { PopupMainBuyMiners } from "../Popups/PopupMainBuyMiners/PopupMainBuyMiners";
import { HeaderItem } from "./HeaderItem/HeaderItem";

export const Header = () => {
  const location = useLocation();
  //стейт для открытия и закрытия попапа buy miners
  const [isMainBuyMinersPopup, setIsMainBuyMinersPopup] = useState(false);

  const handleMainBuyMinersPopup = () => {
    setIsMainBuyMinersPopup(!isMainBuyMinersPopup);
  };

  return (
    <>
      <header className="header">
        <div className="header__currencies-block">
          <ul className="header__currencies-list">
            <HeaderItem
              icon={hackIcon}
              val="0"
              plusCode={
                location.pathname !== "/" && (
                  <img
                    className="header__plus-icon"
                    src={plusIcon}
                    alt="plus icon"
                    onClick={handleMainBuyMinersPopup}
                  />
                )
              }
            />
            <HeaderItem
              icon={diamondIcon}
              val="0"
              plusCode={
                location.pathname !== "/" && (
                  <Link to="/market">
                    <img
                      className="header__plus-icon"
                      src={plusIcon}
                      alt="plus icon"
                    />
                  </Link>
                )
              }
            />
            <HeaderItem
              icon={tonWhiteIcon}
              val="0"
              plusCode={
                location.pathname !== "/" && (
                  <img
                    className="header__plus-icon"
                    src={plusIcon}
                    alt="plus icon"
                  />
                )
              }
            />
          </ul>
          <Link
            className="header__currencies-item-replenish"
            to="/profile"
          >
            <img
              className="header__wallet-icon"
              src={walletIcon}
              alt="wallet icon"
            />
          </Link>
        </div>
      </header>
      {isMainBuyMinersPopup && (
        <PopupMainBuyMiners onClose={handleMainBuyMinersPopup} />
      )}
    </>
  );
};
