import { useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import {
  infoIcon,
  whiteDiamondIcon,
  userPlusIcon,
  manMinerIcon,
} from "../../constants/constants";
import { PopupBuyMiner } from "../PopupBuyMiner/PopupBuyMiner";
import { ProgressBarComponent } from "../ProgressBar/ProgressBar";

export const Main = () => {
  //стейт для открытия попапа с gpt запросом
  const [isMintOpen, setIsMintOpen] = useState(false);

  //функция открытия попапа mint
  const handleOpenBuyMint = () => {
    setIsMintOpen(true);
  };

  //функция закрытия попапа mint
  const handleCloseBuyMint = () => {
    setIsMintOpen(false);
  };

  const currentValue = 0;
  const totalValue = 30000;

  return (
    <section className="main">
      <div className="blur">
        <div className="main__container">
          <h1 className="main__title">Limited Minting</h1>
          <ProgressBarComponent
            currentValue={currentValue}
            totalValue={totalValue}
          />
          <div className="main__miner-img-container">
            <img
              className="main__miner-img"
              src={manMinerIcon}
              alt="miner img"
            />
          </div>
          <div className="main__buttons-container">
            <button
              onClick={handleOpenBuyMint}
              className="main__button-mint"
              type="button"
            >
              <img
                className="main__button-mint-icon"
                src={whiteDiamondIcon}
                alt="mint icon"
              />
              Mint
            </button>
            <div className="main__second-buttons-container">
              <button className="main__button-info" type="button">
                <img
                  className="main__button-info-icon"
                  src={infoIcon}
                  alt="info icon"
                />
              </button>
              <Link className="main__button-ref" to="/referrals">
                <img
                  className="main__button-ref-icon"
                  src={userPlusIcon}
                  alt="referral icon"
                />
                Ref
              </Link>
            </div>
          </div>
          {/*         <div className="main__footer-buttons">
          <button className="main__ref-button" type="button" />
          <button className="main__market-button" type="button" />
        </div> */}
        </div>
        {isMintOpen && <PopupBuyMiner onClose={handleCloseBuyMint} />}
      </div>
    </section>
  );
};
