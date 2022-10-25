import "./reminder-popup.scss";
import "./form.scss";
import {useDispatch, useSelector} from "react-redux";
import {setIsReminderPopupShow} from "../../services/actions/popup";
import {useState} from "react";
import api from "../../utils/Api";

const ReminderPopup = () => {
  const dispatch = useDispatch();
  const isReminderPopupShow = useSelector(state => state.popupData.isReminderPopupShow);
  const [emailValue, setEmailValue] = useState('');

  const handleChangeEmail = (evt) => setEmailValue(evt.target.value);

  const handleClosePopup = () => dispatch(setIsReminderPopupShow(false));

  const handleSumbitReminder = (evt) => {
    evt.preventDefault();
    api.sendReminder(emailValue);
    handleClosePopup();
  }

  return isReminderPopupShow ? (
    <div className="popup">
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={handleClosePopup}></button>
        <h2 className="popup__title">Напомнить</h2>
        <form className="form" onSubmit={handleSumbitReminder}>
          <label className="form__label">
            <input type="email" placeholder="Ваш Email:" className="form__input form__input_type_email" required
                   value={emailValue} onChange={handleChangeEmail}/>
          </label>
          <button type="submit" className="form__submit">Отправить</button>
        </form>
      </div>
    </div>
  ) : null;
};

export default ReminderPopup;
