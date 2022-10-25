import "./comment-form.scss";
import {useEffect, useState} from "react";
import InputMask from 'react-input-mask';

const CommentForm = () => {
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [nameInputValue, setNameInputValue] = useState('');
  const [phoneInputValue, setPhoneInputValue] = useState('');
  const [messageInputValue, setMessageInputValue] = useState('');

  const handleCheckValidity = () => {
    const validity = nameInputValue === '' || messageInputValue === '' || phoneInputValue.length < 17;
    setIsFormDisabled(validity);
  }

  const handleNameInput = (evt) => {
    const value = evt.target.value;
    setNameInputValue(value);
  }

  const handlePhoneInput = (evt) => {
    const value = evt.target.value;
    setPhoneInputValue(value);
  }

  const handleMessageInput = (evt) => {
    const value = evt.target.value;
    setMessageInputValue(value);
  }

  useEffect(() => {
    const id = setInterval(() => {
      handleCheckValidity();
    }, 100)

    return () => clearInterval(id)
  }, [nameInputValue, phoneInputValue, messageInputValue])

  return (
    <form className="freestyle-form">
      <fieldset className="freestyle-form__fieldset">
        <input
          type="text"
          className="freestyle-form__input"
          placeholder="Ваше имя:"
          required
          value={nameInputValue}
          onChange={handleNameInput}
        />
        <InputMask
          className="freestyle-form__input"
          mask='(+7) 999 999 9999'
          maskChar=""
          placeholder="Ваше номер телефона:"
          value={phoneInputValue}
          onChange={handlePhoneInput}
          required
        >
        </InputMask>
      </fieldset>
      <textarea
        className="freestyle-form__input freestyle-form__input_message"
        placeholder="Написать сценарий:"
        rows="4"
        required
        value={messageInputValue}
        onChange={handleMessageInput}
      />
      <fieldset className="freestyle-form__fieldset freestyle-form__fieldset_footer">
        <a href="#" className="freestyle-form__link">Подробней об акции</a>
        <button
          disabled={isFormDisabled}
          className={`freestyle-form__button ${isFormDisabled ? 'freestyle-form__button_disabled' : ''}`}
        >
          {isFormDisabled ? 'Заполните все поля' : 'Отправить'}
        </button>
      </fieldset>
    </form>
  );
};

export default CommentForm;
