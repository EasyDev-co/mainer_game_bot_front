import "./PopupMarket.css";
import { tonIcon, diamondIcon, userIcon, id, tg } from "../../../constants/constants";
import { PopupMarketItem } from "../PopupMarketItem/PopupMarketItem";
import { BASE_URL } from "../../../constants/links";
import { useEffect, useState } from "react";
import { getInfo } from "../../../utils/info";

export const PopupMarket = ({
  handleMarketPopupState,
  ton,
  crystal,
  selectedCardItem,
  selectedCardItemSeller,
  selectedCardItemCrystals,
  selectedCardItemPrice,
}: {
  handleMarketPopupState: () => void;
  ton: number | string | undefined;
  crystal: number | string | undefined;
  selectedCardItem: any;
  selectedCardItemSeller: any;
  selectedCardItemCrystals: number;
  selectedCardItemPrice: number;
}) => {
  // const commission = ((selectedCardItemPrice || 0) * 0.01) / 100;
  const [commision, setCommision] = useState(0);
  const total = (selectedCardItemPrice - commision) + commision * 2; console.log(selectedCardItem);
  console.log(Number(selectedCardItemPrice));
  console.log(total);
  console.log(typeof total);
  const buyMarketItem = async () => {
    await fetch(`${BASE_URL}/api/v1/market/deals/${selectedCardItem.id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id
      }
    }).then((res) => res.json())
      .then((data) => tg.showAlert(data.message) && window.location.reload())
      .catch((err) => tg.showAlert(err?.message));
  };

  useEffect(() => {
    getInfo().then((data) => {
      console.log(data);
      setCommision(data.p2p_commission);
    }).catch((err) => console.log(err));
  }, []);
  return (
    <div className="popup-market">
      <div className="popup-market__container">
        <button
          className="popup-market__button-closed"
          onClick={handleMarketPopupState}
        />
        <form className="popup-market__form-block">
          <h2 className="popup-market__title">Buy</h2>
          <div className="popup-market__list">
            <PopupMarketItem
              titleIcon={userIcon}
              title="Seller"
              walletText="You have crystals:"
              walletVal={crystal}
              itemValue={selectedCardItem ? selectedCardItemSeller.first_name : ""}
            />
            <PopupMarketItem
              titleIcon={diamondIcon}
              title="Crystals"
              bottomText="5% fee for crystal purchase"
              itemValue={selectedCardItem ? selectedCardItemCrystals : ""}
            />
            <PopupMarketItem
              titleIcon={tonIcon}
              title="Price"
              walletText="You have TON:"
              walletVal={ton}
              itemValue={selectedCardItem ? selectedCardItemPrice : ""}
            />
            <PopupMarketItem
              titleIcon={tonIcon}
              title="Commission"
              itemValue={commision}
            />
            <PopupMarketItem
              titleIcon={tonIcon}
              title="Total"
              itemValue={total.toFixed(2)}
            />
          </div>
          <button className="popup-market__buy-button" type="button" onClick={buyMarketItem}>
            Buy
          </button>
        </form>
      </div>
    </div>
  );
};
