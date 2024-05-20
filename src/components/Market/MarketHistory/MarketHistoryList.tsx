import "../../UserHistoryItemList/UserHistoryItemList.css";
import { diamondIcon } from "../../../constants/constants";
import { MarketHistoryItem } from "./MarketHistoryItem";
import { TMarketDeal } from "../../../types/market";
import { TReferrals } from "../../../types/referrals";

export const MarketHistoryList = ({ history, referrals }: { history: TMarketDeal[] | undefined | any; referrals?: TReferrals | undefined; }) => {
  console.log(history);
  if (!history) return null;
  return (
    <ul className="user-history-item-list__list">
      {history.map((item: any, index: number) => (
        <li key={index} className="user-history-item-list__history-block">
          <MarketHistoryItem
            user={item.buyer?.username}
            dateDay={item.created.split('T')[0]}
            dateTime={item.created.split('T')[1].split('.')[0]}
            value={item.minerals_count}
            valueTon={item.ton_count}
            icon={diamondIcon}
          />
        </li>
      ))}
    </ul>
  );
};