import "./MarketItemList.css";
import { MarketItem } from "../MarketItem/MarketItem";
import { TMarket } from "../../../types/market";

interface Item {
  id: number;
  crystals: number;
  price: number;
  unitPrice: string;
  seller: string;
}

export const MarketItemList = ({
  items,
  handleCardSelect,
}: {
  items: TMarket | undefined;
  handleCardSelect: (card: Item) => void;
}) => {
  console.log(items);
  return (
    <ul className="market-items__lot-list">
      {items?.results?.map((item) => (
        <li key={item.id} className="market-items__lot-item">
          <MarketItem item={item} handleCardSelect={handleCardSelect} />
        </li>
      ))}
    </ul>
  );
};
