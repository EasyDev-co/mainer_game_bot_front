import { useEffect, useRef, useState } from "react";
import "./Referrals.css";
import { copyIcon, id, userIcon, walletIcon } from "../../constants/constants";
import { history } from "../../constants/data";
import { BackArrowLink } from "../BackArrowLink/BackArrowLink";
import { TitlePage } from "../TitlePage/TitlePage";
import { UserHistoryItemList } from "../UserHistoryItemList/UserHistoryItemList";
import { ReferralsInfoBlockListItem } from "./ReferralsInfoBlockListItem/ReferralsInfoBlockListItem";
import { BASE_URL } from "../../constants/links";
import { TUser } from "../../types/user";
import { checkUser } from "../../utils/getUser";

export const Referrals = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const [linkWallet, setLinkWallet] = useState(false);
  const [user, setUser] = useState<TUser>();

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
  }, []);

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
              info="0 miners"
            />
            <ReferralsInfoBlockListItem
              icon={userIcon}
              title="Referrals"
              info="0 people"
            />
          </ul>
          <div className="referrals__second-info-block">
            <p className="referrals__copy-text">Copy your referral link</p>
            {linkWallet ? (
              <div className="referrals__copy-input-block">
                <input
                  className="referrals__ref-link-input"
                  type="text"
                  value={user?.referrer_url}
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
            ) : (
              <button
                onClick={() => setLinkWallet(true)}
                className="referrals__link-wallet-button"
                type="button"
              >
                Link Wallet
              </button>
            )}
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
