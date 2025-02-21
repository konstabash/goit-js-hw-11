import{a as m,i as c,S as d}from"./assets/vendor-YT4DRQk6.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function g(r){const a=document.querySelector("#loading");return a.classList.add("loader"),document.querySelector(".gallery").innerHTML="",m.get("https://pixabay.com/api/",{params:{key:"48946065-1d1345988ab2399d45be7b206",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>(s.data.hits.length===0&&c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",theme:"dark",messageSize:"16",backgroundColor:"#ef4040",messageColor:"#fafafb",iconColor:"#fafafb"}),a.classList.remove("loader"),s.data.hits)).catch(s=>{c.error({title:"Unexpected Error",message:`${s}`,position:"topRight",maxWidth:"432px",theme:"dark",messageSize:"16",backgroundColor:"#ef4040",messageColor:"#fafafb",iconColor:"#fafafb"}),a.classList.remove("loader")})}function p(r){const{webformatURL:a,largeImageURL:s,tags:i,likes:e,views:t,comments:o,downloads:u}=r;return`
        <a class="gallery-item" href="${s}">
            <img class="gallery-image" src="${a}" alt="${i}" data-source="${s}" />
            <div class="image-features">
                <div class="features-text-field">
                    <p class="image-feature-text">Likes</p>
                    <p class="image-feature-text">${e}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Views</p>
                    <p class="image-feature-text">${t}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Comments</p>
                    <p class="image-feature-text">${o}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Downloads</p>
                    <p class="image-feature-text">${u}</p>
                </div>
            </div>
        </a>
    `}function h(r){return r.map(p).join("")}const y={form:document.querySelector(".search-form"),formInput:document.querySelector(".input-field"),gallery:document.querySelector(".gallery")},{form:v,formInput:l,gallery:n}=y;let f=new d(".gallery a");v.addEventListener("submit",r=>{if(r.preventDefault(),l.value.trim()===""){l.value="";return}g(l.value.trim()).then(a=>{n.innerHTML=h(a),f.refresh()})});n.addEventListener("click",r=>{r.preventDefault(),r.target!==n&&f.open(r.target)});
//# sourceMappingURL=index.js.map
