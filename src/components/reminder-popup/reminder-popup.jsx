import "./reminder-popup.scss";
import "./form.scss";
import {useDispatch, useSelector} from "react-redux";
import {setIsReminderPopupShow} from "../../services/actions/popup";

const ReminderPopup = () => {
  const dispatch = useDispatch();
  const isReminderPopupShow = useSelector(state => state.popupData.isReminderPopupShow);

  const handleClosePopup = () => dispatch(setIsReminderPopupShow(false));

  return isReminderPopupShow ? (
    <div className="popup">
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={handleClosePopup}></button>
        <h2 className="popup__title">Напомнить</h2>
        <form className="form">
          <label className="form__label">
            <input type="email" placeholder="Ваш Email" className="form__input form__input_type_email" required/>
          </label>
          <button type="submit" className="form__submit">Отправить</button>
        </form>
      </div>
    </div>
  ) : null;
};

export default ReminderPopup;
