const popup = document.querySelector('.popup');

const popupButton = document.querySelector('.freestyle-live__button');

const popupCloseButton = document.querySelector('.popup__close-button');

const form = document.querySelector('.form');

const emailInput = form.querySelector('.form__input');

// eslint-disable-next-line no-shadow
function showPopup(popup) {
    popup.classList.add('popup_opened');
}

// eslint-disable-next-line no-shadow
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function closeOnOverlay({ target }) {
    if (target && target.classList.contains('popup_opened')) {
        closePopup(popup);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('Email', emailInput.value);
    // eslint-disable-next-line max-len
    fetch('https://script.google.com/macros/s/AKfycbyPeCGdBhB8boBDI7_3qgKDdTDYpTy4IAF0Baja3Yow2o_FVIWlPCGGbAxA1AI9dwc6/exec', {
        method: 'POST',
        body:   formData,
    });
    form.reset();
    closePopup(popup);
});

popup.addEventListener('click', closeOnOverlay);

popupButton.addEventListener('click', () => showPopup(popup));

popupCloseButton.addEventListener('click', () => closePopup(popup));
