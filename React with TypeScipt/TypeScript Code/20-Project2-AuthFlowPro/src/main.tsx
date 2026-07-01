import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import App from "./App";
// import "./styles/globals.css"

import { store } from "./app/store";
import { SkeletonTheme } from "react-loading-skeleton";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SkeletonTheme baseColor="#e5e7eb" highlightColor="#f8fafc">
          <App />
        </SkeletonTheme>

        <Toaster position="top-right" reverseOrder={false} />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
