import "./PopupBuyMiner.css";
import { hackIcon } from "../../constants/constants";

export const PopupBuyMiner = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="popup-buy-miner">
      <div className="popup-buy-miner__container">
        <button className="popup-buy-miner__button-closed" onClick={onClose} />
        <div className="popup-buy-miner__form-block">
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
              type="text"
              placeholder="0"
            />
          </div>
          <p className="popup-buy-miner__text-sum">Sum TON: 0</p>
          <button className="popup-buy-miner__buy-button" type="button">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};
