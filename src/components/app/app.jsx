import './app.scss';
import About from "../about/about";
import Winner from "../winner/winner";
import LiveShow from "../live-show/live-show";
import Product from "../product/product";
import Header from "../header/header";
import ReminderPopup from "../reminder-popup/reminder-popup";
import Info from "../info/info";

function App() {
  return (
    <div className="app">
      <Header />
      <Info />
      <Product />
      <LiveShow />
      <Winner />
      <About />
      <ReminderPopup />
    </div>
  );
}

export default App;
