import "./MarketTextInfoListItem.css";

export const MarketTextInfoListItem = ({
  title,
  val,
}: {
  title: string;
  val: string | number | undefined;
}) => {
  return (
    <li className="market__text-info-list-item">
      <h3 className="market__info-list-item-title">{title}</h3>
      <p className="market__info-list-item-val">{val}</p>
    </li>
  );
};
