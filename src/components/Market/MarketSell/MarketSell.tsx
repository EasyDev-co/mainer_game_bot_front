import "./MarketSell.css";
import { tonIcon, diamondIcon } from "../../../constants/constants";
import { BackArrowLink } from "../../BackArrowLink/BackArrowLink";
import { TitlePage } from "../../TitlePage/TitlePage";

export const MarketSell = () => {
  return (
    <section className="market-sell">
      <div className="market-sell__container">
        <BackArrowLink link="/market" />
        <TitlePage title="Sell" />
        <form className="market-sell__form">
          <div className="market-sell__input-container">
            <div className="market-sell__input-info-block">
              <div className="market-sell__title-block">
                <img
                  className="market-sell__title-icon"
                  src={diamondIcon}
                  alt="crystal icon"
                />
                <h3 className="market-sell__subtitle">Crystal</h3>
              </div>
              <p className="market-sell__text">
                You have crystals:{" "}
                <span className="market-sell__text-span">0</span>
              </p>
            </div>
            <input className="market-sell__input" type="text" placeholder="0" />
            <p className="market-sell__text">
              Minimum sale amount: 100 crystals
            </p>
          </div>
          <div className="market-sell__input-container">
            <div className="market-sell__input-info-block">
              <div className="market-sell__title-block">
                <img
                  className="market-sell__title-icon"
                  src={tonIcon}
                  alt="ton icon"
                />
                <h3 className="market-sell__subtitle">TON</h3>
              </div>
            </div>
            <input className="market-sell__input" type="text" placeholder="0" />
            <p className="market-sell__text">Commission 5% per sale</p>
          </div>
          <p className="market-sell__text market-sell__min-text">
            Current minimum price: 1 crystal = 0.001 TON
          </p>
          <div className="market-sell__total-price-block">
            <p className="market-sell__text">
              The price of your TON/crystal:{" "}
              <span className="market-sell__text-span">0 TON/crystal</span>
            </p>
          </div>
          <button className="market-sell__button" type="submit">
            Sell
          </button>
        </form>
      </div>
    </section>
  );
};
