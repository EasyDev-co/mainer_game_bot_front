import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Presale } from "../Presale/Presale";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Referrals } from "../Referrals/Referrals";
import { Profile } from "../Profile/Profile";
import { MarketSell } from "../Market/MarketSell/MarketSell";
import { MarketHistory } from "../Market/MarketHistory/MarketHistory";
import { Market } from "../Market/Market";
import { useEffect, useState } from "react";
import { getInfo } from "../../utils/info";

export const Body = () => {
  const [isPresale, setIsPresale] = useState<boolean>();
  console.log(isPresale);

  useEffect(() => {
    getInfo().then((data) => {
      if (data.is_presale) {
        setIsPresale(true);
        console.log(data);
      } else {
        setIsPresale(false);
      }
    });
  }, []);

  if (isPresale === undefined) {
    return null;
  }

  if (isPresale) {
    return <Presale />;
  } else {
    return <Main />;
  }
};

export const App = () => {

  return (
    <div className="body">
      <div className="page">
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <Header />
                <Body />
              </>
            }
          />
          <Route
            path={"/main"}
            element={
              <>
                <Header />
                <Body />
              </>
            }
          />
          <Route
            path={"/market"}
            element={
              <>
                <Market />
              </>
            }
          />
          <Route
            path={"/referrals"}
            element={
              <>
                <Referrals />
              </>
            }
          />
          <Route
            path={"/profile"}
            element={
              <>
                <Profile />
              </>
            }
          />
          <Route
            path={"/market-sell"}
            element={
              <>
                <MarketSell />
              </>
            }
          />
          <Route
            path={"/market-story"}
            element={
              <>
                <MarketHistory />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
