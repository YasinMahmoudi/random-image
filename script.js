'use strict';

///////////////////////////////////////
// ELEMENTS

const img = document.querySelector('.image-box__img');
const tryBtn = document.querySelector('.image-box__btn');

///////////////////////////////////////
// EVENT HANDLERS

// Image maker
const randomNumber = (min, max) => Math.trunc(Math.random() * max + min);

tryBtn.addEventListener('click', function () {
  // Get image src , alt attribute
  const srcAttr = img.getAttribute('src');

  // Get image name and extension based on src attr
  const [imgName, extension] = srcAttr.split('/')[1].split('.');

  // Generate random image index and replace it with old one
  const imgIndex = randomNumber(1, 8);
  const modifiedImageName = `img/img-${imgName.split('-')[1].replace(imgName.split('-')[1], imgIndex)}.${extension}`;

  // Add translate class to old image
  img.classList.add('translate');

  // Modified image tag attributes , remove translate class
  setTimeout(() => {
    img.classList.remove('translate');

    img.setAttribute('src', modifiedImageName);
    img.alt = `Picture ${imgIndex}`;
  }, 500);
});

//////////// Cookie modal

const modal = document.createElement('div');
modal.classList.add('modal');

modal.innerHTML = `

      <div class="modal__wrapper">
        <span class="modal__title"> Use this for generate random images </span>

        <button class="modal__btn"> Got it </button>
      </div>

`;

// Insert modal
document.querySelector('body').prepend(modal);

// Delete modal

document.querySelector('.modal__btn').addEventListener('click', function () {
  modal.remove();
});
