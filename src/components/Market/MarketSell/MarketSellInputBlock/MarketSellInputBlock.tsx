import "./MarketSellInputBlock.css";

export const MarketSellInputBlock = ({
  icon,
  title,
  firstText,
  firstTextVal,
  valInput,
  secondText,
}: {
  icon: string;
  title: string;
  firstText?: string;
  firstTextVal?: string;
  valInput: string;
  secondText: string;
}) => {
  return (
    <div className="market-sell__input-container">
      <div className="market-sell__input-info-block">
        <div className="market-sell__title-block">
          <img
            className="market-sell__title-icon"
            src={icon}
            alt="wallet icon"
          />
          <h3 className="market-sell__subtitle">{title}</h3>
        </div>
        <p className="market-sell__text">
          {firstText}{" "}
          <span className="market-sell__text-span">{firstTextVal}</span>
        </p>
      </div>
      <input
        className="market-sell__input"
        type="text"
        placeholder={valInput}
      />
      <p className="market-sell__text">{secondText}</p>
    </div>
  );
};
