import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Principal } from "@dfinity/principal";

// Import canister actors from declarations
import { opend } from "../../declarations/opend";
import { nft } from "../../declarations/nft";

const CURRENT_USER_ID = Principal.fromText("2vxsx-fae"); // placeholder for local user

const init = async () => {
  const root = document.getElementById("root");

  if (!root) {
    console.error("Root element not found");
    return;
  }

  ReactDOM.render(
    <App currentUser={CURRENT_USER_ID} opend={opend} nft={nft} />,
    root
  );
};

init();