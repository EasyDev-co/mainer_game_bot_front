import "./ReferralsInfoBlockList.css";
import { ReferralsInfoBlockListItem } from "../ReferralsInfoBlockListItem/ReferralsInfoBlockListItem";

interface BlockItem {
  id: number;
  icon: string;
  title: string;
  info: string;
}

export const ReferralsInfoBlockList = ({
  referralsInfoBlockItem,
}: {
  referralsInfoBlockItem: BlockItem[];
}) => {
  return (
    <ul className="referrals__first-info-block">
      {referralsInfoBlockItem.map((item) => (
        <li key={item.id} className="referrals__val-block">
          <ReferralsInfoBlockListItem
            icon={item.icon}
            title={item.title}
            info={item.info}
          />
        </li>
      ))}
    </ul>
  );
};
