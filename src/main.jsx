import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render (
  <TransactionsProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </TransactionsProvider>,
);