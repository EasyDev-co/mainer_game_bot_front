import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "../Main/Main";
import { Header } from "../Header/Header";
import { Market } from "../Market/Market";
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
        </Routes>
      </div>
    </div>
  );
};
