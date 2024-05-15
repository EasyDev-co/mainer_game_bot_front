import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Presale.css";
import {
  darkInfoIcon,
  darkDiamondIcon,
  darkAddRef,
  logoNoBgZoomIcon
} from "../../constants/constants";
import { PopupBuyMiner } from "../Popups/PopupBuyMiner/PopupBuyMiner";
import { ModalHowPlay } from "../ModalHowPlay/ModalHowPlay";
import { ProgressBarComponent } from "../ProgressBar/ProgressBar";
import { checkUser } from "../../utils/getUser";

export const Presale = () => {
  //стейт для открытия и закратия попапа mint
  const [isMintState, setIsMintState] = useState(false);
  //стейт для открытия и закрытия попапа info
  const [isInfoState, setIsInfoState] = useState(false);

  const [miners, setMiners] = useState(0);

  //функция открытия и закрытия попапа mint
  const handleStateBuyMint = () => {
    setIsMintState(!isMintState);
  };

  //функция открытия и закрытия попапа info
  const handleStateInfo = () => {
    setIsInfoState(!isInfoState);
  };

  useEffect(() => {
    checkUser().then((data) => setMiners(data.miners_count));
  });

  const totalValue = 35000;

  return (
    <section className="presale">
      <div className="presale__container">
        <h1 className="presale__title">
          <span className="presale__title-span">Limited</span>
          <br />
          <span className="presale__title-span">Minting</span>
        </h1>
        <h2>Профиль <span style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}><a href="/profile">click</a></span></h2>
        <div className="presale__miner-img-container">
          <img
            className="presale__miner-img"
            src={logoNoBgZoomIcon}
            alt="miner img"
          />
        </div>
        <ProgressBarComponent
          currentValue={miners}
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
