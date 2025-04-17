<<<<<<< HEAD
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
=======
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
>>>>>>> ayaayman
