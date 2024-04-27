import "./MarketItem.css";
import { diamondIcon, tonIcon } from "../../../constants/constants";

interface Item {
  id: number;
  crystals: number;
  price: number;
  unitPrice: string;
  seller: string;
}

export const MarketItem = ({
  item,
  handleCardSelect,
}: {
  item: Item;
  handleCardSelect: (card: Item) => void;
}) => {
  const handleClick = () => {
    handleCardSelect(item);
  };
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
            {item.crystals}
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
            {item.price}
          </p>
        </div>
      </div>
      <p className="market-items__lot-bottom-text">
        {item.unitPrice} TON/crystal
      </p>
      <p className="market-items__lot-bottom-text">Seller {item.seller}</p>
      <button
        onClick={handleClick}
        className="market-items__lot-button"
        type="button"
      >
        Buy
      </button>
    </>
  );
};
