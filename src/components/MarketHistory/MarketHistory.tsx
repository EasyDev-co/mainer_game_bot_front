import "./MarketHistory.css";
import { BackArrowLink } from "../BackArrowLink/BackArrowLink";
import { TitlePage } from "../TitlePage/TitlePage";

export const MarketHistory = () => {
  return (
    <section className="market-history">
      <div className="market-history__container">
        <BackArrowLink link="/market" />
        <TitlePage title="History" />
        <div className="market-history__block">
          <p className="market-history__background-text">
            No transaction records
          </p>
        </div>
      </div>
    </section>
  );
};
