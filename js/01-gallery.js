import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) =>
   `<li class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img 
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`)

container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener('click', onClick)

function onClick(event) {
    event.preventDefault();
    const { target } = event;
    if (!target.classList.contains('gallery__image')) {
        return;
    }
  
    if (target.tagName !== 'IMG') {
        return;
    }

    const largeImage = target.getAttribute('data-source');
    const instance = basicLightbox.create(
        `<img src="${largeImage}" alt="${target.alt}">`, {
        onShow: (instance) => {
            window.addEventListener('keydown', onEscape);
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', onEscape);
        }
    });

    instance.show();

    function onEscape(event) {
        if (event.key === 'Escape') {
            instance.close();
        }
    }

    document.addEventListener('keydown', onEscape);
}