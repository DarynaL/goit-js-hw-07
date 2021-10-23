import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', clickOnGalleryItem);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
       return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>
`;
    }).join('');
}
function clickOnGalleryItem(evt) {
    evt.preventDefault();
    const onItemUrl = evt.target;
    console.log(onItemUrl);

    
    var lightbox = new SimpleLightbox('.gallery a', {
        counterDelay: 250,
        captionsData: 'alt',
        showCounter: false,
    });
}