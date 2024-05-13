import "./Profile.css";
import { useEffect, useState } from "react";
import {
  diamondIcon,
  hackIcon,
  tonIcon,
  quitIcon,
  tonWhiteIcon,
  tg
} from "../../constants/constants";
import { PopupTon } from "../Popups/PopupTon/PopupTon";
import { BackArrowLink } from "../BackArrowLink/BackArrowLink";
import { TitlePage } from "../TitlePage/TitlePage";
import { ProfileItemWallet } from "./ProfileItemWallet/ProfileItemWallet";
import * as invoice from "../../utils/invoice";
import { checkUser } from "../../utils/getUser";
import { TUser } from "../../types/user";
import { useTonConnectUI, useTonAddress } from '@tonconnect/ui-react';


export const Profile = () => {
  //стейт для открытия и закрытия попапа ton deposit
  // @ts-ignore
  const [isTonDepositPopupState, setIsTonDepositPopupState] = useState(false);
  const userFriendlyAddress = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();

  //стейт для открытия и закрытия попапа ton withdrawal
  const [isTonWithdrawalPopupState, setIsTonWithdrawalPopupState] =
    useState(false);
  // стейт с инфой которую ввели в инпут в попапе
  const [inputValuePopup, setInputValuePopup] = useState<number>(0);
  //функция открытия и закрытия попапа ton deposit
  const handleTonDepositPopupState = async () => {
    setIsTonDepositPopupState(true);


    // await fetch('https://mainer-game.ddns.net/api/v1/deposit/connect_wallet/', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'User-ID': id
    //   }
    // }).then((res) => res.json())
    //   // .then((data) => tg.openTelegramLink(data.connect_url))
    //   .catch((err) => console.log(err));
    // // setIsTonDepositPopupState(false);
  };

  const [user, setUser] = useState<TUser>();

  //функция открытия и закрытия попапа ton Withdrawal
  const handleTonWithdrawalPopupState = () => {
    setIsTonWithdrawalPopupState(!isTonWithdrawalPopupState);
  };

  // const handleInvoice = (sum: number) => {
  //   invoice.generInvoice(sum)
  //     .then((data) => {
  //       // tg.openTelegramLink('https://t.me/wallet?startattach=tonconnect-ret__back');
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       tg.showAlert(err);
  //       console.log(err);
  //     });
  // };

  const handleSubmit = async (e: any) => {
    try {
      console.log("TON amount", inputValuePopup);
      console.log("Nanoton amount", (parseFloat(inputValuePopup.toString()) * 10 ** 9).toString());
      let transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 1 min
        messages: [
          {
            address: "UQDTcgmAZPXXwWqxFOljf1GwNucYSWD_lR_cDCR6an740jlC",
            amount: (parseFloat(inputValuePopup.toString()) * 10 ** 9).toString(),
            // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
          }
        ]
      };
      let response = await tonConnectUI.sendTransaction(transaction);
      tg.showAlert(response);
      console.log(response);
      // handleInvoice(inputValuePopup);
    } catch (error: any) {
      // Handle tonConnectUI exceptions here
      console.error("Error while sending transaction:", error.message);
      // Optionally, show an error message to the user
      tg.showAlert("An error occurred while processing the transaction. Please try again later.");
    }
    e.preventDefault();
  };

  useEffect(() => {
    checkUser().then((data) => {
      setUser(data);
    });
  }, []);



  return (
    <section className="profile">
      <div className="profile__container">
        <BackArrowLink link="/main" />
        <TitlePage title="Profile" />
        <div className="profile__wallet-block">
          <p className="profile__wallet-text">{userFriendlyAddress}</p>
          <button className="profile__wallet-exit-button" type="button">
            <img
              className="profile__wallet-exit-icon"
              src={quitIcon}
              alt="quit icon"
            />
          </button>
        </div>
        <div className="profile__info-block">
          <ul className="profile__currencies-list">
            <ProfileItemWallet icon={hackIcon} val={user?.miners_count} />
            <ProfileItemWallet icon={diamondIcon} val={user?.minerals_balance} />
            <ProfileItemWallet icon={tonWhiteIcon} val={user?.ton_balance} />
          </ul>
          <div className="profile__buttons-block">
            <button
              onClick={handleTonDepositPopupState}
              className="profile__button profile__first-button"
              type="button"
            >
              Deposit
            </button>
            <button
              onClick={handleTonWithdrawalPopupState}
              className="profile__button profile__second-button"
              type="button"
            >
              Withdrawal
            </button>
          </div>
        </div>
      </div>
      {isTonDepositPopupState && (
        <PopupTon
          onClose={handleTonDepositPopupState}
          onClick={handleSubmit}
          title="Deposit TON"
          buttonText="Deposit"
          text={
            <>
              Minimum withdrawal from: {""}
              <span className="popup-ton__button-text-span">0.1 TON</span>
            </>
          }
          firstTon={tonIcon}
          secondTon={tonWhiteIcon}
          value={inputValuePopup}
          onChange={(e: any) => setInputValuePopup(e.target.value)}
        />
      )}
      {isTonWithdrawalPopupState && (
        <PopupTon
          onClose={handleTonWithdrawalPopupState}
          title="Withdrawal TON"
          buttonText="Withdrawal"
          text={
            <>
              Minimum withdrawal from:{" "}
              <span className="popup-ton__button-text-span">0.1 TON</span>
              <br />
              Fee <span className="popup-ton__button-text-span">5%</span> from
              the withdrawal amount
            </>
          }
          firstTon={tonWhiteIcon}
          secondTon={tonIcon}
        />
      )}
    </section>
  );
};
