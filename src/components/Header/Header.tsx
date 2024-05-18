import { useEffect, useState } from "react";
import "./Header.css";
import {
  diamondIcon,
  hackIcon,
  plusIcon,
  walletDarkIcon,
  tonWhiteIcon
} from "../../constants/constants";
import { Link } from "react-router-dom";
import { PopupMainBuyMiners } from "../Popups/PopupMainBuyMiners/PopupMainBuyMiners";
import { HeaderItem } from "./HeaderItem/HeaderItem";
import { TUser } from "../../types/user";
import { checkUser } from "../../utils/getUser";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { getInfo } from "../../utils/info";

export const Header = () => {
  const [tonConnectUI] = useTonConnectUI();
  const address = useTonAddress();
  //стейт для открытия и закрытия попапа buy miners
  const [isMainBuyMinersPopup, setIsMainBuyMinersPopup] = useState(false);
  const [user, setUser] = useState<TUser>();
  const [isPresale, setIsPresale] = useState<boolean>();
  console.log(isPresale);

  useEffect(() => {
    getInfo().then((data) => {
      if (data.is_presale) {
        setIsPresale(true);
        console.log(data);
      } else {
        setIsPresale(false);
      }
    });
  }, []);
  console.log(user);

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
              val={user?.miners_count || 0}
              plusCode={
                !isPresale && (
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
              val={user?.minerals_balance || 0}
              plusCode={
                !isPresale && (
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
              val={user?.ton_balance || 0}
              plusCode={
                !isPresale && (
                  <Link to={"/profile"}>
                    <img
                      className="header__plus-icon"
                      src={plusIcon}
                      alt="plus icon"
                    />
                  </Link>
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
