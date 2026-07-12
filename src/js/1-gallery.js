import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: 'https://picsum.photos/id/10/300/200',
    original: 'https://picsum.photos/id/10/900/600.jpg',
    description: 'Nature landscape',
  },
  {
    preview: 'https://picsum.photos/id/20/300/200',
    original: 'https://picsum.photos/id/20/900/600.jpg',
    description: 'City street',
  },
  {
    preview: 'https://picsum.photos/id/30/300/200',
    original: 'https://picsum.photos/id/30/900/600.jpg',
    description: 'Mountain view',
  },
  {
    preview: 'https://picsum.photos/id/40/300/200',
    original: 'https://picsum.photos/id/40/900/600.jpg',
    description: 'Forest path',
  },
  {
    preview: 'https://picsum.photos/id/50/300/200',
    original: 'https://picsum.photos/id/50/900/600.jpg',
    description: 'Ocean waves',
  },
  {
    preview: 'https://picsum.photos/id/60/300/200',
    original: 'https://picsum.photos/id/60/900/600.jpg',
    description: 'Desert dunes',
  },
  {
    preview: 'https://picsum.photos/id/70/300/200',
    original: 'https://picsum.photos/id/70/900/600.jpg',
    description: 'Snowy peaks',
  },
  {
    preview: 'https://picsum.photos/id/80/300/200',
    original: 'https://picsum.photos/id/80/900/600.jpg',
    description: 'Sunset sky',
  },
  {
    preview: 'https://picsum.photos/id/90/300/200',
    original: 'https://picsum.photos/id/90/900/600.jpg',
    description: 'Green valley',
  },
];

const galleryList = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
  return `
<li class="gallery-item">
<a class="gallery-link" href="${original}">
<img
class="gallery-image"
src="${preview}"
alt="${description}"
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
