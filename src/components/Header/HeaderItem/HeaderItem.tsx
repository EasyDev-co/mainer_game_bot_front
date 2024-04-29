import "./HeaderItem.css";

export const HeaderItem = ({
  icon,
  val,
  plusCode,
}: {
  icon: string;
  val: string;
  plusCode: any;
}) => {
  return (
    <li className="header__currencies-item header__currencies-list-item">
      <img
        className="header__currencies-item-icon"
        src={icon}
        alt="wallet icon"
      />
      <p className="header__currencies-item-val">{val}</p>
      {plusCode}
    </li>
  );
};
