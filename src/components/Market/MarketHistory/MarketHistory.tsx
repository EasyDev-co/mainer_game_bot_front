import "./MarketHistory.css";
import { historyTwo } from "../../../constants/data";
import { BackArrowLink } from "../../BackArrowLink/BackArrowLink";
import { TitlePage } from "../../TitlePage/TitlePage";
import { UserHistoryItemList } from "../../UserHistoryItemList/UserHistoryItemList";

export const MarketHistory = () => {
  return (
    <section className="market-history">
      <div className="market-history__container">
        <BackArrowLink link="/market" />
        <TitlePage title="History" />
        <div className="market-history__block">
          {historyTwo.length > 0 ? (
            <UserHistoryItemList history={historyTwo} />
          ) : (
            <p className="market-history__background-text">
              No transaction records
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
