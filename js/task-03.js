const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// 1)
// const galleryEl = document.querySelector('.gallery');

// const createGallery = function (array) {
//   return array.map((image) => {
//     const itemEl = document.createElement('li');
//     const imgEl = document.createElement('img');
//     imgEl.src = image.url;
//     imgEl.alt = image.alt;
//     imgEl.classList.add('gallery__image');
//     itemEl.append(imgEl);

//     return itemEl;
//   });
// };

// const itemsEl = createGallery(images);

// galleryEl.append(...itemsEl);


// ============================================


// 2)
const galleryEl = document.querySelector('.gallery');

const makeItemMarkup = function ({url, alt}) {
  return `
  <li>
    <img src="${url}" alt="${alt}" class="gallery__image">
  </li>
  `;
};

const makeGalleryMarkup = function (array) {return array.map(makeItemMarkup).join('')};

galleryEl.insertAdjacentHTML("afterbegin", makeGalleryMarkup(images));