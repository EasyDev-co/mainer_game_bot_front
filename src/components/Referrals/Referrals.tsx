import { useEffect, useRef, useState } from "react";
import "./Referrals.css";
import { copyIcon, diamondIcon, id, userIcon, walletIcon } from "../../constants/constants";
import { BackArrowLink } from "../BackArrowLink/BackArrowLink";
import { TitlePage } from "../TitlePage/TitlePage";
import { UserHistoryItemList } from "../UserHistoryItemList/UserHistoryItemList";
import { ReferralsInfoBlockListItem } from "./ReferralsInfoBlockListItem/ReferralsInfoBlockListItem";
import { TUser } from "../../types/user";
import { checkUser } from "../../utils/getUser";
import { BASE_URL } from "../../constants/links";
import { TReferrals } from "../../types/referrals";
import { getInfo } from "../../utils/info";

export const Referrals = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const [user, setUser] = useState<TUser>();
  const [referrals, setReferrals] = useState<TReferrals>();

  const getReferrals = async () => {
    const response = await fetch(`${BASE_URL}/api/v1/users/referrals/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-ID": id,
      }
    }).then((res) => res.json());
    return response;
  };

  const copyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 3000);
        })
        .catch((error) => {
          console.error("Failed to copy text to clipboard:", error);
        });
    }
  };

  useEffect(() => {
    checkUser().then(data => setUser(data));
    getReferrals().then(data => setReferrals(data));
  }, []);

  if (!referrals) return null;

  return (
    <section className="referrals">
      <div className="referrals__container">
        <BackArrowLink link="/" />
        <TitlePage title="Referrals" />
        <div className="referrals__info-container">
          <ul className="referrals__first-info-block">
            <ReferralsInfoBlockListItem
              icon={walletIcon}
              title="Reward"
              info={referrals?.total_bonuses + " Miners" || "No data"}
            />
            <ReferralsInfoBlockListItem
              icon={userIcon}
              title="Referrals"
              info={referrals?.referrals_count + " People" || "No data"}
            />
          </ul>
          <div className="referrals__second-info-block">
            <p className="referrals__copy-text">Copy your referral link</p>
            <div className="referrals__copy-input-block">
              <input
                className="referrals__ref-link-input"
                type="text"
                value={user?.referrer_url || "Type /start to bot for display referral link"}
                ref={inputRef}
                readOnly
              />
              <button
                className="referrals__copy-button"
                type="button"
                onClick={copyToClipboard}
              >
                <img
                  className="referrals__copy-button-icon"
                  src={copyIcon}
                  alt="copy icon"
                />
              </button>
            </div>
            <div className="referrals__copy-text-block">
              {copied && <p className="referrals__copy-text">Copied!</p>}
            </div>
            <p className="referrals__copy-descr-text">
              Only on presale period: <span style={{ color: "red" }}>Get 100% miners from each referral!</span>
            </p>
            <p className="referrals__copy-descr-text">
              After presale period: Get 5% for each miners exchange
            </p>
          </div>
        </div>
        <div className="referrals__history-container">
          <h2 className="referrals__history-title">Referral history</h2>
          <div className="referrals__history-block">
            {referrals?.bonuses?.length > 0 ? (
              // <UserHistoryItemList history={referrals?.bonuses ?? []} referrals={referrals} />
              <ul className="user-history-item-list__list">
                {referrals?.bonuses.map((item, index) => (
                  <li key={index} className="user-history-item-list__history-block">
                    <>
                      <div className="user-history-item__icon-block">
                        <img className="user-history-item__icon" src={diamondIcon} alt="wallet icon" />
                      </div>
                      <div className="user-history-item__item-text-blocks">
                        <div className="user-history-item__item-text-block">
                          <p className="user-history-item__text">
                            From: <span className="user-history-item__text-span">{item.referrer_name}</span>
                          </p>
                          <p className="user-history-item__text-val">{item.amount} miners</p>
                        </div>
                        <div className="user-history-item__item-text-block">
                          <p className="user-history-item__text">
                            {item.created_at?.split(',')[0] || ''}, {item.created_at?.split(',')[1] || ''}
                          </p>
                        </div>
                      </div>
                    </>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="referrals__history-info-text">
                No transaction history
              </p>
            )}
          </div>
        </div>
      </div>
    </section >
  );
};
