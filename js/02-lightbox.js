import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryMarkup = createGalary(galleryItems);

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

gallery.addEventListener("click", onOpenModal);


function createGalary(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt = "${description}";
        />
      </a>
    </li>`
  }).join("");
}

function onOpenModal(event) {
    event.preventDefault();
    const lightbox = new SimpleLightbox('.gallery .gallery__link', {
        captionsData: "alt",
        captionsDelay: 250,
    })
    lightbox.open();
}
console.log(galleryItems);
