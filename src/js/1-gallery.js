import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    small: 'https://picsum.photos/id/10/300/200',
    large: 'https://picsum.photos/id/10/900/600.jpg',
    alt: 'Nature landscape',
  },
  {
    small: 'https://picsum.photos/id/20/300/200',
    large: 'https://picsum.photos/id/20/900/600.jpg',
    alt: 'City street',
  },
  {
    small: 'https://picsum.photos/id/30/300/200',
    large: 'https://picsum.photos/id/30/900/600.jpg',
    alt: 'Mountain view',
  },
  {
    small: 'https://picsum.photos/id/40/300/200',
    large: 'https://picsum.photos/id/40/900/600.jpg',
    alt: 'Forest path',
  },
  {
    small: 'https://picsum.photos/id/50/300/200',
    large: 'https://picsum.photos/id/50/900/600.jpg',
    alt: 'Ocean waves',
  },
  {
    small: 'https://picsum.photos/id/60/300/200',
    large: 'https://picsum.photos/id/60/900/600.jpg',
    alt: 'Desert dunes',
  },
  {
    small: 'https://picsum.photos/id/70/300/200',
    large: 'https://picsum.photos/id/70/900/600.jpg',
    alt: 'Snowy peaks',
  },
  {
    small: 'https://picsum.photos/id/80/300/200',
    large: 'https://picsum.photos/id/80/900/600.jpg',
    alt: 'Sunset sky',
  },
  {
    small: 'https://picsum.photos/id/90/300/200',
    large: 'https://picsum.photos/id/90/900/600.jpg',
    alt: 'Green valley',
  },
];

const galleryList = document.querySelector('.gallery');

function createGalleryItem({ small, large, alt }) {
  return `
<li class="gallery-item">
<a class="gallery-link" href="${large}">
<img
class="gallery-image"
src="${small}"
alt="${alt}"
/>
</a>
</li>
`;
}

const markup = images.map(createGalleryItem).join('');
galleryList.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
