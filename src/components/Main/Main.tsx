import "./Main.css";
import { manMinerIcon, changeArrowIcon } from "../../constants/constants";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <main className="main">
      <div className="blur">
        <div className="main__container">
          <div className="main__miner-img-container">
            <img
              className="main__miner-img"
              src={manMinerIcon}
              alt="miner img"
            />
          </div>
          <div className="main__buttons-block">
            <button className="main__change-button" type="button">
                <img className="main__change-button-icon" src={changeArrowIcon} alt="" />
              Change
            </button>
            <button className="main__collect-button" type="button">
              Collect
            </button>
          </div>
          <div className="main__bottom-buttons">
            <Link className="main__ref-button" to="/referrals" />
            <Link className="main__market-button" to="/market" />
          </div>
        </div>
      </div>
    </main>
  );
};
