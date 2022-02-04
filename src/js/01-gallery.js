// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
}).join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightboxOptions = {
    overlayOpacity: 1,
    captions: true,
    captionsData: 'alt',
    captionPosition: 'top',

};

 new SimpleLightbox('.gallery a', lightboxOptions);

console.log(galleryItems);
