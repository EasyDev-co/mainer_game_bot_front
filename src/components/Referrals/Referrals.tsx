import { useRef, useState } from "react";
import "./Referrals.css";
import { userIcon, walletIcon, copyIcon } from "../../constants/constants";
import { history } from "../../constants/data";
import { BackArrowLink } from "../BackArrowLink/BackArrowLink";
import { TitlePage } from "../TitlePage/TitlePage";
import { UserHistoryItemList } from "../UserHistoryItemList/UserHistoryItemList";

export const Referrals = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

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

  return (
    <section className="referrals">
      <div className="referrals__container">
        <BackArrowLink link="/" />
        <TitlePage title="Referrals" />
        <div className="referrals__info-container">
          <div className="referrals__first-info-block">
            <div className="referrals__val-block referrals__reward-block">
              <div className="referrals__info-title-block">
                <img
                  className="referrals__info-icon"
                  src={walletIcon}
                  alt="wallet icon"
                />
                <h2 className="referrals__info-title">Reward</h2>
              </div>
              <p className="referrals__info-val-text">0 miners</p>
            </div>
            <div className="referrals__val-block referrals__quantity-block">
              <div className="referrals__info-title-block">
                <img
                  className="referrals__info-icon"
                  src={userIcon}
                  alt="user icon"
                />
                <h2 className="referrals__info-title">Referrals</h2>
              </div>
              <p className="referrals__info-val-text">0 people</p>
            </div>
          </div>
          <div className="referrals__second-info-block">
            <p className="referrals__copy-text">Copy your referral link</p>
            <div className="referrals__copy-input-block">
              <input
                className="referrals__ref-link-input"
                type="text"
                defaultValue="your-referral-link"
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
              Only on presale period: Get 100% miners from each referral!
            </p>
          </div>
        </div>
        <div className="referrals__history-container">
          <h2 className="referrals__history-title">Referral history</h2>
          <div className="referrals__history-block">
            {history.length > 0 ? (
              <UserHistoryItemList history={history} />
            ) : (
              <p className="referrals__history-info-text">
                No transaction history
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
