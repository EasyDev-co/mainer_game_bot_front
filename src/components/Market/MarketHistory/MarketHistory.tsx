import "./MarketHistory.css";
import { BackArrowLink } from "../../BackArrowLink/BackArrowLink";
import { TitlePage } from "../../TitlePage/TitlePage";
import { BASE_URL } from "../../../constants/links";
import { id } from "../../../constants/constants";
import { useEffect, useState } from "react";
import { MarketHistoryList } from "./MarketHistoryList";

export const MarketHistory = () => {
  const [history, setHistory] = useState<undefined | any>();

  const getHistory = async () => {
    await fetch(`${BASE_URL}/api/v1/market/deals/history/`, {
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

  if (!history) return null;

  return (
    <section className="market-history">
      <div className="market-history__container">
        <BackArrowLink link="/market" />
        <TitlePage title="History" />
        <div className="market-history__block">
          {history?.length ? (
            <MarketHistoryList history={history} />
          ) : (
            <p className="market-history__background-text">
              No transaction records
            </p>
          )}
        </div>
      </div>
    </section >
  );
};
