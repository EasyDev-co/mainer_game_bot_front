import "./Main.css";
import { useEffect, useState } from "react";
import { infoIcon, userPlusIcon, cartIcon } from "../../constants/constants";
import { Link } from "react-router-dom";
import { ModalHowPlay } from "../ModalHowPlay/ModalHowPlay";
import { PopupClaim } from "../Popups/PopupClaim/PopupClaim";
import { PopupMainBuyMiners } from "../Popups/PopupMainBuyMiners/PopupMainBuyMiners";
import { TUser } from "../../types/user";
import { checkUser } from "../../utils/getUser";
import { getInfo } from "../../utils/info";

export const Main = () => {
  //стейт для открытия и закрытия попапа info
  const [isInfoState, setIsInfoState] = useState(false);
  //стейт для открытия и закрытия попапа claim
  const [isClaimPopup, setIsClaimPopup] = useState(false);
  //стейт для открытия и закрытия попапа buy miners
  const [isMainBuyMinersPopup, setIsMainBuyMinersPopup] = useState(false);
  const [user, setUser] = useState<TUser>();

  //функция открытия и закрытия попапа info
  const handleStateInfo = () => {
    setIsInfoState(!isInfoState);
  };

  const handleClaimPopup = () => {
    setIsClaimPopup(!isClaimPopup);
  };

  const handleMainBuyMinersPopup = () => {
    setIsMainBuyMinersPopup(!isMainBuyMinersPopup);
  };

  useEffect(() => {
    checkUser().then((data) => {
      setUser(data);
    }).catch(err => console.log(err));
    getInfo().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <main className="main">
      <div className="main__container">
        <div className="main__buttons-block">
          <button
            onClick={handleMainBuyMinersPopup}
            className="main__buy-button"
            type="button"
          >
            Buy miners
          </button>
          <div className="main__second-buttons-block">
            <button
              onClick={handleStateInfo}
              className="main__info-button"
              type="button"
            >
              <img
                className="main__button-info-icon"
                src={infoIcon}
                alt="info icon"
              />
            </button>
            <button
              onClick={handleClaimPopup}
              className="main__claim-button"
              type="button"
            >
              Claim
            </button>
          </div>
        </div>
        <div className="main__bottom-buttons">
          <Link className="main__ref-button" to="/referrals">
            <img className="main__ref-button-icon" src={userPlusIcon} alt="user plus icon" />
          </Link>
          <Link className="main__market-button" to="/market">
            <img className="main__market-button-icon" src={cartIcon} alt="cart icon" />
          </Link>
        </div>
      </div>
      {isInfoState && <ModalHowPlay onClose={handleStateInfo} />}
      {isClaimPopup && <PopupClaim onClose={handleClaimPopup} />}
      {isMainBuyMinersPopup && (
        <PopupMainBuyMiners onClose={handleMainBuyMinersPopup} user={user} />
      )}
    </main>
  );
};
