import "./PopupBuyMiner.css";
import React, { useState } from "react";
import { hackIcon } from "../../../constants/constants";
import { Popup } from "../Popup/Popup";

export const PopupBuyMiner = ({ onClose }: { onClose: () => void }) => {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) * 1.5;
    setInputValue(value);
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
        <button className="popup-buy-miner__buy-button" type="button">
          Buy
        </button>
      </form>
    </Popup>
  );
};
