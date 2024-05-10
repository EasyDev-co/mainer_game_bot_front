import "./ReferralsInfoBlockListItem.css";

export const ReferralsInfoBlockListItem = ({
  icon,
  title,
  info,
}: {
  icon: string;
  title: string | undefined;
  info: number | string | undefined;
}) => {
  return (
    <li className="referrals__val-block">
      <div className="referrals__info-title-block">
        <img className="referrals__info-icon" src={icon} alt="item icon" />
        <h2 className="referrals__info-title">{title}</h2>
      </div>
      <p className="referrals__info-val-text">{info}</p>
    </li>
  );
};
