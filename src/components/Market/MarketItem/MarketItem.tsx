import "./MarketItem.css";
import { diamondIcon, tonIcon } from "../../../constants/constants";
import { TMarketDeal } from "../../../types/market";

export const MarketItem = ({
  item,
  handleCardSelect,
  my
}: {
  item: TMarketDeal;
  handleCardSelect: (card: any) => void;
  my?: boolean | undefined;
}) => {
  /* console.log(item); */
  return (
    <>
      <div className="market-items__crystal-block">
        <div className="market-items__lot-title-block market-items__crystal-title-block">
          <img
            className="market-items__lot-icon market-items__crystal-icon"
            src={diamondIcon}
            alt="crystal"
          />
          <p className="market-items__lot-title market-items__crystal-title">
            Crystal
          </p>
        </div>
        <div className="market-items__lot-val-block market-items__crystal-val-block">
          <p className="market-items__lot-val-text market-items__crystal-val-text">
            {item.minerals_count}
          </p>
        </div>
      </div>
      <div className="market-items__price-block">
        <div className="market-items__lot-title-block market-items__price-title-block">
          <img
            className="market-items__lot-icon market-items__price-icon"
            src={tonIcon}
            alt="ton icon"
          />
          <p className="market-items__lot-title market-items__price-title">
            Price
          </p>
        </div>
        <div className="market-items__lot-val-block market-items__price-val-block">
          <p className="market-items__lot-val-text market-items__price-val-text">
            {item.ton_count}
          </p>
        </div>
      </div>
      <p className="market-items__lot-bottom-text">
        {item.price_per_mineral} TON/crystal
      </p>
      <p className="market-items__lot-bottom-text">Seller {item.seller.username}</p>
      <button
        onClick={() => handleCardSelect(item)}
        className="market-items__lot-button"
        type="button"
      >
        {my ? "Cancel" : "Buy"}
      </button>
    </>
  );
};
