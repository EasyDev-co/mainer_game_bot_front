import React, { useState } from "react";
import "./PopupMainBuyMiners.css";
import { diamondIcon, hackIcon, backIcon, id, tg } from "../../../constants/constants";
import { Popup } from "../Popup/Popup";
import { BASE_URL } from "../../../constants/links";
import { TUser } from "../../../types/user";

export const PopupMainBuyMiners = ({ onClose, user }: { onClose: () => void; user?: TUser; }) => {
  const [miners, setMiners] = useState(20);
  const [crystals, setCrystals] = useState(20);
  const [sliderPercentage, setSliderPercentage] = useState((miners / 100) * 100);
  const [userBalance] = useState<number | string | undefined>(user?.minerals_balance);

  const buyMiner = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${BASE_URL}/api/v1/market/purchase_miners_for_minerals/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      },
      body: JSON.stringify({
        miners_count: miners,
      }),
    })
      .then((res) => res.json())
      .then((data) => { tg.showAlert(data.message || data.error); window.location.reload(); console.log(data.message || data.error); })
      .catch((err) => console.log(err));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    console.log(value);
    setMiners(value);
    setCrystals(value);
    setSliderPercentage((value / Number(userBalance)) * 100);
    // setSliderPercentage((value / 100) * 100);
  };

  return (
    <Popup onClose={onClose}>
      <form className="popup-main-buy-miners__form-block">
        <h2 className="popup-main-buy-miners__title">Buy Miners</h2>
        <div className="popup-main-buy-miners__info-container">
          <div className="popup-main-buy-miners__info-val-block">
            <div className="popup-main-buy-miners__icon-block">
              <img
                className="popup-main-buy-miners__icon"
                src={diamondIcon}
                alt="crystal icon"
              />
            </div>
            <div className="popup-main-buy-miners__val-block">
              <p className="popup-main-buy-miners__val-text">{crystals}</p>
              {/* <p className="popup-main-buy-miners__val-text-max">Max: {userBalance}</p> */}
            </div>
          </div>
          <img className="popup-main-buy-miners__arrow-icon" src={backIcon} alt="arrow icon" />
          <div className="popup-main-buy-miners__info-val-block">
            <div className="popup-main-buy-miners__icon-block">
              <img
                className="popup-main-buy-miners__icon"
                src={hackIcon}
                alt="hack icon"
              />
            </div>
            <div className="popup-main-buy-miners__val-block">
              <p className="popup-main-buy-miners__val-text popup-main-buy-miners__val-text-miners">
                {miners}
              </p>
            </div>
          </div>
          <div className="popup-main-buy-miners__slider-block">
            <input
              className="popup-main-buy-miners__slider"
              type="range"
              min="0"
              max={userBalance}
              step="1"
              onChange={handleChange}
            />
            <p className="popup-main-buy-miners__val-text popup-main-buy-miners__clider-percent">{sliderPercentage.toFixed(0)}%</p>
          </div>
        </div>
        <button
          onClick={buyMiner}
          className="popup-main-buy-miners__buy-button"
          type="button"
        >
          Buy
        </button>
      </form>
    </Popup>
  );
};
