import './app.scss';
import About from "../about/about";
import Winner from "../winner/winner";
import FreestyleWinners from "../winners/freestyle-winners";
import Product from "../product/product";
import Header from "../header/header";
import ReminderPopup from "../reminder-popup/reminder-popup";
import Info from "../info/info";
import Comments from "../comments/comments";
import {useState} from "react";

function App() {
  const [isCommentsShow, setIsCommentsShow] = useState(false);
  return (
    <div className="app">
      <Header />
      <Info isCommentsShow={isCommentsShow} setIsCommentsShow={setIsCommentsShow}/>
      {isCommentsShow && (<Comments />)}
      <Product />
      <FreestyleWinners />
      <Winner />
      <About />
      <ReminderPopup />
    </div>
  );
}

export default App;
