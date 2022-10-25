import App from "./components/app/app";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import store from "./services/store";

const root = createRoot(document.getElementById('freestyle'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
