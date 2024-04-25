import "./PopupTon.css";
import { backIcon } from "../../../constants/constants";
import { Popup } from "../Popup/Popup";

export const PopupTon = ({
  onClose,
  title,
  buttonText,
  firstTon,
  secondTon,
  text,
}: {
  onClose: () => void;
  title: string;
  buttonText: string;
  firstTon: string;
  secondTon: string;
  text: JSX.Element | string;
}) => {
  return (
    <Popup onClose={onClose}>
      <form className="popup-ton__form-block">
        <h2 className="popup-ton__title">{title}</h2>
        <div className="popup-ton__images-block">
          <img className="popup-ton__ton-icon" src={firstTon} alt="ton icon" />
          <img
            className="popup-ton__arrow-icon"
            src={backIcon}
            alt="arrow icon"
          />
          <img className="popup-ton__ton-icon" src={secondTon} alt="ton icon" />
        </div>
        <input
          className="popup-ton__input"
          type="number"
          placeholder="0.1"
          min="0.1"
        />
        <div className="popup-ton__button-block">
          <p className="popup-ton__button-text">{text} </p>
          <button className="popup-ton__button" type="button">
            {buttonText}
          </button>
        </div>
      </form>
    </Popup>
  );
};
