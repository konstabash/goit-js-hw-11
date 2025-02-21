import axios from 'axios';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import getImages from './js/pixabay-api';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    form: document.querySelector(".search-form"),
    formInput: document.querySelector('.input-field'),
    gallery: document.querySelector('.gallery')
}

const { form, formInput, gallery } = refs;

    let lightbox = new SimpleLightbox('.gallery a');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formInput.value.trim() === '') {
        formInput.value = '';
        return;
    };
    getImages(formInput.value.trim())
        .then(img => {
            gallery.innerHTML = imagesTemplate(img);
            lightbox.refresh();
        });
});

function imageTemplate(image) {
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
    return `
        <a class="gallery-item" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" data-source="${largeImageURL}" />
            <div class="image-features">
                <div class="features-text-field">
                    <p class="image-feature-text">Likes</p>
                    <p class="image-feature-text">${likes}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Views</p>
                    <p class="image-feature-text">${views}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Comments</p>
                    <p class="image-feature-text">${comments}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Downloads</p>
                    <p class="image-feature-text">${downloads}</p>
                </div>
            </div>
        </a>
    `;
}

function imagesTemplate(images) {
    return images.map(imageTemplate).join('');
};

gallery.addEventListener('click', e => {
    e.preventDefault();
        if (e.target === gallery) return;

    lightbox.open(e.target);

});