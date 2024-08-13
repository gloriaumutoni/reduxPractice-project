import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from './features/user.jsx'
import themeSlice from "./features/theme.jsx";

const store = configureStore({
  reducer: {
    user:userReducer,
    theme:themeSlice,
  },

});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
