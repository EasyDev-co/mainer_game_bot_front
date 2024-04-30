import "./ModalHowPlay.css";
import {
  logoNoBgZoomIcon,
  backIcon,
  barrelСrystalsIcon,
  moneyBagIcon,
} from "../../constants/constants";

export const ModalHowPlay = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="modal-how-play">
      <div className="modal-how-play__container">
        <h2 className="modal-how-play__title">How to Play</h2>
        <ul className="modal-how-play__list">
          <li className="modal-how-play__item">
            <img
              className="modal-how-play__item-img"
              src={logoNoBgZoomIcon}
              alt="miner"
            />
            <div className="modal-how-play__item-info-block">
              <div className="modal-how-play__item-text-block">
                <h3 className="modal-how-play__item-title">Buy a miner</h3>
                <p className="modal-how-play__item-text">
                  They produce crystals
                </p>
              </div>
              <img
                className="modal-how-play__item-arrow"
                src={backIcon}
                alt="down arrow"
              />
            </div>
          </li>
          <li className="modal-how-play__item">
            <img
              className="modal-how-play__item-img"
              src={barrelСrystalsIcon}
              alt="crystals"
            />
            <div className="modal-how-play__item-info-block">
              <div className="modal-how-play__item-text-block">
                <h3 className="modal-how-play__item-title">Sell crystals</h3>
              </div>
              <img
                className="modal-how-play__item-arrow"
                src={backIcon}
                alt="down arrow"
              />
            </div>
          </li>
          <li className="modal-how-play__item">
            <img
              className="modal-how-play__item-img"
              src={moneyBagIcon}
              alt="coins"
            />
            <div className="modal-how-play__item-info-block">
              <div className="modal-how-play__item-text-block">
                <h3 className="modal-how-play__item-title">Earn money</h3>
              </div>
            </div>
          </li>
        </ul>
        <button
          onClick={onClose}
          className="modal-how-play__back-button"
          type="button"
        >
          Tap to continue
        </button>
      </div>
    </div>
  );
};
