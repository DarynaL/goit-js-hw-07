import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', clickOnGalleryItem);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
       return `<li class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
`;
    }).join('');
}
function clickOnGalleryItem(evt) {
    evt.preventDefault();
    const onItemUrl = evt.target;
    console.log(onItemUrl);
  const isColorSwatchEl = evt.target.classList.contains('gallery__image');
  if (!isColorSwatchEl) {
    return;
  }

    
    var lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
    });
}