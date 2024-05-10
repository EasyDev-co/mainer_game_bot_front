import "./PopupBuyMiner.css";
import React, { useState } from "react";
import { hackIcon, id, tg } from "../../../constants/constants";
import { Popup } from "../Popup/Popup";
import { BASE_URL } from "../../../constants/links";

export const PopupBuyMiner = ({ onClose }: { onClose: () => void; }) => {
  const [inputValue, setInputValue] = useState(0);
  const [miners, setMiners] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) * 1.5;
    setInputValue(value);
    setMiners(+e.target.value);
    console.log(miners);
  };

  const buyMiner = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${BASE_URL}/api/v1/market/purchase_mainer/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      },
      body: JSON.stringify({
        miners_packs: miners,
      }),
    })
      .then((res) => res.json())
      .then((data) => { tg.showAlert(data.message || data.error); window.location.reload(); console.log(data.message || data.error); })
      .catch((err) => console.log(err));
  };

  return (
    <Popup onClose={onClose}>
      <form className="popup-buy-miner__form-block">
        <h2 className="popup-buy-miner__title">Buy Miner</h2>
        <p className="popup-buy-miner__subtitle">
          1 miner package = 4000 miners
        </p>
        <div className="popup-buy-miner__input-container">
          <img
            className="popup-buy-miner__input-icon"
            src={hackIcon}
            alt="hack icon"
          />
          <input
            className="popup-buy-miner__input"
            type="number"
            placeholder="0"
            onChange={handleInputChange}
          />
        </div>
        <p className="popup-buy-miner__text-sum">Sum TON: {inputValue}</p>
        <button
          onClick={buyMiner} className="popup-buy-miner__buy-button" type="button">
          Buy
        </button>
      </form>
    </Popup>
  );
};
