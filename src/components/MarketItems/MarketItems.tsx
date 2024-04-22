import "./MarketItems.css";
import { diamondIcon, tonIcon } from "../../constants/constants";

export const MarketItems = () => {
  return (
    <div className="market-items">
      <ul className="market-items__lot-list">
        <li className="market-items__lot-item">
          <div className="market-items__crystal-block">
            <div className="market-items__lot-title-block market-items__crystal-title-block">
              <img
                className="market-items__lot-icon market-items__crystal-icon"
                src={diamondIcon}
                alt="crystal"
              />
              <p className="market-items__lot-title market-items__crystal-title">
                Crystal
              </p>
            </div>
            <div className="market-items__lot-val-block market-items__crystal-val-block">
              <p className="market-items__lot-val-text market-items__crystal-val-text">
                0
              </p>
            </div>
          </div>
          <div className="market-items__price-block">
            <div className="market-items__lot-title-block market-items__price-title-block">
              <img
                className="market-items__lot-icon market-items__price-icon"
                src={tonIcon}
                alt="ton icon"
              />
              <p className="market-items__lot-title market-items__price-title">
                Price
              </p>
            </div>
            <div className="market-items__lot-val-block market-items__price-val-block">
              <p className="market-items__lot-val-text market-items__price-val-text">
                0
              </p>
            </div>
          </div>
          <p className="market-items__lot-bottom-text">0.00001 TON/crystal</p>
          <p className="market-items__lot-bottom-text">Seller Test</p>
          <button className="market-items__lot-button" type="button">
            Buy
          </button>
        </li>
        <li className="market-items__lot-item">
          <div className="market-items__crystal-block">
            <div className="market-items__lot-title-block market-items__crystal-title-block">
              <img
                className="market-items__lot-icon market-items__crystal-icon"
                src={diamondIcon}
                alt="crystal"
              />
              <p className="market-items__lot-title market-items__crystal-title">
                Crystal
              </p>
            </div>
            <div className="market-items__lot-val-block market-items__crystal-val-block">
              <p className="market-items__lot-val-text market-items__crystal-val-text">
                0
              </p>
            </div>
          </div>
          <div className="market-items__price-block">
            <div className="market-items__lot-title-block market-items__price-title-block">
              <img
                className="market-items__lot-icon market-items__price-icon"
                src={tonIcon}
                alt="ton icon"
              />
              <p className="market-items__lot-title market-items__price-title">
                Price
              </p>
            </div>
            <div className="market-items__lot-val-block market-items__price-val-block">
              <p className="market-items__lot-val-text market-items__price-val-text">
                0
              </p>
            </div>
          </div>
          <p className="market-items__lot-bottom-text">0.00001 TON/crystal</p>
          <p className="market-items__lot-bottom-text">Seller Test</p>
          <button className="market-items__lot-button" type="button">
            Buy
          </button>
        </li>
        <li className="market-items__lot-item">
          <div className="market-items__crystal-block">
            <div className="market-items__lot-title-block market-itemst__crystal-title-block">
              <img
                className="market-items__lot-icon market-items__crystal-icon"
                src={diamondIcon}
                alt="crystal"
              />
              <p className="market-items__lot-title market-itemst__crystal-title">
                Crystal
              </p>
            </div>
            <div className="market-items__lot-val-block market-items__crystal-val-block">
              <p className="market-items__lot-val-text market-items__crystal-val-text">
                0
              </p>
            </div>
          </div>
          <div className="market-items__price-block">
            <div className="market-items__lot-title-block market-items__price-title-block">
              <img
                className="market-items__lot-icon market-items__price-icon"
                src={tonIcon}
                alt="ton icon"
              />
              <p className="market-items__lot-title market-items__price-title">
                Price
              </p>
            </div>
            <div className="market-items__lot-val-block market-items__price-val-block">
              <p className="market-items__lot-val-text market-items__price-val-text">
                0
              </p>
            </div>
          </div>
          <p className="market-items__lot-bottom-text">0.00001 TON/crystal</p>
          <p className="market-items__lot-bottom-text">Seller Test</p>
          <button className="market-items__lot-button" type="button">
            Buy
          </button>
        </li>
        <li className="market-items__lot-item">
          <div className="market-items__crystal-block">
            <div className="market-items__lot-title-block market-items__crystal-title-block">
              <img
                className="market-items__lot-icon market-items__crystal-icon"
                src={diamondIcon}
                alt="crystal"
              />
              <p className="market-items__lot-title market-items__crystal-title">
                Crystal
              </p>
            </div>
            <div className="market-items__lot-val-block market-items__crystal-val-block">
              <p className="market-items__lot-val-text market-items__crystal-val-text">
                0
              </p>
            </div>
          </div>
          <div className="market-items__price-block">
            <div className="market-items__lot-title-block market-items__price-title-block">
              <img
                className="market-items__lot-icon market-items__price-icon"
                src={tonIcon}
                alt="ton icon"
              />
              <p className="market-items__lot-title market-items__price-title">
                Price
              </p>
            </div>
            <div className="market-items__lot-val-block market-items__price-val-block">
              <p className="market-items__lot-val-text market-items__price-val-text">
                0
              </p>
            </div>
          </div>
          <p className="market-items__lot-bottom-text">0.00001 TON/crystal</p>
          <p className="market-items__lot-bottom-text">Seller Test</p>
          <button className="market-items__lot-button" type="button">
            Buy
          </button>
        </li>
      </ul>
    </div>
  );
};
