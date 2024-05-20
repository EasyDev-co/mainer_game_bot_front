import "./PopupBuyMiner.css";
import React, { useEffect, useState } from "react";
import { hackIcon, id, tg } from "../../../constants/constants";
import { Popup } from "../Popup/Popup";
import { BASE_URL, final_address } from "../../../constants/links";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { getInfo } from "../../../utils/info";

export const PopupBuyMiner = ({ onClose }: { onClose: () => void; }) => {
  const [inputValue, setInputValue] = useState(0);
  const [miners, setMiners] = useState(0);
  const [minersPerPack, setMinersPerPack] = useState(0);
  const address = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();
  const [pricePerPack, setPricePack] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setInputValue(0);
      setMiners(0);
      return;
    }
    const value = parseFloat(e.target.value) * pricePerPack;
    setInputValue(value);
    setMiners(+e.target.value);
    console.log(miners);
  };

  const buyMiner = async (e: React.FormEvent) => {
    if (!address) {
      tonConnectUI.openModal();
      return;
    };
    if (miners <= 0 && address) {
      tg.showAlert("Please enter a valid amount");
      return;
    };
    try {
      e.preventDefault();
      const buy = async (boc: string) => {
        return await fetch(`${BASE_URL}/api/v1/market/purchase_mainer/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "User-ID": id,
          },
          body: JSON.stringify({
            miners_packs: miners,
            boc: boc
          }),
        });
      };

      let transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 1 min
        messages: [
          {
            address: final_address,
            amount: (parseFloat(inputValue.toString()) * 10 ** 9).toString(),
            // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
          }
        ]
      };

      let result = await tonConnectUI.sendTransaction(transaction);
      if (result?.boc) {
        buy(result.boc)
          .then((res) => res.json())
          .then((data) => { tg.showAlert(data.message || data.error); window.location.reload(); console.log(data.message || data.error); })
          .catch((err) => tg.showAlert(err?.message));
      }
    } catch (error: any) {
      // Handle tonConnectUI exceptions here
      console.error("Error while sending transaction:", error.message);
      // Optionally, show an error message to the user
      tg.showAlert("An error occurred while processing the transaction. Please try again later.");
    }
    e.preventDefault();
  };

  useEffect(() => {
    getInfo().then((data) => {
      setMinersPerPack(data.miners_per_pack);
      setPricePack(data.miner_price);
    }).catch((err) => console.log(err));
  });

  return (
    <Popup onClose={onClose}>
      <form className="popup-buy-miner__form-block">
        <h2 className="popup-buy-miner__title">Buy Miner</h2>
        <p className="popup-buy-miner__subtitle">
          1 miner package = {minersPerPack} miners
        </p>
        <div className="popup-buy-miner__input-container">
          <img
            className="popup-buy-miner__input-icon"
            src={hackIcon}
            alt="hack icon"
          />
          <input
            className="popup-buy-miner__input"
            type="number"
            placeholder="0"
            onChange={handleInputChange}
          />
        </div>
        <p className="popup-buy-miner__text-sum">Sum TON: {inputValue.toFixed(2)}</p>
        <button
          onClick={buyMiner} className="popup-buy-miner__buy-button" type="button">
          Buy
        </button>
      </form>
    </Popup>
  );
};
