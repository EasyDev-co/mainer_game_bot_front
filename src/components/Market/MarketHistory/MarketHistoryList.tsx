import "../../UserHistoryItemList/UserHistoryItemList.css";
import { diamondIcon } from "../../../constants/constants";
import { MarketHistoryItem } from "./MarketHistoryItem";
import { TMarketDeal } from "../../../types/market";
import { TReferrals } from "../../../types/referrals";

interface History {
  referrer_name: string;
  amount: number;
  created_at: string;
}

export const MarketHistoryList = ({ history, referrals }: { history: TMarketDeal[] | undefined; referrals?: TReferrals | undefined; }) => {
  if (!history) return null;
  return (
    <ul className="user-history-item-list__list">
      {history.map((item, index) => (
        <li key={index} className="user-history-item-list__history-block">
          <MarketHistoryItem
            user={item.buyer}
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