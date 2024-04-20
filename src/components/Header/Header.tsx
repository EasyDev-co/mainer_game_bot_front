import "./Header.css";
import { diamondIcon, hackIcon, tonIcon } from "../../constants/constants";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__currencies-block">
        <ul className="header__currencies-list">
          <li className="header__currencies-item header__currencies-list-item">
            <img
              className="header__currencies-item-icon"
              src={hackIcon}
              alt="miner icon"
            />
            <p className="header__currencies-item-val">0</p>
          </li>
          <li className="header__currencies-item header__currencies-list-item">
            <img
              className="header__currencies-item-icon"
              src={diamondIcon}
              alt="diamond icon"
            />
            <p className="header__currencies-item-val">0</p>
          </li>
          <li className="header__currencies-item header__currencies-list-item">
            <img
              className="header__currencies-item-icon"
              src={tonIcon}
              alt="ton icon"
            />
            <p className="header__currencies-item-val">0</p>
          </li>
        </ul>
        <button
          className="header__currencies-item header__currencies-item-replenish"
          type="button"
        />
      </div>
    </header>
  );
};
