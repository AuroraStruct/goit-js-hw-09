import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as s}from"./assets/vendor-CgTBfC_f.js";const o=[{preview:"https://picsum.photos/id/10/300/200",original:"https://picsum.photos/id/10/900/600.jpg",description:"Nature landscape"},{preview:"https://picsum.photos/id/20/300/200",original:"https://picsum.photos/id/20/900/600.jpg",description:"City street"},{preview:"https://picsum.photos/id/30/300/200",original:"https://picsum.photos/id/30/900/600.jpg",description:"Mountain view"},{preview:"https://picsum.photos/id/40/300/200",original:"https://picsum.photos/id/40/900/600.jpg",description:"Forest path"},{preview:"https://picsum.photos/id/50/300/200",original:"https://picsum.photos/id/50/900/600.jpg",description:"Ocean waves"},{preview:"https://picsum.photos/id/60/300/200",original:"https://picsum.photos/id/60/900/600.jpg",description:"Desert dunes"},{preview:"https://picsum.photos/id/70/300/200",original:"https://picsum.photos/id/70/900/600.jpg",description:"Snowy peaks"},{preview:"https://picsum.photos/id/80/300/200",original:"https://picsum.photos/id/80/900/600.jpg",description:"Sunset sky"},{preview:"https://picsum.photos/id/90/300/200",original:"https://picsum.photos/id/90/900/600.jpg",description:"Green valley"}],e=document.querySelector(".gallery");function r({preview:i,original:t,description:p}){return`
<li class="gallery-item">
<a class="gallery-link" href="${t}">
<img
class="gallery-image"
src="${i}"
alt="${p}"
/>
</a>
</li>
`}const a=o.map(r).join("");e.insertAdjacentHTML("beforeend",a);new s(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
