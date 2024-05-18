import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Presale.css";
import {
  darkInfoIcon,
  darkDiamondIcon,
  darkAddRef,
  logoNoBgZoomIcon,
  id,
  tg
} from "../../constants/constants";
import { PopupBuyMiner } from "../Popups/PopupBuyMiner/PopupBuyMiner";
import { ModalHowPlay } from "../ModalHowPlay/ModalHowPlay";
import { ProgressBarComponent } from "../ProgressBar/ProgressBar";
import { checkUser } from "../../utils/getUser";
import { getInfo } from "../../utils/info";
import { TStatistics } from "../../types/statistics";
import { Popup } from "../Popups/Popup/Popup";
import { BASE_URL, final_address } from "../../constants/links";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { checkTransaction } from "../../utils/checkTransaction";

export const Presale = () => {
  //стейт для открытия и закратия попапа mint
  const [isMintState, setIsMintState] = useState(false);
  const [tonConnectUI] = useTonConnectUI();
  const address = useTonAddress();
  //стейт для открытия и закрытия попапа info
  const [isInfoState, setIsInfoState] = useState(false);
  const [statistics, setStatistics] = useState<TStatistics>();
  const [isClaimPopup, setIsClaimPopup] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    getInfo().then((data) => setStatistics(data));
    setIsClaimPopup(true);
  }, []);

  const buySpecialPacks = async () => {
    const specialBuy = async (boc: string) => {
      if (!address) {
        tonConnectUI.openModal();
        return;
      };
      return await fetch(`${BASE_URL}/api/v1/special_buy/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-ID": id,
        },
        body: JSON.stringify({
          miners_count: 4000,
          ton_count: 1.4,
          boc: boc
        }),
      });
    };
    try {
      let transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 1 min
        messages: [
          {
            address: final_address,
            amount: (parseFloat("1.4".toString()) * 10 ** 9).toString(),
            // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
          }
        ]
      };

      let result = await tonConnectUI.sendTransaction(transaction);
      if (result?.boc) {
        checkTransaction(result.boc, 1.4);
        tg.showAlert("Transaction sent successfully");
        specialBuy(result.boc).catch((err) => {
          console.log(err);
        });
      }
    } catch (error: any) {
      console.log("Error", error);
    }
  };

  if (!statistics) return null;

  return (
    <section className="presale">
      {isClaimPopup &&
        <Popup onClose={() => setIsClaimPopup(false)}>
          <div style={{ paddingTop: '30px', alignContent: 'center' }}>
            <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Buy 4000 miners for 1.4 TON</h3>
            <button
              onClick={buySpecialPacks} className="popup-buy-miner__buy-button" type="button">
              Buy
            </button>
          </div>
        </Popup>}
      <div className="presale__container">
        <h1 className="presale__title">
          <span className="presale__title-span">Limited</span>
          <br />
          <span className="presale__title-span">Minting</span>
        </h1>
        <div className="presale__miner-img-container">
          <img
            className="presale__miner-img"
            src={logoNoBgZoomIcon}
            alt="miner img"
          />
        </div>
        <ProgressBarComponent
          currentValue={statistics.purchased_miners_packs}
          totalValue={statistics.presale_miners_count}
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
