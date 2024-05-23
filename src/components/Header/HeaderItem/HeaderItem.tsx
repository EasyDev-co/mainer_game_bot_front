import "./HeaderItem.css";

export const HeaderItem = ({
  icon,
  val,
  output,
  plusCode,
}: {
  icon: string;
  output?: boolean | undefined;
  val: number | string | undefined;
  plusCode?: any;
}) => {
  return (
    <li className={`header__currencies-item header__currencies-list-item ${output ? 'header__currencies-item-output' : ''}`}>
      <img
        className="header__currencies-item-icon"
        src={icon}
        alt="wallet icon"
      />
      <p className={`header__currencies-item-val ${output ? "header__currencies-item-val-output" : ''}`}>{val}</p>
      {plusCode}
    </li>
  );
};
