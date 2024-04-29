import "./ProfileItemWallet.css";

export const ProfileItemWallet = ({
  icon,
  val,
}: {
  icon: string;
  val: string;
}) => {
  return (
    <li className="profile__currencies-item profile__currencies-list-item">
      <img
        className="profile__currencies-item-icon"
        src={icon}
        alt="wallet icon"
      />
      <p className="profile__currencies-item-val">{val}</p>
    </li>
  );
};
