import "./comment-form.scss";
import {useEffect, useState} from "react";
import InputMask from 'react-input-mask';
import {useDispatch, useSelector} from "react-redux";
import {sendComment} from "../../services/actions/comments";
import Message from "../message/message";

const CommentForm = ({handleScroll}) => {
  const dispatch = useDispatch();
  const isCommentSending = useSelector(state => state.commentsData.isCommentSending);
  const isCommentSended = useSelector(state => state.commentsData.isCommentSended);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [nameInputValue, setNameInputValue] = useState('');
  const [phoneInputValue, setPhoneInputValue] = useState('');
  const [messageInputValue, setMessageInputValue] = useState('');

  const handleCheckValidity = () => {
    const validity = nameInputValue === '' || messageInputValue === '' || phoneInputValue.length < 17;
    setIsFormDisabled(validity);
  }

  const handleNameInput = (evt) => {
    const value = evt.target.value.replace(/\d/g, '');
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

  const handleSubmitComment = (evt) => {
    evt.preventDefault();
    dispatch(sendComment({
      name: nameInputValue,
      phone: phoneInputValue,
      message: messageInputValue,
    }));
  }

  useEffect(() => {
    const id = setInterval(() => {
      handleCheckValidity();
    }, 100)

    return () => clearInterval(id)
  }, [nameInputValue, phoneInputValue, messageInputValue])

  return (
    <form className="freestyle-form" onSubmit={handleSubmitComment}>
      {
        isCommentSended ? (
          <>
            <Message>Ваш комментарий принят и находится на проверке. Спасибо за участие в конкурсе!</Message>
            <a href="#" className="freestyle-form__link" onClick={handleScroll}>Подробней об акции</a>
          </>
        ) : (
          <>
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
                mask='+7 (999) 999 9999'
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
              <a href="#" className="freestyle-form__link" onClick={handleScroll}>Подробней об акции</a>
              <button
                disabled={isFormDisabled || isCommentSending}
                className={`freestyle-form__button ${(isFormDisabled || isCommentSending) ? 'freestyle-form__button_disabled' : ''}`}
              >
                {isFormDisabled ? 'Заполните все поля' : (
                  <>
                    {isCommentSending ? 'Отправляем' : 'Отправить'}
                  </>
                )}
                {isCommentSending && <span className="freestyle-form__loader"/>}
              </button>
            </fieldset>
          </>
        )
      }
    </form>
  );
};

export default CommentForm;
