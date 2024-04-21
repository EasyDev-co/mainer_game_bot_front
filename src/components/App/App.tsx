import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Presale } from "../Presale/Presale";
import { Header } from "../Header/Header";
import { Market } from "../Market/Market";
import { Main } from "../Main/Main";
import { Referrals } from "../Referrals/Referrals";

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
            path={"/main"}
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
