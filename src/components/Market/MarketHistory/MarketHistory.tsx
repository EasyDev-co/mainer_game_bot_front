import "./MarketHistory.css";
import { historyTwo } from "../../../constants/data";
import { BackArrowLink } from "../../BackArrowLink/BackArrowLink";
import { TitlePage } from "../../TitlePage/TitlePage";
import { UserHistoryItemList } from "../../UserHistoryItemList/UserHistoryItemList";
import { BASE_URL } from "../../../constants/links";
import { id } from "../../../constants/constants";
import { useEffect, useState } from "react";

export const MarketHistory = () => {
  const [history, setHistory] = useState();

  const getHistory = async () => {
    await fetch(`${BASE_URL}/api/v1/market/deals/my_delas/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      },
    })
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getHistory();
  }, []);

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
