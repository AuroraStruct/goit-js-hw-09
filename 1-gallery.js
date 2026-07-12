import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as l}from"./assets/vendor-CgTBfC_f.js";const a=[{small:"https://picsum.photos/id/10/300/200",large:"https://picsum.photos/id/10/900/600",alt:"Nature landscape"},{small:"https://picsum.photos/id/20/300/200",large:"https://picsum.photos/id/20/900/600",alt:"City street"},{small:"https://picsum.photos/id/30/300/200",large:"https://picsum.photos/id/30/900/600",alt:"Mountain view"},{small:"https://picsum.photos/id/40/300/200",large:"https://picsum.photos/id/40/900/600",alt:"Forest path"},{small:"https://picsum.photos/id/50/300/200",large:"https://picsum.photos/id/50/900/600",alt:"Ocean waves"},{small:"https://picsum.photos/id/60/300/200",large:"https://picsum.photos/id/60/900/600",alt:"Desert dunes"},{small:"https://picsum.photos/id/70/300/200",large:"https://picsum.photos/id/70/900/600",alt:"Snowy peaks"},{small:"https://picsum.photos/id/80/300/200",large:"https://picsum.photos/id/80/900/600",alt:"Sunset sky"},{small:"https://picsum.photos/id/90/300/200",large:"https://picsum.photos/id/90/900/600",alt:"Green valley"}],i=document.querySelector(".gallery");function o({small:t,large:s,alt:p}){return`
<li class="gallery-item">
<a class="gallery-link" href="${s}">
<img
class="gallery-image"
src="${t}"
alt="${p}"
/>
</a>
</li>
`}const e=a.map(o).join("");i.insertAdjacentHTML("beforeend",e);new l(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
