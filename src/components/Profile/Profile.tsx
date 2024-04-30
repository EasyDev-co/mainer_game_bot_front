import "./Profile.css";
import { useEffect, useState } from "react";
import {
  diamondIcon,
  hackIcon,
  tonIcon,
  quitIcon,
  tonWhiteIcon,
  id,
} from "../../constants/constants";
import { PopupTon } from "../Popups/PopupTon/PopupTon";
import { BackArrowLink } from "../BackArrowLink/BackArrowLink";
import { TitlePage } from "../TitlePage/TitlePage";
import { ProfileItemWallet } from "./ProfileItemWallet/ProfileItemWallet";
import * as invoice from "../../utils/invoice";
import { BASE_URL } from "../../constants/links";

export const Profile = () => {
  //стейт для открытия и закрытия попапа ton deposit
  const [isTonDepositPopupState, setIsTonDepositPopupState] = useState(false);
  //стейт для открытия и закрытия попапа ton withdrawal
  const [isTonWithdrawalPopupState, setIsTonWithdrawalPopupState] =
    useState(false);
  // стейт с инфой которую ввели в инпут в попапе
  const [inputValuePopup, setInputValuePopup] = useState<number>(0);
  //функция открытия и закрытия попапа ton deposit
  const handleTonDepositPopupState = () => {
    setIsTonDepositPopupState(!isTonDepositPopupState);
  };

  //функция открытия и закрытия попапа ton Withdrawal
  const handleTonWithdrawalPopupState = () => {
    setIsTonWithdrawalPopupState(!isTonWithdrawalPopupState);
  };

  const handleInvoice = (sum: number) => {
    invoice.generInvoice(sum)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleInvoice(inputValuePopup);
  };

  useEffect(() => {
    const checkUser = async () => {
      await fetch(`${BASE_URL}/api/v1/users/get/${id}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "User-ID": id
        }
      }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    };

    checkUser();
  }, []);

  return (
    <section className="profile">
      <div className="profile__container">
        <BackArrowLink link="/main" />
        <TitlePage title="Profile" />
        <div className="profile__wallet-block">
          <p className="profile__wallet-text">KJewqe023Ewdsdas</p>
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
            <ProfileItemWallet icon={hackIcon} val="0" />
            <ProfileItemWallet icon={diamondIcon} val="0" />
            <ProfileItemWallet icon={tonWhiteIcon} val="0" />
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
