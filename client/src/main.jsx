import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; // for importing packages we need {}.
import store from "./store/store.js"; // for importing files we no need {}.


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* this creates the react router */}
    <Provider store={store}>
      {/* this redux setup */}
      <App />
    </Provider>
  </BrowserRouter>
);
