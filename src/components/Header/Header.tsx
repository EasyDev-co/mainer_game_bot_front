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
            <li className="header__currencies-item header__currencies-list-item">
              <img
                className="header__currencies-item-icon"
                src={hackIcon}
                alt="miner icon"
              />
              <p className="header__currencies-item-val">0</p>
              {location.pathname !== "/" && (
                <img
                  className="header__plus-icon"
                  src={plusIcon}
                  alt="plus icon"
                  onClick={handleMainBuyMinersPopup}
                />
              )}
            </li>
            <li className="header__currencies-item header__currencies-list-item">
              <img
                className="header__currencies-item-icon"
                src={diamondIcon}
                alt="diamond icon"
              />
              <p className="header__currencies-item-val">0</p>
              {location.pathname !== "/" && (
                <Link to="/market">
                  <img
                    className="header__plus-icon"
                    src={plusIcon}
                    alt="plus icon"
                  />
                </Link>
              )}
            </li>
            <li className="header__currencies-item header__currencies-list-item">
              <img
                className="header__currencies-ton-icon header__currencies-item-icon"
                src={tonWhiteIcon}
                alt="ton icon"
              />
              <p className="header__currencies-item-val">0</p>
              {location.pathname !== "/" && (
                <img
                  className="header__plus-icon"
                  src={plusIcon}
                  alt="plus icon"
                />
              )}
            </li>
          </ul>
          <Link
            className="header__currencies-item header__currencies-item-replenish"
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
