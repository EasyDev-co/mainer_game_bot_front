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
                <Presale />
              </>
            }
          />
          <Route
            path={"/main"}
            element={
              <>
                <Header />
                <Main />
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
