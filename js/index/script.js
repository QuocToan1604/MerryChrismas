const gift = document.querySelector('.gift');
const fourleaf = document.querySelector('.fourleaf');
const message = document.querySelector('.message');

gift.addEventListener('click', () => {
    gift.classList.toggle('is-open');
    fourleaf.classList.toggle('is-fade-in');
    message.classList.toggle('is-visible');
});