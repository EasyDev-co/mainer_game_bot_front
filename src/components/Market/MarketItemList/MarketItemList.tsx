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
  my,
}: {
  items: TMarket | undefined | any;
  handleCardSelect: (card: Item) => void;
  my?: boolean | undefined;
}) => {
  /* console.log(items); */
  return (
    <ul className="market-items__lot-list">
      {items?.results ? items?.results?.map((item: any) => (
        <li key={item.id} className="market-items__lot-item">
          <MarketItem item={item} handleCardSelect={handleCardSelect} my={my} />
        </li>
      )) : items ? items.map((item: any) => (
        <li key={item.id} className="market-items__lot-item">
          <MarketItem item={item} handleCardSelect={handleCardSelect} my={my} />
        </li>
      )) : (
        <h1>Orders not found</h1>
      )}
    </ul>
  );
};
