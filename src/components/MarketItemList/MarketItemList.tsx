import "./MarketItemList.css";
import { MarketItem } from "../MarketItem/MarketItem";

interface Item {
  quantity: number;
  price: number;
  unitPrice: string;
  seller: string;
}

export const MarketItemList = ({ items }: { items: Item[] }) => {
  return (
    <ul className="market-items__lot-list">
      {items.map((item, index: number) => (
        <li key={index} className="market-items__lot-item">
          <MarketItem item={item} />
        </li>
      ))}
    </ul>
  );
};
