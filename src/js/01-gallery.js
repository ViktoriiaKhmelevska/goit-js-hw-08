// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const container = document.querySelector('.gallery');

const markup = createMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', markup);

function createMarkup(items) { 
    return items.map(({ preview, original, description }) => 
         `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>`
    ).join('');
};

 new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    closeText: '×',
    widthRatio: 0.8,
    heightRatio: 0.8,
});