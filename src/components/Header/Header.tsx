import { useEffect, useState } from "react";
import "./Header.css";
import {
  diamondIcon,
  hackIcon,
  plusIcon,
  walletDarkIcon,
  tonWhiteIcon
} from "../../constants/constants";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { PopupMainBuyMiners } from "../Popups/PopupMainBuyMiners/PopupMainBuyMiners";
import { HeaderItem } from "./HeaderItem/HeaderItem";
import { TUser } from "../../types/user";
import { checkUser } from "../../utils/getUser";
import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";

export const Header = () => {
  const location = useLocation();
  //стейт для открытия и закрытия попапа buy miners
  const [isMainBuyMinersPopup, setIsMainBuyMinersPopup] = useState(false);
  const [user, setUser] = useState<TUser>();
  const [tonConnectUi] = useTonConnectUI();

  const handleMainBuyMinersPopup = () => {
    setIsMainBuyMinersPopup(!isMainBuyMinersPopup);
  };

  useEffect(() => {
    checkUser().then(data => setUser(data));
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__currencies-block">
          <ul className="header__currencies-list">
            <TonConnectButton />
            <button onClick={() => tonConnectUi.openModal()}>Тест</button>
            <HeaderItem
              icon={hackIcon}
              val={user?.miners_count}
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
              val={user?.minerals_balance}
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
              val={user?.ton_balance}
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
          <Link className="header__currencies-item-replenish" to="/profile">
            <img
              className="header__wallet-icon"
              src={walletDarkIcon}
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
