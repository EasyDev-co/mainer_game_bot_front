import "./UserHistoryItemList.css";
import { UserHistoryItem } from "../UserHistoryItem/UserHistoryItem";
import { diamondIcon } from "../../constants/constants";

interface History {
  id: number;
  icon?: string;
  user: string;
  dateDay?: string;
  dateTime?: string;
  value?: string;
  valueTon: string;
}

export const UserHistoryItemList = ({ history }: { history: History[] }) => {
  return (
    <ul className="user-history-item-list__list">
      {history.map((item) => (
        <li key={item.id} className="user-history-item-list__history-block">
          <UserHistoryItem
            user={item.user}
            dateDay={item.dateDay}
            dateTime={item.dateTime}
            value={item.value}
            valueTon={item.valueTon}
            icon={diamondIcon}
          />
        </li>
      ))}
    </ul>
  );
};
