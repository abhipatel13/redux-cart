import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../Services/reducers/index";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(rootReducer);

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
