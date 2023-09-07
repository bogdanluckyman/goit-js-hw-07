import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) =>
   `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`)

container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener('click', onClick)

function onClick(event) {
    event.preventDefault()
    const { target } = event;
    if (!target.classList.contains('gallery__image')) {
        return
    }
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionType: 'attr',
        captionPosition: 'bottom',
        captionDelay: 250
    });
   
}