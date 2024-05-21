import "./MarketSellInputBlock.css";

export const MarketSellInputBlock = ({
  icon,
  title,
  firstText,
  firstTextVal,
  setTon,
  setCrystal,
  valInput,
  secondText,
}: {
  icon: string;
  title: string;
  firstText?: string;
  firstTextVal?: string | number | undefined;
  setTon?: React.Dispatch<React.SetStateAction<number>>;
  setCrystal?: React.Dispatch<React.SetStateAction<number>>;
  valInput: string;
  secondText?: string | undefined;
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
        type="number"
        placeholder={valInput}
        onChange={(e) => title === "Crystal" && setCrystal ? setCrystal(+e.target.value) : setTon && setTon(+e.target.value)}
      />
      <p className="market-sell__text">{secondText}</p>
    </div>
  );
};
