import "./MarketSell.css";
import { tonIcon, diamondIcon } from "../../../constants/constants";
import { BackArrowLink } from "../../BackArrowLink/BackArrowLink";
import { TitlePage } from "../../TitlePage/TitlePage";
import { MarketSellInputBlock } from "./MarketSellInputBlock/MarketSellInputBlock";
import { useEffect, useState } from "react";
import { TUser } from "../../../types/user";
import { checkUser } from "../../../utils/getUser";

export const MarketSell = () => {
  const [user, setUser] = useState<TUser>();

  useEffect(() => {
    checkUser().then(data => setUser(data));
  }, []);

  return (
    <section className="market-sell">
      <div className="market-sell__container">
        <BackArrowLink link="/market" />
        <TitlePage title="Sell" />
        <form className="market-sell__form">
          <MarketSellInputBlock
            icon={diamondIcon}
            title="Crystal"
            firstText="You have crystals: "
            firstTextVal={user?.minerals_balance}
            valInput="0"
            secondText="Minimum sale amount: 100 crystals"
          />
          <MarketSellInputBlock
            icon={tonIcon}
            title="TON"
            valInput="0"
            secondText="Commission 5% per sale"
          />
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
