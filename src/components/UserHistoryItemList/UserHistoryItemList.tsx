import "./UserHistoryItemList.css";
import { UserHistoryItem } from "../UserHistoryItem/UserHistoryItem";
import { diamondIcon } from "../../constants/constants";
import { TReferrals } from "../../types/referrals";
import { TMarketDeal } from "../../types/market";

interface History {
  referrer_name: string;
  amount: number;
  created_at: string;
}

export const UserHistoryItemList = ({ history, referrals }: { history: History[]; referrals?: TReferrals | undefined; }) => {
  return (
    <ul className="user-history-item-list__list">
      {history.map((item, index) => (
        <li key={index} className="user-history-item-list__history-block">
          <UserHistoryItem
            user={item.referrer_name}
            dateDay={item.created_at?.split(',')[0] || ''}
            dateTime={item.created_at?.split(',')[1] || ''}
            value={item.amount}
            icon={diamondIcon}
          />
        </li>
      ))}
    </ul>
  );
};