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
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";

export const Header = () => {
  const location = useLocation();
  const [tonConnectUI] = useTonConnectUI();
  const address = useTonAddress();
  //стейт для открытия и закрытия попапа buy miners
  const [isMainBuyMinersPopup, setIsMainBuyMinersPopup] = useState(false);
  const [user, setUser] = useState<TUser>();

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
            <HeaderItem
              icon={hackIcon}
              val={user?.miners_count || "-"}
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
              val={user?.minerals_balance || "-"}
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
              val={user?.ton_balance || "-"}
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
          <button className="header__currencies-item-replenish" style={{ cursor: "pointer" }}
            onClick={() => address ? tonConnectUI.disconnect() : tonConnectUI.openModal()}>
            <img
              className="header__wallet-icon"
              src={walletDarkIcon}
              alt="wallet icon"
            />
          </button>
          {/* <Link className="header__currencies-item-replenish" to="/profile">
            <img
              className="header__wallet-icon"
              src={walletDarkIcon}
              alt="wallet icon"
            />
          </Link> */}
        </div>
      </header>
      {isMainBuyMinersPopup && (
        <PopupMainBuyMiners onClose={handleMainBuyMinersPopup} />
      )}
    </>
  );
};
