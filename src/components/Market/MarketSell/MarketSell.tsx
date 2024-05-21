import "./MarketSell.css";
import { tonIcon, diamondIcon, id, tg } from "../../../constants/constants";
import { BackArrowLink } from "../../BackArrowLink/BackArrowLink";
import { TitlePage } from "../../TitlePage/TitlePage";
import { MarketSellInputBlock } from "./MarketSellInputBlock/MarketSellInputBlock";
import { useEffect, useState } from "react";
import { TUser } from "../../../types/user";
import { checkUser } from "../../../utils/getUser";
import { BASE_URL } from "../../../constants/links";
import { getInfo } from "../../../utils/info";

export const MarketSell = () => {
  const [user, setUser] = useState<TUser>();
  const [crystal, setCrystal] = useState(0);
  const [ton, setTon] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  useEffect(() => {
    checkUser().then(data => setUser(data));
    getInfo().then(data => setMinPrice(data.min_amount_minerals_for_sale));
  }, []);

  useEffect(() => {
    console.log(crystal, ton);
  }, [crystal, ton]);

  const sellValue = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${BASE_URL}/api/v1/market/deals/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      },
      body: JSON.stringify({
        minerals_count: crystal,
        ton_count: ton,
      }),
    }).then(res => res.json()).then(data => data.status === 201 ? tg.showAlert(`Successflly created\nУспешно создано`) : tg.showAlert(data.error)).catch(err => console.log(err));
  };

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
            setCrystal={setCrystal}
            valInput="0"
            secondText={`Minimum sale amount: ${Number(minPrice).toFixed(0)} crystals`}
          />
          <MarketSellInputBlock
            icon={tonIcon}
            title="TON"
            valInput="0"
            setTon={setTon}
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
          <button className="market-sell__button" onClick={(e) => sellValue(e)}>
            Sell
          </button>
        </form>
      </div>
    </section>
  );
};
