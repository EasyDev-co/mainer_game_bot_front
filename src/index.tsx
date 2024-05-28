import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TonConnectUIProvider
        actionsConfiguration={{
          twaReturnUrl: "https://t.me/minersgate_bot",
        }}
        manifestUrl="https://mainer-game-bot.netlify.app/manifest_add.json"
      >
        <App />
      </TonConnectUIProvider>
    </BrowserRouter>
  </React.StrictMode >
);
