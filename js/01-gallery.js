import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', clickOnGalleryItem);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
    }).join('');
}

function clickOnGalleryItem(evt) {
    evt.preventDefault();
  const onItemUrl = evt.target.dataset.source;
  console.log(onItemUrl);
  const isColorSwatchEl = evt.target.classList.contains('gallery__image');
  if (!isColorSwatchEl) {
    return;
  }

   
    const instance = basicLightbox.create(`
    <img src="${onItemUrl}">`)
    
    instance.show()
    
}
