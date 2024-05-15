import "./PopupMarketItem.css";

export const PopupMarketItem = ({
  titleIcon,
  title,
  walletText,
  walletVal,
  bottomText,
  itemValue,
}: {
  titleIcon: string;
  title: string;
  walletText?: string;
  walletVal?: string | number | undefined;
  bottomText?: string;
  itemValue: string | number;
}) => {
  return (
    <>
      <div className="popup-market__item">
        <div className="popup-market__wallet-block">
          <div className="popup-market__title-block">
            <img
              className="popup-market__item-icon"
              src={titleIcon}
              alt="wallet icon"
            />
            <h3 className="popup-market__item-title">{title}</h3>
          </div>
          <div className="popup-market__item-text-block">
            <p className="popup-market__item-text">
              {walletText}{" "}
              <span className="popup-market__item-span">{walletVal}</span>
            </p>
          </div>
        </div>
        <div className="popup-market__item-input">
          <p className="popup-market__item-input-text">{itemValue}</p>
        </div>
        <p className="popup-market__item-text">{bottomText}</p>
      </div>
    </>
  );
};
