import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(SimpleLightbox);
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createImagesGallery() {
  gallery.classList.add('gallery');
  // console.log(gallery.classList);
  for (const item of galleryItems) {
    let htmlImageString = `<li class="gallery__link">
     <a class="gallery__item" href="${item.original}">
        <img 
        class="gallery__image" 
        src="${item.preview}" 
        alt="${item.description}"
        title="${item.description}"
     />
     </a>
   </li>`;
    gallery.innerHTML += htmlImageString;
  }
}
//
createImagesGallery();

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

console.log(galleryItems);
