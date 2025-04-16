import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/storeLanguage.js";
import createAxiosInstance from "./apis/config";
import App from "./App.jsx";

const axiosInstance = createAxiosInstance(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App axiosInstance={axiosInstance} />
  </Provider>
);