import { useState } from "react";
import { Link } from "react-router-dom";
import "./Presale.css";
import {
  infoIcon,
  whiteDiamondIcon,
  userPlusIcon,
  manMinerIcon,
} from "../../constants/constants";
import { PopupBuyMiner } from "../PopupBuyMiner/PopupBuyMiner";
import { ProgressBarComponent } from "../ProgressBar/ProgressBar";

export const Presale = () => {
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
    <section className="presale">
      <div className="blur">
        <div className="presale__container">
          <h1 className="presale__title">Limited Minting</h1>
          <ProgressBarComponent
            currentValue={currentValue}
            totalValue={totalValue}
          />
          <div className="presale__miner-img-container">
            <img
              className="presale__miner-img"
              src={manMinerIcon}
              alt="miner img"
            />
          </div>
          <div className="presale__buttons-container">
            <button
              onClick={handleOpenBuyMint}
              className="presale__button-mint"
              type="button"
            >
              <img
                className="presale__button-mint-icon"
                src={whiteDiamondIcon}
                alt="mint icon"
              />
              Mint
            </button>
            <div className="presale__second-buttons-container">
              <button className="presale__button-info" type="button">
                <img
                  className="presale__button-info-icon"
                  src={infoIcon}
                  alt="info icon"
                />
              </button>
              <Link className="presale__button-ref" to="/referrals">
                <img
                  className="presale__button-ref-icon"
                  src={userPlusIcon}
                  alt="referral icon"
                />
                Ref
              </Link>
            </div>
          </div>
        </div>
        {isMintOpen && <PopupBuyMiner onClose={handleCloseBuyMint} />}
      </div>
    </section>
  );
};
