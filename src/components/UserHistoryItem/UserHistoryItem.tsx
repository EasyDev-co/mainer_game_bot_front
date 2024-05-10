import "./UserHistoryItem.css";

export const UserHistoryItem = ({
  icon,
  user,
  dateDay,
  dateTime,
  value,
  valueTon,
}: {
  icon: string;
  user: string;
  dateDay?: string;
  dateTime?: string;
  value?: string | number;
  valueTon?: string;
}) => {
  return (
    <>
      <div className="user-history-item__icon-block">
        <img className="user-history-item__icon" src={icon} alt="wallet icon" />
      </div>
      <div className="user-history-item__item-text-blocks">
        <div className="user-history-item__item-text-block">
          <p className="user-history-item__text">
            From: <span className="user-history-item__text-span">{user}</span>
          </p>
          <p className="user-history-item__text-val">{value}</p>
        </div>
        <div className="user-history-item__item-text-block">
          <p className="user-history-item__text">
            {dateDay}, {dateTime}
          </p>
          <p className="user-history-item__text">
            <span className="user-history-item__text-ton">{valueTon}</span> TON
          </p>
        </div>
      </div>
    </>
  );
};
