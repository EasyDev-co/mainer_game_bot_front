import "./PopupClaim.css";
import { diamondIcon, id, tg } from "../../../constants/constants";
import { Popup } from "../Popup/Popup";
import { BASE_URL } from "../../../constants/links";
import { useEffect, useState } from "react";

export const PopupClaim = ({ onClose }: { onClose: () => void; }) => {
  const [unClaimedMinerals, setUnClaimedMinerals] = useState(0);
  const claimMinerals = async () => {
    await fetch(`${BASE_URL}/api/v1/users/claim_minerals/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      },
    });
  };

  useEffect(() => {
    const getCountMinerals = async () => {
      await fetch(`${BASE_URL}/api/v1/users/get/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "User-ID": id,
        },
      }).then((res) => res.json())
        .then((data) => setUnClaimedMinerals(data.stored_minerals))
        .catch((err) => tg.showAlert(err.message));
    };
    getCountMinerals();

  }, []);
  return (
    <Popup onClose={onClose}>
      <form className="claim__form">
        <h2 className="claim__title">Claim</h2>
        <div className="claim__info-block">
          <div className="claim__info-title-block">
            <img
              className="claim__info-title-icon"
              src={diamondIcon}
              alt="crystal icon"
            />
            <p className="claim__info-title-descr">
              Number of crystals to obtain
            </p>
          </div>
          <div className="claim__val-block">
            <p className="claim__val-text">{unClaimedMinerals}</p>
          </div>
          <p className="claim__descr">
            Commission for receiving crystals:{" "}
            <span className="claim__text-span">0.01 TON</span>
          </p>
        </div>
        <button className="claim__button" type="button" onClick={claimMinerals}>
          Get
        </button>
      </form>
    </Popup>
  );
};
