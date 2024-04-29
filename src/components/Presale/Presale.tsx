import { useState } from "react";
import { Link } from "react-router-dom";
import "./Presale.css";
import {
  darkInfoIcon,
  darkDiamondIcon,
  darkAddRef,
  manMinerIcon,
} from "../../constants/constants";
import { PopupBuyMiner } from "../Popups/PopupBuyMiner/PopupBuyMiner";
import { ModalHowPlay } from "../ModalHowPlay/ModalHowPlay";
import { ProgressBarComponent } from "../ProgressBar/ProgressBar";

export const Presale = () => {
  //стейт для открытия и закратия попапа mint
  const [isMintState, setIsMintState] = useState(false);
  //стейт для открытия и закрытия попапа info
  const [isInfoState, setIsInfoState] = useState(false);

  //функция открытия и закрытия попапа mint
  const handleStateBuyMint = () => {
    setIsMintState(!isMintState);
  };

  //функция открытия и закрытия попапа info
  const handleStateInfo = () => {
    setIsInfoState(!isInfoState);
  };

  const currentValue = 10000;
  const totalValue = 35000;

  return (
    <section className="presale">
      <div className="presale__container">
        <h1 className="presale__title">
          <span className="presale__title-span">Limited</span>
          <br />
          <span className="presale__title-span">Minting</span>
        </h1>
        <div className="presale__miner-img-container">
          <img
            className="presale__miner-img"
            src={manMinerIcon}
            alt="miner img"
          />
        </div>
        <ProgressBarComponent
          currentValue={currentValue}
          totalValue={totalValue}
        />
        <div className="presale__buttons-container">
          <button
            onClick={handleStateBuyMint}
            className="presale__button-mint"
            type="button"
          >
            <img
              className="presale__button-mint-icon"
              src={darkDiamondIcon}
              alt="mint icon"
            />
            <p className="presale__button-mint-text">Mint</p>
          </button>
          <div className="presale__second-buttons-container">
            <button
              onClick={handleStateInfo}
              className="presale__button-info"
              type="button"
            >
              <img
                className="presale__button-info-icon"
                src={darkInfoIcon}
                alt="info icon"
              />
              <p className="presale__button-info-text">Info</p>
            </button>
            <Link className="presale__button-ref" to="/referrals">
              <img
                className="presale__button-ref-icon"
                src={darkAddRef}
                alt="referral icon"
              />
              <p className="presale__button-ref-text">Ref</p>
            </Link>
          </div>
        </div>
      </div>
      {isMintState && <PopupBuyMiner onClose={handleStateBuyMint} />}
      {isInfoState && <ModalHowPlay onClose={handleStateInfo} />}
    </section>
  );
};
