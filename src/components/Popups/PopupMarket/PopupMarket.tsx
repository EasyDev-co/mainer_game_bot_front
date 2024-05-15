import "./PopupMarket.css";
import { tonIcon, diamondIcon, userIcon } from "../../../constants/constants";
import { PopupMarketItem } from "../PopupMarketItem/PopupMarketItem";

export const PopupMarket = ({
  handleMarketPopupState,
  selectedCardItem,
  selectedCardItemSeller,
  selectedCardItemCrystals,
  selectedCardItemPrice,
}: {
  handleMarketPopupState: () => void;
  selectedCardItem: any;
  selectedCardItemSeller: any;
  selectedCardItemCrystals: number;
  selectedCardItemPrice: number;
}) => {
  const commission = ((selectedCardItemPrice || 0) * 0.01) / 100;
  const total = (selectedCardItemPrice || 0) - commission;
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
              walletVal="0"
              itemValue={selectedCardItem ? selectedCardItemSeller.first_name: ""}
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
              walletVal="0"
              itemValue={selectedCardItem ? selectedCardItemPrice : ""}
            />
            <PopupMarketItem
              titleIcon={tonIcon}
              title="Commission"
              itemValue="0.01"
            />
            <PopupMarketItem
              titleIcon={tonIcon}
              title="Total"
              itemValue={total}
            />
          </div>
          <button className="popup-market__buy-button" type="button">
            Buy
          </button>
        </form>
      </div>
    </div>
  );
};
