const productImage = document.querySelector('.freestyle-product__image');
const productThumbsContainer = document.querySelector('.freestyle-product__thumbs');
const productThumbs = document.querySelectorAll('.freestyle-product__thumb');

function changeImage(image, src) {
    image.src = src;
}

productThumbsContainer.addEventListener('click', (event) => {
    const { target } = event;

    if (target.dataset.src) {
        changeImage(productImage, target.dataset.src);
        productThumbs.forEach((item) => {
            item.classList.remove('freestyle-product__thumb_active');
        });

        target.parentElement.classList.add('freestyle-product__thumb_active');
    }
});
