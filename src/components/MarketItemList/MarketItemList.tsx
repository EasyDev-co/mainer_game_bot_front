import "./MarketItemList.css";
import { MarketItem } from "../MarketItem/MarketItem";

interface Item {
  crystals: number;
  price: number;
  unitPrice: string;
  seller: string;
}

export const MarketItemList = ({
  items,
  handleCardSelect,
}: {
  items: Item[];
  handleCardSelect: (card: Item) => void;
}) => {
  return (
    <ul className="market-items__lot-list">
      {items.map((item, index: number) => (
        <li key={index} className="market-items__lot-item">
          <MarketItem
            item={item}
            handleCardSelect={handleCardSelect}
          />
        </li>
      ))}
    </ul>
  );
};
