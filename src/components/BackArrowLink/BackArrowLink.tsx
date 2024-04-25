import "./BackArrowLink.css";
import { backIcon } from "../../constants/constants";
import { Link } from "react-router-dom";

export const BackArrowLink = ({link}: {link: string}) => {
  return (
    <Link className="back-arrow-link" to={link}>
      <img
        className="back-arrow-link__icon"
        src={backIcon}
        alt="back arrow"
      />
    </Link>
  );
};
