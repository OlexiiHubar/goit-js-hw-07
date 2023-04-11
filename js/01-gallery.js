import { galleryItems } from "./gallery-items.js";
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
          data-source="${original}"
          alt = "${description}";
        />
      </a>
    </li>`
  }).join("");

}

function onOpenModal(event) {
    event.preventDefault();

    const currentElement = event.target;

    console.log(currentElement.nodeName);

    if (currentElement.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${currentElement.dataset.source}" alt="${currentElement.description}" width="800" height="600">
`, {
  	onShow: (instance) => console.log('onShow', instance),
		onClose: (instance) => console.log('onClose', instance)
})

  instance.show();

}



